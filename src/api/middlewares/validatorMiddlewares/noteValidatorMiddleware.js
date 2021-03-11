import Joi from "joi";
import HttpError from "../../HttpError";
import { ERR_MISSING_FIELD } from "../../errorCodes";
import validatorBuilder from "./validatorBuilder";

const noteSchema = Joi.object({
  title: Joi.string()
    .allow("")
    .required()
    .error(
      new HttpError(
        "Le champ title doit être une chaîne de caractère",
        ERR_MISSING_FIELD,
        400
      )
    ),
  content: Joi.string()
    .allow("")
    .required()
    .error(
      new HttpError(
        "Le champ content doit être une chaîne de caractère",
        ERR_MISSING_FIELD,
        400
      )
    ),
});

const noteValidatorMiddleware = validatorBuilder(noteSchema);

export { noteValidatorMiddleware };
export default noteValidatorMiddleware;
