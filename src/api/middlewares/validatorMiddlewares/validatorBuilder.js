const HttpError = require("../../HttpError");
const { ERR_UNKNOWN } = require("../../errorCodes");

module.exports = validatorBuilder = (joiSchema) => async (req, res, next) => {
  const { error } = joiSchema.validate(req.body, { allowUnknown: true });

  if (error) {
    if (error instanceof HttpError) {
      throw error;
    }

    throw new HttpError("Requête invalide", ERR_UNKNOWN, 400);
  }

  next();
};
