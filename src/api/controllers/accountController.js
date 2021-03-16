import Joi from "joi";
import validateInput from "./validateInput";
import HttpError from "../HttpError";
import { ERR_INVALID_MAIL, ERR_INVALID_PASSWORD } from "../errorCodes";
import { createAccount } from "../../services/accountService";

const PASSWORD_MIN_SIZE = 8;

const accountSchema = Joi.object({
  mail: Joi.string()
    .email()
    .required()
    .error(
      new HttpError(
        "Le champ mail doit être un mail valide",
        ERR_INVALID_MAIL,
        400
      )
    ),
  password: Joi.string()
    .required()
    .min(PASSWORD_MIN_SIZE)
    .error(
      new HttpError(
        `le champ password doit comporter au moins ${PASSWORD_MIN_SIZE} caractères`,
        ERR_INVALID_PASSWORD,
        400
      )
    ),
});

async function postAccount(req, res) {
  const { mail, password } = await validateInput(req.body, accountSchema);

  const createdAccount = await createAccount(mail, password);

  res.status(201).json(createdAccount);
}

export { postAccount };
