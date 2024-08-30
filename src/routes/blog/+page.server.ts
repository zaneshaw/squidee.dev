import type { PageServerLoad } from "./$types";
import { pb } from "$lib/db";

export const load: PageServerLoad = async () => {
	const post = await pb.collection("posts").getList(1, 10, {
		sort: "-created"
	});

	return {
		posts: post.items
	};
};
