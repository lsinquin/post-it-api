import {
  ERR_EXISTING_USER,
  ERR_NO_USER,
  ERR_WRONG_CREDENTIALS,
  ERR_UNKNOWN,
} from "../errorCodes";
import HttpError from "../HttpError";
import ExistingUserError from "../../services/errors/ExistingUserError";
import UserNotFoundError from "../../services/errors/UserNotFoundError";
import WrongCredentialsError from "../../services/errors/WrongCredentialsError";

function errorMiddleware(error, req, res, next) {
  if (error instanceof HttpError) {
    return res.status(error.statusCode).send({
      code: error.code,
      detail: error.message,
    });
  }

  if (error instanceof ExistingUserError) {
    return res.status(400).send({
      code: ERR_EXISTING_USER,
      detail: error.message,
    });
  }

  if (error instanceof UserNotFoundError) {
    return res.status(401).send({
      code: ERR_NO_USER,
      detail: error.message,
    });
  }

  if (error instanceof WrongCredentialsError) {
    return res.status(401).send({
      code: ERR_WRONG_CREDENTIALS,
      detail: error.message,
    });
  }

  console.log(error);
  return res.status(500).send({
    code: ERR_UNKNOWN,
    detail: "Une erreur inattendue a eu lieu",
  });
}

export { errorMiddleware };
export default errorMiddleware;
