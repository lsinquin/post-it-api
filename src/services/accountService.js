import bcrypt from "bcrypt";
import { query } from "../db/dbConnection";
import { findAccountByMail, insertAccount } from "../db/daos/accountDao";
import ExistingAccountError from "./errors/ExistingAccountError";

const BCRYPT_ROUNDS = 10;

async function createAccount(mail, password) {
  const account = await findAccountByMail(mail);

  if (account) {
    throw new ExistingAccountError();
  }

  const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

  return insertAccount(mail, hashedPassword);
}

async function transactionalCreateAccount(mail, password) {
  try {
    await query("BEGIN");

    const createdAccount = await createAccount(mail, password);

    await query("COMMIT");

    return createdAccount;
  } catch (error) {
    await query("ROLLBACK");
    throw error;
  }
}

export { transactionalCreateAccount as createAccount };
