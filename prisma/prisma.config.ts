import { defineConfig } from "prisma/config";
import { DATABASE_URL } from "../src/config/envs.config";
export default defineConfig({
  schema: "prisma/schema",
  datasource: {
    // provider: "sqlite",
    url: DATABASE_URL || "file:./dev.db",
  },
  migrations: {
    path: "prisma/migrations",
  },
});
