import pg from "pg";

const { Pool } = pg;

const databaseURI = process.env.DATABASE_URL;

// No ssl in development mode
const config =
  process.env.NODE_ENV === "production"
    ? {
        connectionString: databaseURI,
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {
        connectionString: databaseURI,
      };

const pool = new Pool(config);

const query = (request, params) => pool.query(request, params);

export { query };
