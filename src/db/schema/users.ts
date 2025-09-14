import { sqliteTable, int, text } from "drizzle-orm/sqlite-core"

export const users = sqliteTable('users', {
  id: int().primaryKey(),
  profile_id: text(),
  created_at: text()
});
