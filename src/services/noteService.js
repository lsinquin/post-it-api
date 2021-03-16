import {
  findNotesByAccountId,
  findNoteByIdAndAccountId,
  insertNote,
  updateNoteById,
  deleteNoteById,
} from "../db/daos/noteDao";

function getNotesByAccountId(accountId) {
  return findNotesByAccountId(accountId);
}

function getNoteById(id, accountId) {
  return findNoteByIdAndAccountId(id, accountId);
}

function modifyNote(id, title, content, accountId) {
  return updateNoteById(id, title, content, accountId);
}

function removeNote(id, accountId) {
  return deleteNoteById(id, accountId);
}

function createNote(title, content, accountId) {
  return insertNote(title, content, accountId);
}

export { getNotesByAccountId, getNoteById, modifyNote, removeNote, createNote };
