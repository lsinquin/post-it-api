const Joi = require("joi");
const HttpError = require("../../HttpError");
const { ERR_MISSING_FIELD } = require("../../errorCodes");
const validatorBuilder = require("./validatorBuilder");

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

module.exports = validatorBuilder(noteSchema);
