import PocketBase from "pocketbase";
import { env } from "$env/dynamic/private";

export const pb = new PocketBase(env.BACKEND_URL);

pb.collection("_superusers").authWithPassword(env.BACKEND_EMAIL, env.BACKEND_PASSWORD);
