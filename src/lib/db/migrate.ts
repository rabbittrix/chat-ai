import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { promises as fs } from "fs";
import path from "path";

async function migrate() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const db = drizzle(pool);

  try {
    // Read and execute migration files
    const migrationsDir = path.join(__dirname, "migrations");
    const files = await fs.readdir(migrationsDir);
    const sqlFiles = files.filter((file) => file.endsWith(".sql"));

    for (const file of sqlFiles) {
      const filePath = path.join(migrationsDir, file);
      const sql = await fs.readFile(filePath, "utf8");
      await db.execute(sql);
      console.log(`Executed migration: ${file}`);
    }

    console.log("Migrations completed successfully");
  } catch (error) {
    console.error("Error running migrations:", error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

migrate();
