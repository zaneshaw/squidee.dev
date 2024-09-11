<script lang="ts">
	import type { PageData } from "./$types";
	import BlogCard from "$lib/components/BlogCard.svelte";

	export let data: PageData;
</script>

<svelte:head>
	<title>blog - zane shaw</title>
</svelte:head>

<h1>blog</h1>
<div class="flex flex-col">
	<label class="flex">
		<img src="/search.svg" alt="search icon" class="cursor-text pr-1" />
		<input type="text" placeholder="search posts" class="input h-12 w-full border-0 placeholder:text-neutral-600" />
	</label>
	<div class="flex flex-col items-center">
		{#each data.posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>
