const authService = require("../../services/authService");
const HttpError = require("../HttpError");
const { ERR_MISSING_ACCOUNT_INFO } = require("../errorCodes");

exports.signIn = async (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    throw new HttpError(
      "Les champs mail et password sont obligatoires",
      ERR_MISSING_ACCOUNT_INFO,
      400
    );
  }

  const token = await authService.signIn(mail, password);

  res.json({ token: token });
};
