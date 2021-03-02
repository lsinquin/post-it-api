const ServerError = require("./ServerError");

class MissingUserInfoError extends ServerError {
  constructor() {
    super(
      "err_missing_user_info",
      "Les champs mail et password sont obligatoires",
      400
    );
    this.name = "MissingUserInfoError";
  }
}

module.exports = MissingUserInfoError;
