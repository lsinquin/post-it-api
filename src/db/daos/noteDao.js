const connection = require("../connection");
const {
  INSERT_NOTE,
  SELECT_NOTES_BY_ACCOUNT_ID,
  SELECT_NOTE_BY_ID,
  UPDATE_NOTE_BY_ID,
  DELETE_NOTE_BY_ID,
} = require("../../utils/sqlRequests");

exports.getNotesByAccountId = async (accountId) => {
  const { rows: notes } = await connection.query(SELECT_NOTES_BY_ACCOUNT_ID, [
    accountId,
  ]);

  return notes;
};

exports.getNoteById = async (id) => {
  const {
    rows: [note],
  } = await connection.query(SELECT_NOTE_BY_ID, [id]);

  return note;
};

exports.insertNote = async (title, content, accountId) => {
  const {
    rows: [insertedNote],
  } = await connection.query(INSERT_NOTE, [title, content, accountId]);

  return insertedNote;
};

exports.updateNoteById = async (id, title, content) => {
  const {
    rows: [updatedNote],
  } = await connection.query(UPDATE_NOTE_BY_ID, [id, title, content]);

  return updatedNote;
};

exports.deleteNoteById = async (id) => {
  const {
    rows: [deletedNote],
  } = await connection.query(DELETE_NOTE_BY_ID, [id]);

  return deletedNote;
};
