const noteDao = require("../db/daos/noteDao");

exports.fetchNotes = async () => noteDao.getAllNotes();

exports.fetchNote = async (id) => noteDao.getNoteById(id);

exports.saveNote = async (id, title, content) =>
  noteDao.updateNoteById(id, title, content);

exports.deleteNote = async (id) => noteDao.deleteNoteById(id);

exports.createNote = async (title, content, accountId) =>
  noteDao.insertNote(title, content, accountId);
