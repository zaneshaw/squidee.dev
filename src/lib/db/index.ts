import PocketBase from "pocketbase";
import { env } from "$env/dynamic/private";

export const pb = new PocketBase(env.BACKEND_URL);
