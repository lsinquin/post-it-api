import { getNoteById } from "../../services/noteService";

async function authorizationMiddleware(req, res, next) {
  const note = await getNoteById(req.params.id);

  if (!note || note.accountId !== req.account.id) {
    return res.status(404).end();
  }

  req.note = note;

  next();
}

export { authorizationMiddleware };
export default authorizationMiddleware;
