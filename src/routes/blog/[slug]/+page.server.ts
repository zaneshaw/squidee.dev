import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { pb } from "$lib/db";

export const load: PageServerLoad = async ({ params }) => {
	try {
		const post = await pb.collection("posts").getFirstListItem(`slug="${params.slug}"`);
		const url = pb.files.getUrl(post, post.content);
		const content = await (await fetch(url)).text();

		return {
			title: post.slug,
			content
		};
	} catch {
		throw error(404, {
			message: "Post not found"
		});
	}
};
