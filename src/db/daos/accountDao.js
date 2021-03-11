import { query } from "../dbConnection";

async function getAccountByMail(mail) {
  const {
    rows: [account],
  } = await query("SELECT * FROM account WHERE mail = $1", [mail]);

  return account;
}

async function insertAccount(mail, password) {
  const {
    rows: [insertedAccount],
  } = await query(
    "INSERT INTO account(mail, password) VALUES ($1, $2) RETURNING id, mail",
    [mail, password]
  );

  return insertedAccount;
}

export { getAccountByMail, insertAccount };
