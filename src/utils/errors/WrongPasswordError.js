const ServerError = require("./ServerError");

class WrongPasswordError extends ServerError {
  constructor() {
    super(
      "err_wrong_password",
      "Le mot de passe indiqué n'est pas correcte",
      401
    );
    this.name = "WrongPasswordError";
  }
}

module.exports = WrongPasswordError;
