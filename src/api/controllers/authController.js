import Joi from "joi";
import validateInput from "./validateInput";
import HttpError from "../HttpError";
import { ERR_INVALID_MAIL, ERR_MISSING_FIELD } from "../errorCodes";
import { logIn } from "../../services/authService";

const userSchema = Joi.object({
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
    .allow("")
    .required()
    .error(
      new HttpError(
        "le champ password doit être une chaîne de caractères",
        ERR_MISSING_FIELD,
        400
      )
    ),
});

async function signIn(req, res) {
  const { mail, password } = await validateInput(req.body, userSchema);

  const token = await logIn(mail, password);

  res.json({ token: token });
}

export { signIn };
