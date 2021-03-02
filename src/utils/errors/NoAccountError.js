const ServerError = require("./ServerError");

class NoAccountError extends ServerError {
  constructor() {
    super(
      "err_no_account_found",
      "Aucun compte n'existe pour cette adresse mail",
      401
    );
    this.name = "NoAccountError";
  }
}

module.exports = NoAccountError;
