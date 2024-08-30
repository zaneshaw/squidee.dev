<script lang="ts">
	import { DateTime } from "luxon";

	export let post;
</script>

<a href="/blog/{post.slug}" class="group relative flex w-full cursor-pointer flex-col py-4 transition-all hover:pb-8">
	<div class="flex justify-between gap-5">
		<div>
			<h2 class="relative font-normal text-neutral-300 transition-colors group-hover:text-white">{post.title}</h2>
			<p class="line-clamp-2 break-all text-neutral-400 transition-colors group-hover:text-neutral-300">this a descriptive description</p>
		</div>
		<div class="flex flex-shrink-0 flex-col font-light">
			<span class="ml-auto text-neutral-300 transition-colors group-hover:text-white"
				>{DateTime.fromJSDate(new Date(post.updated)).toFormat("d MMM")}</span
			>
			<div class="flex gap-2">
				{#if post.created != post.updated}
					<span class="ml-auto text-xs text-neutral-400 transition-colors group-hover:text-neutral-300"
						>edited {DateTime.fromJSDate(new Date(post.updated)).toRelative()}</span
					>
					<div class="my-auto h-3.5 w-0.5 bg-neutral-800"></div>
				{/if}
				<span class="ml-auto text-xs text-neutral-400 transition-colors group-hover:text-neutral-300">2 min read</span>
			</div>
		</div>
	</div>
	<span class="absolute bottom-1 text-neutral-300 opacity-0 transition-all group-hover:opacity-100">read &rarr;</span>
</a>