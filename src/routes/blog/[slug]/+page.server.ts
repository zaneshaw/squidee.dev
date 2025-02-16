import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { pb } from "$lib/db";

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = await pb.collection("posts").getFirstListItem(`slug="${params.slug}"`);

		post.content = post.content.replaceAll("<a", "<a class='link'");

		return post;
	} catch {
		throw error(404, {
			message: "Post not found"
		});
	}
};
