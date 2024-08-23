import type { PageServerLoad } from "./$types";
import { pb } from "$lib/db";

export const load: PageServerLoad = async ({ params }) => {
	const post = await pb.collection("posts").getList();

	return {
		posts: post.items.map((x) => x.slug)
	};
};
