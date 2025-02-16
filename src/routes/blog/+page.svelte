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
	<div class="flex flex-col items-center">
		{#each data.posts as post}
			<BlogCard {post} />
		{/each}
	</div>
</div>
