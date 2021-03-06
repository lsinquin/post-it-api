const BusinessError = require("./BusinessError");

class ExistingAccountError extends BusinessError {
  constructor() {
    super("Un compte existe déjà pour cette adresse mail");
    this.name = "ExistingAccountError";
  }
}

module.exports = ExistingAccountError;
