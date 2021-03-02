const logger = require("../../utils/logger");
const ServerError = require("../../utils/errors/ServerError");

module.exports = (error, req, res, next) => {
  if (error instanceof ServerError) {
    res
      .status(error.statusCode)
      .send({ error: error.errorId, message: error.message });
  } else {
    console.log(error);
    res.status(500).send({
      error: "err_unknown",
      message: "Une erreur innatendu a eu lieu",
    });
  }
};
