import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: int('id').primaryKey(),
  profileId: text('profile_id'),
  createdAt: text('created_at'),
});
