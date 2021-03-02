const ServerError = require("./ServerError");

class ExistingAccountError extends ServerError {
  constructor() {
    super(
      "err_existing_account",
      "Un compte existe déjà pour cette adresse mail",
      400
    );
    this.name = "ExistingAccountError";
  }
}

module.exports = ExistingAccountError;
