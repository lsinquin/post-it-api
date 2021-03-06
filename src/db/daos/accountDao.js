const {
  INSERT_ACCOUNT,
  SELECT_ACCOUNT_BY_MAIL,
} = require("../../utils/sqlRequests");
const connection = require("../connection");

exports.getAccountByMail = async (mail) => {
  const {
    rows: [account],
  } = await connection.query(SELECT_ACCOUNT_BY_MAIL, [mail]);

  return account;
};

exports.insertAccount = async (mail, password) => {
  const {
    rows: [insertedAccount],
  } = await connection.query(INSERT_ACCOUNT, [mail, password]);

  return insertedAccount;
};
