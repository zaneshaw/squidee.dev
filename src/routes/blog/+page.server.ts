import type { PageServerLoad } from "./$types";
import { pb } from "$lib/db";

export const load: PageServerLoad = async () => {
	const posts = await pb.collection("posts").getList(1, 10, {
		sort: "-created"
	});

	return {
		posts: posts.items.filter(post => post.published)
	};
};
