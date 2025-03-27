import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
	id: integer('id').primaryKey(),
	email: text('email').unique().notNull(),
	password: text('password').default(null),
});
