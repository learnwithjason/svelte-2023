const db = new Map();

export function create({ title, slug, content }: any) {
	db.set(slug, { title, slug, content });
}

export function get(slug: string) {
	return db.get(slug);
}
