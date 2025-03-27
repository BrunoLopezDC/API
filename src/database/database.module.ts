import { Module } from '@nestjs/common';
import { DATABASE_CONNECTION } from './database-connection';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql/node';
import * as userSchema from '../users/schema'

@Module({
	providers: [
		{
			provide: DATABASE_CONNECTION,
			useFactory: (configService: ConfigService) => {
				const client = createClient({
					url: configService.getOrThrow('DATABASE_URL'),
					authToken: configService.getOrThrow('DATABASE_TOKEN'),
				});

				return drizzle(client, {
					schema: {
						...userSchema,
					},
				});
			},
			inject: [ConfigService],
		},
	],
	exports: [DATABASE_CONNECTION],
})
export class DatabaseModule {}
