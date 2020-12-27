const accountService = require("../../services/accountService");

exports.signIn = async (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    res.status(400).send({
      message: "mail and password fields are mandatory to sign in",
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
  const { mail, password } = req.body;

  if (!mail || !password) {
    res.status(400).send({
      message: "mail and password fields are mandatory",
    });

    return;
  }

  const createdAccount = await accountService.createAccount(mail, password);

  res.json(createdAccount);
};
