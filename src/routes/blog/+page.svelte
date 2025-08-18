<script lang="ts">
	import type { PageData } from "./$types";
	import BlogCard from "$lib/components/BlogCard.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<title>blog - zane shaw</title>
	<link rel="alternate" type="application/rss+xml" title="RSS" href="https://squidee.dev/feeds/blog">
</svelte:head>

<div class="flex items-center justify-between">
	<h1>blog</h1>
	<a href="/feeds/blog" target="_blank" title="rss" class="group flex h-6 w-6 items-center justify-center">
		<img src="/rss.svg" alt="rss" class="w-3 opacity-50 transition-[opacity] group-hover:opacity-100" />
	</a>
</div>
<div class="flex flex-col">
	<div class="flex flex-col items-center">
		{#each data.posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>
