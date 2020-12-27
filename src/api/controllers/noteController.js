const noteService = require("../../services/noteService");

exports.getAllNotes = async (req, res) => {
  const notes = await noteService.fetchNotes();

  res.json(notes);
};

exports.getNote = async (req, res) => {
  const note = await noteService.fetchNote(req.params.id);

  res.json(note);
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

  res.json(updatedNote);
};

exports.deleteNote = async (req, res) => {
  const note = await noteService.deleteNote(req.params.id);

  res.json(note);
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
