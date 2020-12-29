const accountService = require("../../services/accountService");
const ExistingAccountError = require("../../utils/errors/ExistingAccountError");
const AuthentificationError = require("../../utils/errors/AuthentificationError");
exports.signIn = async (req, res) => {
  try {
    const { mail, password } = req.body;

    if (!mail || !password) {
      res.status(400).send({
        message: "mail and password fields are mandatory",
      });

      return;
    }

    const token = await accountService.signIn(mail, password);

    res.json({ token: token });
  } catch (error) {
    if (error instanceof AuthentificationError) {
      res.status(401).send({
        message: error.message,
      });
    } else {
      throw error;
    }
  }
};

exports.signUp = async (req, res) => {
  try {
    const { mail, password } = req.body;

    if (!mail || !password) {
      res.status(400).send({
        message: "mail and password fields are mandatory",
      });

      return;
    }

    const createdAccount = await accountService.createAccount(mail, password);

    res.json(createdAccount);
  } catch (error) {
    if (error instanceof ExistingAccountError) {
      res.status(400).send({
        message: error.message,
      });
    } else {
      throw error;
    }
  }
};
