import { drizzle } from "drizzle-orm/singlestore";
import { createPool, type Pool } from "mysql2/promise";

import * as authSchema from "./schema/auth-schema";
import * as fileSchema from "./schema/file_folder_schema";

const schema = {
  ...authSchema,
  ...fileSchema,
};

const globalForDb = globalThis as unknown as {
  conn: Pool | undefined;
};

const conn =
  globalForDb.conn ??
  createPool({
    host: process.env.DATABASE_HOST!,
    user: process.env.DATABASE_USER!,
    password: process.env.DATABASE_PASSWORD!,
    port: 3333,
    database: process.env.DATABASE_NAME!,
    ssl: {},
    maxIdle: 0,
  });
if (process.env.NODE_ENV !== "production") globalForDb.conn = conn;

conn.addListener("error", (err) => {
  console.error("Database connection error:", err);
});

export const db = drizzle(conn, { schema });
