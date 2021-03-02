const ServerError = require("./ServerError");

class AuthentificationError extends ServerError {
  constructor() {
    super(
      "err_authentification",
      "Le header Authorization n'est pas correcte ou manquant",
      401
    );
    this.name = "AuthentificationError";
  }
}

module.exports = AuthentificationError;
