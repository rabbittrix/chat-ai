// This file will be used for server-side database operations only
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// This function should only be called on the server side
export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  return drizzle(pool);
}
