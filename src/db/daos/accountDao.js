const connection = require("../connection");
const {
  INSERT_ACCOUNT,
  SELECT_ACCOUNT_BY_ID,
} = require("../../utils/sqlRequests");

exports.getAccountById = async (id) => {
  const { rows } = await connection.query(SELECT_ACCOUNT_BY_ID, [id]);

  return rows;
};

exports.insertAccount = async (mail, password) => {
  const { rows } = await connection.query(INSERT_ACCOUNT, [mail, password]);

  return rows;
};
