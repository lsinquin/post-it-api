const Joi = require("joi");
const HttpError = require("../../HttpError");
const { ERR_MISSING_FIELD, ERR_INVALID_PASSWORD } = require("../../errorCodes");
const validatorBuilder = require("./validatorBuilder");

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

exports.passwordValidator = validatorBuilder(passwordSchema);
exports.strictPasswordValidator = validatorBuilder(strictPasswordSchema);

exports.passwordSchema = passwordSchema;
exports.strictPasswordSchema = strictPasswordSchema;
