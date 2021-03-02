const jwt = require("jsonwebtoken");
const AuthentificationError = require("../../utils/errors/AuthentificationError");

module.exports = (req, res, next) => {
  try {
    const authToken = req.header("Authorization");

    if (!authToken) {
      throw new AuthentificationError();
    }

    const decodedPayload = jwt.verify(authToken, process.env.JWT_SECRET);

    req.account = {
      id: decodedPayload.accountId,
      mail: decodedPayload.mail,
    };

    next();
  } catch (error) {
    throw new AuthentificationError();
  }
};
