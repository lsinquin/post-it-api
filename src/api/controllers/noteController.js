const noteService = require("../../services/noteService");
const MissingNoteInfoError = require("../../utils/errors/MissingNoteInfoError");

exports.getAccountNotes = async (req, res) => {
  const notes = await noteService.fetchNotes(req.account.id);

  res.json(notes);
};

exports.getNote = (req, res) => res.json(req.note);

exports.modifyNote = async (req, res) => {
  const { title, content } = req.body;

  if (isParamsInvalid(title, content)) {
    throw new MissingNoteInfoError();
  }

  const updatedNote = await noteService.saveNote(req.params.id, title, content);

  if (!updatedNote) {
    res.status(204).end();
  } else {
    res.json(updatedNote);
  }
};

exports.deleteNote = async (req, res) => {
  const deletedNote = await noteService.deleteNote(req.params.id);

  if (!deletedNote) {
    res.status(204).end();
  } else {
    res.json(deletedNote);
  }
};

exports.postNote = async (req, res) => {
  const { title, content } = req.body;

  if (isParamsInvalid(title, content)) {
    throw new MissingNoteInfoError();
  }

  const createdNote = await noteService.createNote(
    title,
    content,
    req.account.id
  );

  res.json(createdNote);
};

const isParamsInvalid = (title, content) => {
  return (
    title === undefined ||
    title === null ||
    content === undefined ||
    content === null
  );
};
