import {
  findNotesByUserId,
  findNoteByIdAndUserId,
  insertNote,
  updateNoteByIdAndUserId,
  deleteNoteByIdAndUserId,
} from "../db/daos/noteDao";

function getNotes(userContext) {
  const { id: userId } = userContext;

  return findNotesByUserId(userId);
}

function getNote(id, userContext) {
  const { id: userId } = userContext;

  return findNoteByIdAndUserId(id, userId);
}

function modifyNote(id, title, content, userContext) {
  const { id: userId } = userContext;

  return updateNoteByIdAndUserId(id, title, content, userId);
}

function removeNote(id, userContext) {
  const { id: userId } = userContext;

  return deleteNoteByIdAndUserId(id, userId);
}

function createNote(title, content, userContext) {
  const { id: userId } = userContext;

  return insertNote(title, content, userId);
}

export { getNotes, getNote, modifyNote, removeNote, createNote };
