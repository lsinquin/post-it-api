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

async function findNoteByIdAndAccountId(id, accountId) {
  const {
    rows: [note],
  } = await query(
    'SELECT id, title, content FROM note WHERE id = $1 AND "accountId" = $2',
    [id, accountId]
  );

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

async function updateNoteById(id, title, content, accountId) {
  const {
    rows: [updatedNote],
  } = await query(
    'UPDATE note SET title = $2, content = $3 WHERE id = $1 AND "accountId" = $4 RETURNING id, title, content',
    [id, title, content, accountId]
  );

  return updatedNote;
}

async function deleteNoteById(id, accountId) {
  const {
    rows: [deletedNote],
  } = await query(
    'DELETE FROM note WHERE id = $1 AND "accountId" = $2 RETURNING id, title, content',
    [id, accountId]
  );

  return deletedNote;
}

export {
  findNotesByAccountId,
  findNoteByIdAndAccountId,
  insertNote,
  updateNoteById,
  deleteNoteById,
};
