import pg from "pg";

const { Pool } = pg;

// Pool will use the following environment variables to connect to  the database :
// PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT
const pool = new Pool();

const query = (request, params) => pool.query(request, params);

export { query };
