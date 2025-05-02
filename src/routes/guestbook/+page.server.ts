import type { Actions, PageServerLoad } from "./$types";
import { pb } from "$lib/db";
import { sanitizeUrl } from "@braintree/sanitize-url";

export const load: PageServerLoad = async () => {
	const messages = await pb.collection("guestbook").getList(1, 10, {
		sort: "-created"
	});

	return {
		messages: messages.items
	};
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const dbData = {
			author: data.get("author") as string,
			message: data.get("message") as string,
			link: ""
		};
		const link = data.get("link") as string;
		if (link) dbData["link"] = sanitizeUrl(link);

		if (!dbData.link || dbData.link.startsWith("https://")) {
			try {
				await pb.collection("guestbook").create(dbData);
				return { success: true };
			} catch (error) {
				return { success: false };
			}
		}

		return { success: false };
	}
} satisfies Actions;
