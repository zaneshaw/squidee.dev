import type { PageServerLoad } from "./$types";
import { pb } from "$lib/db";

interface TodoItem {
	name: string;
	status: "planned" | "doing" | "done";
	year: "2024" | "2025";
}
const todoOrder = ["doing", "planned", "done"];

export const load: PageServerLoad = async () => {
	return {
		streamed: {
			todoList: getTodoList()
		}
	};
};

async function getTodoList(): Promise<TodoItem[]> {
	const data = await pb.collection("todolist").getFullList({
		sort: "created"
	});
	const todoList = data.map((x) => <TodoItem>{ name: x.name, status: x.status, year: x.year });

	// https://stackoverflow.com/a/14872683/10851455
	return todoList.toSorted((a, b) => {
		if (a.status == b.status) {
			return a.name.localeCompare(b.name);
		} else {
			return todoOrder.indexOf(a.status) - todoOrder.indexOf(b.status);
		}
	});
}
