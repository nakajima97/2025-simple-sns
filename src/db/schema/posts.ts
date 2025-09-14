import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { users } from './users';

export const posts = sqliteTable('posts', {
  id: int('id').primaryKey(),
  userId: int('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  text: text('text'),
  createdAt: text('created_at'),
});
