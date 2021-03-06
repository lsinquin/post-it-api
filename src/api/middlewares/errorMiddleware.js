const {
  ERR_EXISTING_ACCOUNT,
  ERR_NO_ACCOUNT,
  ERR_WRONG_CREDENTIALS,
  ERR_UNKNOWN,
} = require("../../utils/errorCodes");
const HttpError = require("../../utils/errors/HttpError");
const ExistingAccountError = require("../../utils/errors/ExistingAccountError");
const NoAccountError = require("../../utils/errors/NoAccountError");
const WrongCredentialsError = require("../../utils/errors/WrongCredentialsError");

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
