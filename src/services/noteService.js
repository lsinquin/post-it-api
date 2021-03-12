import {
  findNotesByAccountId,
  findNoteById,
  insertNote,
  updateNoteById,
  deleteNoteById,
} from "../db/daos/noteDao";

async function getNotesByAccountId(accountId) {
  return findNotesByAccountId(accountId);
}

async function getNoteById(id) {
  return findNoteById(id);
}

async function modifyNote(id, title, content) {
  return updateNoteById(id, title, content);
}

async function removeNote(id) {
  return deleteNoteById(id);
}

async function createNote(title, content, accountId) {
  return insertNote(title, content, accountId);
}

export { getNotesByAccountId, getNoteById, modifyNote, removeNote, createNote };
