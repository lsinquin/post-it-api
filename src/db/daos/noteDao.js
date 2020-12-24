const connection = require("../connection");
const {
  INSERT_NOTE,
  SELECT_ALL_NOTES,
  SELECT_NOTE_BY_ID,
  UPDATE_NOTE_BY_ID,
  DELETE_NOTE_BY_ID,
} = require("../../utils/sqlRequests");

exports.getAllNotes = async () => {
  const { rows } = await connection.query(SELECT_ALL_NOTES);

  return rows;
};

exports.getNoteById = async (id) => {
  const { rows } = await connection.query(SELECT_NOTE_BY_ID, [id]);

  return rows;
};

exports.insertNote = async (title, content, accountId) => {
  const { rows } = await connection.query(INSERT_NOTE, [
    title,
    content,
    accountId,
  ]);

  return rows;
};

exports.updateNoteById = async (id, title, content) => {
  const { rows } = await connection.query(UPDATE_NOTE_BY_ID, [
    id,
    title,
    content,
  ]);

  return rows;
};

exports.deleteNoteById = async (id) => {
  const { rows } = await connection.query(DELETE_NOTE_BY_ID, [id]);

  return rows;
};
