const BusinessError = require("./BusinessError");

class NoAccountError extends BusinessError {
  constructor() {
    super("Aucun compte n'existe pour cette adresse mail");
    this.name = "NoAccountError";
  }
}

module.exports = NoAccountError;
