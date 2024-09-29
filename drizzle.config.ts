import type { Config as DrizzleConfig } from "drizzle-kit";

import { env } from "~/env";

const drizzleConfig = {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["workspace_*"],
} satisfies DrizzleConfig;

export default drizzleConfig;
