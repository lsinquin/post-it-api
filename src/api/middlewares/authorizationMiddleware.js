const noteService = require("../../services/noteService");

module.exports = async (req, res, next) => {
  const note = await noteService.fetchNote(req.params.id);

  if (!note) {
    return res.status(204).end();
  }

  if (note.accountId !== req.account.id) {
    return res.status(403).end();
  }

  req.note = note;

  next();
};
