const connection = require("../connection");

exports.getNotesByAccountId = async (accountId) => {
  const {
    rows: notes,
  } = await connection.query(
    'SELECT id, title, content FROM note WHERE "accountId" = $1 ORDER BY id ASC',
    [accountId]
  );

  return notes;
};

exports.getNoteById = async (id) => {
  const {
    rows: [note],
  } = await connection.query("SELECT * FROM note WHERE id = $1", [id]);

  return note;
};

exports.insertNote = async (title, content, accountId) => {
  const {
    rows: [insertedNote],
  } = await connection.query(
    'INSERT INTO note(title, content, "accountId") VALUES ($1, $2, $3) RETURNING id, title, content',
    [title, content, accountId]
  );

  return insertedNote;
};

exports.updateNoteById = async (id, title, content) => {
  const {
    rows: [updatedNote],
  } = await connection.query(
    "UPDATE note SET title = $2, content = $3 WHERE id = $1 RETURNING id, title, content",
    [id, title, content]
  );

  return updatedNote;
};

exports.deleteNoteById = async (id) => {
  const {
    rows: [deletedNote],
  } = await connection.query(
    "DELETE FROM note WHERE id = $1 RETURNING id, title, content",
    [id]
  );

  return deletedNote;
};
