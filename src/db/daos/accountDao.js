const connection = require("../connection");

exports.getAccountByMail = async (mail) => {
  const {
    rows: [account],
  } = await connection.query("SELECT * FROM account WHERE mail = $1", [mail]);

  return account;
};

exports.insertAccount = async (mail, password) => {
  const {
    rows: [insertedAccount],
  } = await connection.query(
    "INSERT INTO account(mail, password) VALUES ($1, $2) RETURNING id, mail",
    [mail, password]
  );

  return insertedAccount;
};
