import type { PageServerLoad } from "./$types";
import { pb } from "$lib/db";

interface TodoItem {
	name: string;
	status: "planned" | "doing" | "done";
}
const todoOrder = ["doing", "planned", "done"];

export const load: PageServerLoad = async () => {
	return {
		streamed: {
			todos: getTodos()
		}
	};
};

async function getTodos(): Promise<TodoItem[]> {
	const data = await pb.collection("todos").getList(1, 10, {
		sort: "created"
	});
	const todos = data.items.map((x) => <TodoItem>{ name: x.name, status: x.status });

	// https://stackoverflow.com/a/14872683/10851455
	return todos.toSorted((a, b) => {
		if (a.status == b.status) {
			return a.name.localeCompare(b.name);
		} else {
			return todoOrder.indexOf(a.status) - todoOrder.indexOf(b.status);
		}
	});
}
