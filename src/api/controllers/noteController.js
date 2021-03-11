const noteService = require("../../services/noteService");

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

  const createdNote = await noteService.createNote(
    title,
    content,
    req.account.id
  );

  res.json(createdNote);
};
