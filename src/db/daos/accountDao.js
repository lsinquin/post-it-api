const connection = require("../connection");
const {
  INSERT_ACCOUNT,
  SELECT_ACCOUNT_BY_MAIL,
} = require("../../utils/sqlRequests");

exports.getAccountByMail = async (mail) => {
  const { rows } = await connection.query(SELECT_ACCOUNT_BY_MAIL, [mail]);

  return rows;
};

exports.insertAccount = async (mail, password) => {
  const { rows } = await connection.query(INSERT_ACCOUNT, [mail, password]);

  return rows;
};
