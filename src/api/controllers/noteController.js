import {
  fetchNotes,
  saveNote,
  removeNote,
  createNote,
} from "../../services/noteService";

async function getAccountNotes(req, res) {
  const notes = await fetchNotes(req.account.id);

  res.json(notes);
}

function getNote(req, res) {
  const { id, title, content } = req.note;

  res.json({ id, title, content });
}

async function updateNote(req, res) {
  const { title, content } = req.body;

  const updatedNote = await saveNote(req.params.id, title, content);

  res.json(updatedNote);
}

async function deleteNote(req, res) {
  const deletedNote = await removeNote(req.params.id);

  res.json(deletedNote);
}

async function postNote(req, res) {
  const { title, content } = req.body;

  const createdNote = await createNote(title, content, req.account.id);

  res.status(201).json(createdNote);
}

export { getAccountNotes, getNote, updateNote, deleteNote, postNote };
