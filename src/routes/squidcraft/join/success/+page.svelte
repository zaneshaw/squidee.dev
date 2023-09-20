<script lang="ts">
	import { browser } from "$app/environment";
	import { page } from "$app/stores";

	let res: any[];
	$: if (browser) res = Array.from($page?.url?.searchParams || []);
</script>

<div class="mx-auto ring-2 ring-violet-300 px-10 py-8 rounded-lg flex flex-col">
	<h1>Application submitted!</h1>
	<p class="mb-4">Zane will review your submission soon and add you to the whitelist :D</p>
	<code>Name: {res?.[0][1]}</code>
	<code>IGN: {res?.[1][1]}</code>
	<a href="/squidcraft" class="link ml-auto">← Done</a>
</div>