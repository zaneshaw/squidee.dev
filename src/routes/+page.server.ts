import type { PageServerLoad } from "./$types";
import { pb } from "$lib/db";

interface TodoItem {
	name: string;
	completed: boolean;
}

export const load: PageServerLoad = async ({ params }) => {
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
	const todos = data.items.map((x) => <TodoItem>{ name: x.name, completed: x.completed });

	// sort by completed first, then alphabetically
	return todos.toSorted((a, b) => {
		if (a.completed > b.completed) return 1;
		else if (a.completed < b.completed) return -1;
		else {
			if (a.name > b.name) return 1;
			else if (a.name < b.name) return -1;
			else return 0;
		}
	});
}
