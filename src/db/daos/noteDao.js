import { query } from "../dbConnection";

async function findNotesByUserId(userId) {
  const {
    rows: notes,
  } = await query(
    'SELECT id, title, content FROM note WHERE "userId" = $1 ORDER BY id ASC',
    [userId]
  );

  return notes;
}

async function findNoteByIdAndUserId(id, userId) {
  const {
    rows: [note],
  } = await query(
    'SELECT id, title, content FROM note WHERE id = $1 AND "userId" = $2',
    [id, userId]
  );

  return note;
}

async function insertNote(title, content, userId) {
  const {
    rows: [insertedNote],
  } = await query(
    'INSERT INTO note(title, content, "userId") VALUES ($1, $2, $3) RETURNING id, title, content',
    [title, content, userId]
  );

  return insertedNote;
}

async function updateNoteByIdAndUserId(id, title, content, userId) {
  const {
    rows: [updatedNote],
  } = await query(
    'UPDATE note SET title = $2, content = $3 WHERE id = $1 AND "userId" = $4 RETURNING id, title, content',
    [id, title, content, userId]
  );

  return updatedNote;
}

async function deleteNoteByIdAndUserId(id, userId) {
  const {
    rows: [deletedNote],
  } = await query(
    'DELETE FROM note WHERE id = $1 AND "userId" = $2 RETURNING id, title, content',
    [id, userId]
  );

  return deletedNote;
}

export {
  findNotesByUserId,
  findNoteByIdAndUserId,
  insertNote,
  updateNoteByIdAndUserId,
  deleteNoteByIdAndUserId,
};
