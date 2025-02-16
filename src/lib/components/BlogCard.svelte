<script lang="ts">
	import { DateTime } from "luxon";

	export let post;
</script>

<a href="/blog/{post.slug}" class="group relative flex w-full cursor-pointer flex-col py-4 transition-all hover:pb-8">
	<div class="flex flex-col justify-between gap-2">
		<div>
			<h1 class="relative font-semibold text-neutral-300 transition-all group-hover:text-white">{post.title}</h1>
			<div class="flex w-fit items-center gap-2 text-sm">
				<span class="ml-auto text-neutral-400 transition-colors group-hover:text-white">{DateTime.fromJSDate(new Date(post.updated)).toFormat("d MMM")}</span>
				<div class="my-auto h-3.5 w-px bg-neutral-700" />
				<span class="ml-auto text-neutral-500 transition-colors group-hover:text-neutral-300">2 min read</span>
			</div>
		</div>
		<div class="relative flex flex-shrink-0 flex-col font-light">
			<p class="line-clamp-2 break-all text-neutral-400 transition-colors group-hover:text-neutral-300">{post.blurb}</p>
		</div>
	</div>
	<span class="absolute bottom-1 text-neutral-300 opacity-0 transition-all group-hover:opacity-100">read &rarr;</span>
</a>
