const BusinessError = require("./BusinessError");

class WrongCredentialsError extends BusinessError {
  constructor() {
    super("Les identifiants indiqués ne sont pas corrects");
    this.name = "WrongCredentialsError";
  }
}

module.exports = WrongCredentialsError;
