const {
  ERR_EXISTING_ACCOUNT,
  ERR_NO_ACCOUNT,
  ERR_WRONG_CREDENTIALS,
  ERR_UNKNOWN,
} = require("../errorCodes");
const HttpError = require("../HttpError");
const ExistingAccountError = require("../../services/errors/ExistingAccountError");
const NoAccountError = require("../../services/errors/NoAccountError");
const WrongCredentialsError = require("../../services/errors/WrongCredentialsError");

module.exports = (error, req, res, next) => {
  if (error instanceof HttpError) {
    return res.status(error.statusCode).send({
      code: error.code,
      detail: error.message,
    });
  }

  if (error instanceof ExistingAccountError) {
    return res.status(400).send({
      code: ERR_EXISTING_ACCOUNT,
      detail: error.message,
    });
  }

  if (error instanceof NoAccountError) {
    return res.status(401).send({
      code: ERR_NO_ACCOUNT,
      detail: error.message,
    });
  }

  if (error instanceof WrongCredentialsError) {
    return res.status(401).send({
      code: ERR_WRONG_CREDENTIALS,
      detail: error.message,
    });
  }

  return res.status(500).send({
    error: ERR_UNKNOWN,
    message: "Une erreur innatendu a eu lieu",
  });
};
