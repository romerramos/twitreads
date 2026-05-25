import { desc } from 'drizzle-orm';
import { db } from '$lib/server/db';
import { post } from '$lib/server/db/schema';

export const load = async () => {
	const posts = await db.select().from(post).orderBy(desc(post.createdAt));
	const avatarUrl = `https://robohash.org/${crypto.randomUUID()}?set=set4`;

	return {
		avatarUrl,
		posts
	};
};
