const {
  INSERT_ACCOUNT,
  SELECT_ACCOUNT_BY_MAIL,
} = require("../../utils/sqlRequests");
const { UNIQUE_VIOLATION_CODE } = require("../../utils/pgErrorCodes");
const ExistingAccountError = require("../../utils/ExistingAccountError");
const connection = require("../connection");

exports.getAccountByMail = async (mail) => {
  const {
    rows: [account],
  } = await connection.query(SELECT_ACCOUNT_BY_MAIL, [mail]);

  return account;
};

exports.insertAccount = async (mail, password) => {
  try {
    const {
      rows: [insertedAccount],
    } = await connection.query(INSERT_ACCOUNT, [mail, password]);

    return insertedAccount;
  } catch (error) {
    if (error.code === UNIQUE_VIOLATION_CODE) {
      throw new ExistingAccountError("An account already exists for this mail");
    } else {
      throw error;
    }
  }
};
