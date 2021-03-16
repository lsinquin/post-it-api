import Joi from "joi";
import validateInput from "./validateInput";
import HttpError from "../HttpError";
import { ERR_MISSING_FIELD } from "../errorCodes";
import {
  getNotesByAccountId,
  getNoteById,
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

async function getNote(req, res) {
  const { id } = req.params;
  const { id: accountId } = req.account;

  const note = await getNoteById(id, accountId);

  if (!note) {
    return res.status(404).end();
  }

  res.json(note);
}

async function putNote(req, res) {
  const { id } = req.params;
  const { id: accountId } = req.account;

  const { title, content } = await validateInput(req.body, noteSchema);

  const updatedNote = await modifyNote(id, title, content, accountId);

  if (!updatedNote) {
    return res.status(404).end();
  }

  res.json(updatedNote);
}

async function deleteNote(req, res) {
  const { id } = req.params;
  const { id: accountId } = req.account;

  const deletedNote = await removeNote(id, accountId);

  if (!deletedNote) {
    return res.status(404).end();
  }

  res.status(204).end();
}

async function postNote(req, res) {
  const { title, content } = await validateInput(req.body, noteSchema);

  const createdNote = await createNote(title, content, req.account.id);

  res.status(201).json(createdNote);
}

export { getAccountNotes, getNote, putNote, deleteNote, postNote };
