import Joi from "joi";
import validateInput from "./validateInput";
import HttpError from "../HttpError";
import { ERR_MISSING_FIELD } from "../errorCodes";
import {
  getNotes,
  getNote as getNoteService,
  modifyNote,
  removeNote,
  createNote,
} from "../../services/noteService";

const noteSchema = Joi.object({
  title: Joi.string()
    .allow("")
    .required()
    .error(
      new HttpError(
        "Le champ title doit être une chaîne de caractère",
        ERR_MISSING_FIELD,
        400
      )
    ),
  content: Joi.string()
    .allow("")
    .required()
    .error(
      new HttpError(
        "Le champ content doit être une chaîne de caractère",
        ERR_MISSING_FIELD,
        400
      )
    ),
});

async function getUserNotes(req, res) {
  const userContext = req.user;

  const notes = await getNotes(userContext);

  res.json(notes);
}

async function getNote(req, res) {
  const { id } = req.params;
  const userContext = req.user;

  const note = await getNoteService(id, userContext);

  if (!note) {
    return res.status(404).end();
  }

  res.json(note);
}

async function putNote(req, res) {
  const { id } = req.params;
  const userContext = req.user;

  const { title, content } = await validateInput(req.body, noteSchema);

  const updatedNote = await modifyNote(id, title, content, userContext);

  if (!updatedNote) {
    return res.status(404).end();
  }

  res.json(updatedNote);
}

async function deleteNote(req, res) {
  const { id } = req.params;
  const userContext = req.user;

  const deletedNote = await removeNote(id, userContext);

  if (!deletedNote) {
    return res.status(404).end();
  }

  res.status(204).end();
}

async function postNote(req, res) {
  const { title, content } = await validateInput(req.body, noteSchema);
  const userContext = req.user;

  const createdNote = await createNote(title, content, userContext);

  res.status(201).json(createdNote);
}

export { getUserNotes, getNote, putNote, deleteNote, postNote };
