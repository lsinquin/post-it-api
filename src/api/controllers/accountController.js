const accountService = require("../../services/accountService");
const MissingUserInfoError = require("../../utils/errors/MissingUserInfoError");
const InvalidPasswordError = require("../../utils/errors/InvalidPasswordError");
const { PASSWORD_MIN_SIZE } = require("../../utils/constants");

exports.signIn = async (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    throw new MissingUserInfoError();
  }

  const token = await accountService.signIn(mail, password);

  res.json({ token: token });
};

exports.signUp = async (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    throw new MissingUserInfoError();
  }

  if (password.length < PASSWORD_MIN_SIZE) {
    throw new InvalidPasswordError();
  }

  const createdAccount = await accountService.createAccount(mail, password);

  res.json(createdAccount);
};
