const accountService = require("../../services/accountService");

exports.postAccount = async (req, res) => {
  const { mail, password } = req.body;

  const createdAccount = await accountService.createAccount(mail, password);

  res.json(createdAccount);
};
