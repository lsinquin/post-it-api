const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const authToken = req.header("Authorization");

    if (!authToken) {
      return res
        .status(401)
        .send({ message: "Authorization header is not provided" });
    }

    const decodedPayload = jwt.verify(authToken, process.env.JWT_SECRET);

    req.account = {
      id: decodedPayload.accountId,
      mail: decodedPayload.mail,
    };

    next();
  } catch (error) {
    return res.status(401).send({ message: "Couldn't authenticate" });
  }
};
