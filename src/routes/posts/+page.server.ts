import { faker } from '@faker-js/faker';
import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/server/db';
import { post } from '$lib/server/db/schema';
import type { Actions } from './$types';

const createHandle = (name: string) =>
	name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '')
		.slice(0, 20) || faker.internet.username().toLowerCase();

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const content = data.get('content');
		const authorAvatarUrl = data.get('authorAvatarUrl');

		if (typeof content !== 'string' || content.trim().length === 0) {
			return fail(400, {
				content: typeof content === 'string' ? content : '',
				message: 'Post content is required.'
			});
		}

		if (
			typeof authorAvatarUrl !== 'string' ||
			!authorAvatarUrl.startsWith('https://robohash.org/')
		) {
			return fail(400, {
				content,
				message: 'Post avatar is invalid.'
			});
		}

		const authorName = faker.person.fullName();
		const authorHandle = createHandle(authorName);

		await db.insert(post).values({
			authorName,
			authorHandle,
			authorAvatarUrl,
			content: content.trim()
		});

		redirect(303, '/');
	}
} satisfies Actions;
