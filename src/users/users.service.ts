import { Inject, Injectable } from '@nestjs/common';
import { LibSQLDatabase } from 'drizzle-orm/libsql/driver-core';
import { DATABASE_CONNECTION } from 'src/database/database-connection';
import * as schema from './schema'
import { eq } from 'drizzle-orm';

@Injectable()
export class UsersService {
	constructor(
		@Inject(DATABASE_CONNECTION) 
		private readonly database: LibSQLDatabase<typeof schema>
	) {}

	async getUsers() {
		return this.database.query.users.findMany();
	}

	async createUser(user: typeof schema.users.$inferInsert) {
		await this.database.insert(schema.users).values(user);
	}

	async deleteUser(user: typeof schema.users.$inferSelect) {
		await this.database.delete(schema.users).where(eq(schema.users.id, user.id));
	}

	async updateUser(id: number, updates: Partial<typeof schema.users.$inferInsert>) {
		await this.database.update(schema.users).set(updates).where(eq(schema.users.id, id));
	}
}
