const jwt = require("jsonwebtoken");
const { ERR_AUTHENTIFICATION } = require("../../utils/errorCodes");
const HttpError = require("../../utils/errors/HttpError");

module.exports = (req, res, next) => {
  const authToken = req.header("Authorization");

  if (!authToken) {
    throw new HttpError(
      "Le header Authorization est manquant",
      "err_authentification",
      401
    );
  }

  try {
    const decodedPayload = jwt.verify(authToken, process.env.JWT_SECRET);

    req.account = {
      id: decodedPayload.accountId,
      mail: decodedPayload.mail,
    };

    next();
  } catch (error) {
    throw new HttpError(
      "Le header Authorization n'est pas correcte",
      ERR_AUTHENTIFICATION,
      401
    );
  }
};
