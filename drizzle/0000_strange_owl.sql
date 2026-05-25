CREATE TABLE `post` (
	`id` text PRIMARY KEY NOT NULL,
	`author_name` text NOT NULL,
	`author_handle` text NOT NULL,
	`content` text NOT NULL,
	`reply_count` integer DEFAULT 0 NOT NULL,
	`repost_count` integer DEFAULT 0 NOT NULL,
	`like_count` integer DEFAULT 0 NOT NULL,
	`created_at` integer NOT NULL
);
