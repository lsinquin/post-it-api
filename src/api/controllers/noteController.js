const noteService = require("../../services/noteService");

exports.getAllNotes = async (req, res) => {
  const notes = await noteService.fetchNotes();

  res.json(notes);
};

exports.getNote = async (req, res) => {
  const note = await noteService.fetchNote(req.params.id);

  if (!note) {
    res.status(204).end();
  } else {
    res.json(note);
  }
};

exports.modifyNote = async (req, res) => {
  const { title, content } = req.body;

  if (!title) {
    res.status(400).send({
      message: "title field is mandatory",
    });

    return;
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

  if (!title) {
    res.status(400).send({
      message: "title field is mandatory",
    });

    return;
  }

  const createdNote = await noteService.createNote(title, content, 3);

  res.json(createdNote);
};
