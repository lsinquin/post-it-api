import bcrypt from "bcrypt";
import { getAccountByMail, insertAccount } from "../db/daos/accountDao";
import ExistingAccountError from "./errors/ExistingAccountError";

const BCRYPT_ROUNDS = 10;

//TODO Transaction
async function createAccount(mail, password) {
  const account = await getAccountByMail(mail);

  if (account) {
    throw new ExistingAccountError();
  }

  const hashedPassword = await bcrypt.hash(password, BCRYPT_ROUNDS);

  return insertAccount(mail, hashedPassword);
}

export { createAccount };
