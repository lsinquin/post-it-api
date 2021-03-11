import Joi from "joi";
import { ERR_INVALID_MAIL } from "../../errorCodes";
import {
  passwordSchema,
  strictPasswordSchema,
} from "./passwordValidatorMiddleware";
import HttpError from "../../HttpError";
import validatorBuilder from "./validatorBuilder";

const mailSchema = Joi.string()
  .email()
  .required()
  .error(
    new HttpError(
      "Le champ mail doit être un mail valide",
      ERR_INVALID_MAIL,
      400
    )
  );

const accountSchema = Joi.object({
  mail: mailSchema,
  password: passwordSchema,
});

const strictAccountSchema = Joi.object({
  mail: mailSchema,
  password: strictPasswordSchema,
});

const signInValidator = validatorBuilder(accountSchema);
const postAccountValidator = validatorBuilder(strictAccountSchema);

export { signInValidator, postAccountValidator };
