<script lang="ts">
	import markdownit from "markdown-it";
	import type { PageData } from "./$types";
	import { DateTime } from "luxon";

	export let data: PageData;

	const md = markdownit({ html: true, linkify: true, breaks: true });
	const result = md.render(data.content);
</script>

<div class="flex flex-col gap-6">
	<div class="flex flex-col gap-1">
		<h1>{data.post.title}</h1>
		<div class="flex gap-3 text-sm text-neutral-500">
			<span>{DateTime.fromJSDate(new Date(data.post.updated)).toFormat("d MMMM y")}</span>
			<div class="my-auto h-4 w-0.5 bg-neutral-800"></div>
			<span>edited {DateTime.fromJSDate(new Date(data.post.updated)).toRelative()}</span>
		</div>
	</div>
	<div class="whitespace-pre-line">{@html result}</div>
</div>
