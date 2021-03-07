const accountService = require("../../services/accountService");
const HttpError = require("../HttpError");
const {
  ERR_MISSING_ACCOUNT_INFO,
  ERR_INVALID_PASSWORD,
} = require("../errorCodes");

const PASSWORD_MIN_SIZE = 8;

exports.postAccount = async (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    throw new HttpError(
      "Les champs mail et password sont obligatoires",
      ERR_MISSING_ACCOUNT_INFO,
      400
    );
  }

  if (password.length < PASSWORD_MIN_SIZE) {
    throw new HttpError(
      `le mot de passe doit comporter au moins ${PASSWORD_MIN_SIZE} caractères`,
      ERR_INVALID_PASSWORD,
      400
    );
  }

  const createdAccount = await accountService.createAccount(mail, password);

  res.json(createdAccount);
};
