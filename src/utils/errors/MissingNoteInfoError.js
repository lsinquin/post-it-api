const ServerError = require("./ServerError");

class MissingNoteInfoError extends ServerError {
  constructor() {
    super(
      "err_missing_note_info",
      "Les champs title et content sont obligatoires",
      400
    );
    this.name = "MissingNoteInfoError";
  }
}

module.exports = MissingNoteInfoError;
