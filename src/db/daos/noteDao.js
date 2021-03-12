import { query } from "../dbConnection";

async function findNotesByAccountId(accountId) {
  const {
    rows: notes,
  } = await query(
    'SELECT id, title, content FROM note WHERE "accountId" = $1 ORDER BY id ASC',
    [accountId]
  );

  return notes;
}

async function findNoteById(id) {
  const {
    rows: [note],
  } = await query("SELECT * FROM note WHERE id = $1", [id]);

  return note;
}

async function insertNote(title, content, accountId) {
  const {
    rows: [insertedNote],
  } = await query(
    'INSERT INTO note(title, content, "accountId") VALUES ($1, $2, $3) RETURNING id, title, content',
    [title, content, accountId]
  );

  return insertedNote;
}

async function updateNoteById(id, title, content) {
  const {
    rows: [updatedNote],
  } = await query(
    "UPDATE note SET title = $2, content = $3 WHERE id = $1 RETURNING id, title, content",
    [id, title, content]
  );

  return updatedNote;
}

async function deleteNoteById(id) {
  const {
    rows: [deletedNote],
  } = await query(
    "DELETE FROM note WHERE id = $1 RETURNING id, title, content",
    [id]
  );

  return deletedNote;
}

export {
  findNotesByAccountId,
  findNoteById,
  insertNote,
  updateNoteById,
  deleteNoteById,
};
