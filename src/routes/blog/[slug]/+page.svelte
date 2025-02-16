<script lang="ts">
	import markdownit from "markdown-it";
	import type { PageData } from "./$types";
	import { DateTime } from "luxon";

	export let data: PageData;

	const md = markdownit({ html: true, linkify: true, breaks: true, typographer: true });
	const result = md.render(data.content);
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col gap-4">
		<h1 class="text-5xl font-normal">{data.post.title}</h1>
		<div class="flex gap-2 text-sm">
			<span>published {DateTime.fromJSDate(new Date(data.post.created)).toFormat("d MMM y")}</span>
			{#if data.post.updated != data.post.created}
				<span>&ndash;</span>
				<span>edited {DateTime.fromJSDate(new Date(data.post.updated)).toRelative()}</span>
			{/if}
		</div>
	</div>
	<div class="whitespace-pre-line">{@html result}</div>
</div>
