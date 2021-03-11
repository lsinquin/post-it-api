const Joi = require("joi");
const { ERR_INVALID_MAIL } = require("../../errorCodes");
const {
  passwordSchema,
  strictPasswordSchema,
} = require("./passwordValidatorMiddleware");
const HttpError = require("../../HttpError");
const validatorBuilder = require("./validatorBuilder");

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

module.exports.signInValidator = validatorBuilder(accountSchema);
module.exports.postAccountValidator = validatorBuilder(strictAccountSchema);
