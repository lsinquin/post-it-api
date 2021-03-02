const ServerError = require("./ServerError");

class AuthorizationError extends ServerError {
  constructor() {
    super(
      "err_authorizationError",
      "Vous n'avez pas l'autorisation d'accéder à cette ressource",
      403
    );
    this.name = "AuthorizationError";
  }
}

module.exports = AuthorizationError;
