import { pb } from "$lib/db";
import { env } from "$env/dynamic/private";
import type { ServerInit } from "@sveltejs/kit";

export const init: ServerInit = async () => {
	await pb.collection("_superusers").authWithPassword(env.BACKEND_EMAIL, env.BACKEND_PASSWORD, {
		autoRefreshThreshold: 30 * 60
	});
};
