import Joi from "joi";
import validateInput from "./validateInput";
import HttpError from "../HttpError";
import { ERR_MISSING_FIELD } from "../errorCodes";
import {
  getNotesByAccountId,
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

async function getAccountNotes(req, res) {
  const notes = await getNotesByAccountId(req.account.id);

  res.json(notes);
}

function getNote(req, res) {
  const { id, title, content } = req.note;

  res.json({ id, title, content });
}

async function putNote(req, res) {
  const { title, content } = await validateInput(req.body, noteSchema);

  const updatedNote = await modifyNote(req.params.id, title, content);

  res.json(updatedNote);
}

async function deleteNote(req, res) {
  const deletedNote = await removeNote(req.params.id);

  res.json(deletedNote);
}

async function postNote(req, res) {
  const { title, content } = await validateInput(req.body, noteSchema);

  const createdNote = await createNote(title, content, req.account.id);

  res.status(201).json(createdNote);
}

export { getAccountNotes, getNote, putNote, deleteNote, postNote };
