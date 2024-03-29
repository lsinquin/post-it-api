import jwt from "jsonwebtoken";
import { ERR_AUTHENTIFICATION } from "../errorCodes";
import HttpError from "../HttpError";

function jwtMiddleware(req, res, next) {
  const authToken = req.header("Authorization");

  if (!authToken) {
    throw new HttpError(
      "Le header Authorization est manquant",
      ERR_AUTHENTIFICATION,
      401
    );
  }

  try {
    const decodedPayload = jwt.verify(authToken, process.env.JWT_SECRET);

    req.user = {
      id: decodedPayload.userId,
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
}

export { jwtMiddleware };
export default jwtMiddleware;
