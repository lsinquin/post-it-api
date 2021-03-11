import { createAccount } from "../../services/accountService";

async function postAccount(req, res) {
  const { mail, password } = req.body;

  const createdAccount = await createAccount(mail, password);

  res.json(createdAccount);
}

export { postAccount };
