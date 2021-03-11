import Joi from "joi";
import HttpError from "../../HttpError";
import { ERR_MISSING_FIELD, ERR_INVALID_PASSWORD } from "../../errorCodes";
import validatorBuilder from "./validatorBuilder";

const PASSWORD_MIN_SIZE = 8;

const passwordSchema = Joi.string()
  .required()
  .error(
    new HttpError(
      "Le champ password doit être une chaîne de caractères",
      ERR_MISSING_FIELD,
      400
    )
  );

const strictPasswordSchema = passwordSchema
  .min(PASSWORD_MIN_SIZE)
  .error(
    new HttpError(
      `le champ password doit comporter au moins ${PASSWORD_MIN_SIZE} caractères`,
      ERR_INVALID_PASSWORD,
      400
    )
  );

const passwordValidator = validatorBuilder(passwordSchema);
const strictPasswordValidator = validatorBuilder(strictPasswordSchema);

export {
  passwordSchema,
  strictPasswordSchema,
  passwordValidator,
  strictPasswordValidator,
};
