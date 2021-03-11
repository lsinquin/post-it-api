import {
  getNotesByAccountId,
  getNoteById,
  insertNote,
  updateNoteById,
  deleteNoteById,
} from "../db/daos/noteDao";

async function fetchNotes(accountId) {
  return getNotesByAccountId(accountId);
}

async function fetchNote(id) {
  return getNoteById(id);
}

async function saveNote(id, title, content) {
  return updateNoteById(id, title, content);
}

async function removeNote(id) {
  return deleteNoteById(id);
}

async function createNote(title, content, accountId) {
  return insertNote(title, content, accountId);
}

export { fetchNotes, fetchNote, saveNote, removeNote, createNote };
