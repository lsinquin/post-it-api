import {
  ERR_EXISTING_ACCOUNT,
  ERR_NO_ACCOUNT,
  ERR_WRONG_CREDENTIALS,
  ERR_UNKNOWN,
} from "../errorCodes";
import HttpError from "../HttpError";
import ExistingAccountError from "../../services/errors/ExistingAccountError";
import NoAccountError from "../../services/errors/NoAccountError";
import WrongCredentialsError from "../../services/errors/WrongCredentialsError";

function errorMiddleware(error, req, res, next) {
  // console.log(error);
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
}

export { errorMiddleware };
export default errorMiddleware;
