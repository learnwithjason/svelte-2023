import { get } from '$lib/server/database';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const post = get(params.slug);

	if (!post) {
		throw error(404);
	}

	return post;
}
