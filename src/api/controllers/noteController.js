const noteService = require("../../services/noteService");
const HttpError = require("../HttpError");
const { ERR_MISSING_NOTE_INFO } = require("../errorCodes");

exports.getAccountNotes = async (req, res) => {
  const notes = await noteService.fetchNotes(req.account.id);

  res.json(notes);
};

exports.getNote = (req, res) => {
  const { id, title, content } = req.note;

  res.json({ id, title, content });
};

exports.updateNote = async (req, res) => {
  const { title, content } = req.body;

  if (areParamsInvalid(title, content)) {
    throw new HttpError(
      "Les champs titre et content sont obligatoires",
      ERR_MISSING_NOTE_INFO,
      400
    );
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

  if (areParamsInvalid(title, content)) {
    throw new HttpError(
      "Les champs titre et content sont obligatoires",
      ERR_MISSING_NOTE_INFO,
      400
    );
  }

  const createdNote = await noteService.createNote(
    title,
    content,
    req.account.id
  );

  res.json(createdNote);
};

//Letting empty string through
const areParamsInvalid = (title, content) => {
  return (
    title === undefined ||
    title === null ||
    content === undefined ||
    content === null
  );
};
