import { ERR_NOT_ALLOWED } from "../errorCodes";
import { fetchNote } from "../../services/noteService";
import HttpError from "../HttpError";

async function authorizationMiddleware(req, res, next) {
  const note = await fetchNote(req.params.id);

  if (!note) {
    return res.status(204).end();
  }

  if (note.accountId !== req.account.id) {
    throw new HttpError(
      "Interdiction d'accéder à cette ressource",
      ERR_NOT_ALLOWED,
      403
    );
  }

  req.note = note;

  next();
}

export { authorizationMiddleware };
export default authorizationMiddleware;
