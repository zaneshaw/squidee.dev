import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { pb } from "$lib/db";

interface TodoItem {
	name: string;
	status: "planned" | "doing" | "done";
}
const todoOrder = ["doing", "planned", "done"];

export const GET: RequestHandler = async ({ url }) => {
	let year = url.searchParams.get("year");

	switch (year) {
		case "2024":
		case "2025":
			break;
		default:
			year = "2025";
			break;
	}

	const data = await pb.collection("todolist").getFullList({
		sort: "created",
		filter: `year="${year}"`
	});
	const todoList = data.map((x) => <TodoItem>{ name: x.name, status: x.status });

	// https://stackoverflow.com/a/14872683/10851455
	const sorted = todoList.toSorted((a, b) => {
		if (a.status == b.status) {
			return a.name.localeCompare(b.name);
		} else {
			return todoOrder.indexOf(a.status) - todoOrder.indexOf(b.status);
		}
	});

	return json(sorted);
};
