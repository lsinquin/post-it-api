import HttpError from "../../HttpError";
import { ERR_UNKNOWN } from "../../errorCodes";

function validatorBuilder(joiSchema) {
  return async function (req, res, next) {
    const { error } = joiSchema.validate(req.body, { allowUnknown: true });

    if (error) {
      if (error instanceof HttpError) {
        throw error;
      }

      throw new HttpError("Requête invalide", ERR_UNKNOWN, 400);
    }

    next();
  };
}

export { validatorBuilder };
export default validatorBuilder;
