import { query } from "./dbConnection";

async function runInTransaction(block) {
  try {
    await query("BEGIN");

    const result = await block();

    await query("COMMIT");

    return result;
  } catch (error) {
    await query("ROLLBACK");
    throw error;
  }
}

export { runInTransaction };
export default runInTransaction;
