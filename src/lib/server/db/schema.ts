import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const post = sqliteTable('post', {
	id: text('id')
		.primaryKey()
		.$defaultFn(() => crypto.randomUUID()),
	authorName: text('author_name').notNull(),
	authorHandle: text('author_handle').notNull(),
	authorAvatarUrl: text('author_avatar_url')
		.notNull()
		.default('https://robohash.org/twitreads?set=set4'),
	content: text('content').notNull(),
	replyCount: integer('reply_count').notNull().default(0),
	repostCount: integer('repost_count').notNull().default(0),
	likeCount: integer('like_count').notNull().default(0),
	createdAt: integer('created_at', { mode: 'timestamp' })
		.notNull()
		.$defaultFn(() => new Date())
});
