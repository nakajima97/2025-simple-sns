import { sql } from 'drizzle-orm';
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: int('id').primaryKey(),
  profileId: text('profile_id').notNull(),
  name: text('name').notNull(),
  // タグ付きテンプレートリテラル
  createdAt: text('created_at').notNull().default(sql`CURRENT_TIMESTAMP`),
});
