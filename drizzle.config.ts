import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	out: './drizzle',
	schema: './src/**/schema.ts',
	dialect: 'turso',
	dbCredentials: {
		url: process.env.DATABASE_URL,
		authToken: process.env.DATABASE_TOKEN,
	},
});

