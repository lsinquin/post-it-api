const noteService = require("../../services/noteService");
const AuthorizationError = require("../../utils/errors/AuthorizationError");

module.exports = async (req, res, next) => {
  const note = await noteService.fetchNote(req.params.id);

  if (!note) {
    return res.status(204).end();
  }

  if (note.accountId !== req.account.id) {
    throw new AuthorizationError();
  }

  req.note = note;

  next();
};
