<script lang="ts">
	import type { PageData } from "./$types";
	import { DateTime } from "luxon";

	export let data: PageData;
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col gap-4">
		<a href="/blog" class="link w-fit">&lt; back</a>
		<h1 class="text-5xl font-normal">{data.title}</h1>
		<div class="flex gap-2 text-sm">
			<span>published {DateTime.fromJSDate(new Date(data.created)).toFormat("d MMM y")}</span>
			{#if data.updated != data.created}
				<span>&ndash;</span>
				<span>edited {DateTime.fromJSDate(new Date(data.updated)).toRelative()}</span>
			{/if}
		</div>
	</div>
	<div class="whitespace-pre-line">{@html data.content}</div>
</div>
