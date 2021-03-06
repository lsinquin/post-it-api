const { ERR_NOT_ALLOWED } = require("../../utils/errorCodes");
const noteService = require("../../services/noteService");
const HttpError = require("../../utils/errors/HttpError");

module.exports = async (req, res, next) => {
  const note = await noteService.fetchNote(req.params.id);

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
};
