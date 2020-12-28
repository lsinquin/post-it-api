const accountService = require("../../services/accountService");
const ExistingAccountError = require("../../utils/ExistingAccountError");

exports.signIn = async (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    res.status(400).send({
      message: "mail and password fields are mandatory",
    });

    return;
  }

  const isSignedIn = await accountService.signIn(mail, password);

  if (isSignedIn) {
    res.status(200);
  } else {
    res.status(401);
  }

  res.end();
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
