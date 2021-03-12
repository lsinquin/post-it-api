import { ERR_NOT_ALLOWED } from "../errorCodes";
import { fetchNote } from "../../services/noteService";
import HttpError from "../HttpError";

async function authorizationMiddleware(req, res, next) {
  const note = await fetchNote(req.params.id);

  if (!note || note.accountId !== req.account.id) {
    return res.status(404).end();
  }

  req.note = note;

  next();
}

export { authorizationMiddleware };
export default authorizationMiddleware;
