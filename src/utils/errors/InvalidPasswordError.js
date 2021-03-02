const ServerError = require("./ServerError");

class InvalidPasswordError extends ServerError {
  constructor() {
    super(
      "err_invalid_password",
      "Le mot de passe doit comprendre au minimum 8 caractères",
      400
    );
    this.name = "InvalidPasswordError";
  }
}

module.exports = InvalidPasswordError;
