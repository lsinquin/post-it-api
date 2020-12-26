const accountService = require("../../services/accountService");

exports.login = async (req, res) => {
  const { mail, password } = req.body;

  if (!mail || !password) {
    res.status(400).send({
      message: "mail and password fields are mandatory to login",
    });

    return;
  }

  const isLoggedIn = await accountService.login(mail, password);

  if (isLoggedIn) {
    res.status(200);
  } else {
    res.status(401);
  }

  res.end();
};

exports.addOne = async (req, res) => {
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
