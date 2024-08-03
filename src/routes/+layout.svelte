<script lang="ts">
	import "../app.postcss";
	import { fly } from "svelte/transition";
	import { navigating } from "$app/stores";
	import Terminal from "$lib/components/Terminal.svelte";

	export let data;

	let direction: number;
	let routes = ["/", "/folio", "/blog"];
	$: if ($navigating) changeDir($navigating);

	const changeDir = (nav: any) => {
		const from = routes.indexOf(nav.from?.route.id);
		const to = routes.indexOf(nav.to?.route.id);

		direction = from > to ? -1 : 1;
	}
</script>

<header class="flex gap-5 py-8">
	<a href="/" class="link pr-4">me</a>
	<a href="/folio" class="link pr-4">folio</a>
	<a href="/blog" class="link pr-4">blog</a>
</header>
{#key data.pathname}
	<main in:fly={{ x: 10 * direction, duration: 200, delay: 200 }} out:fly={{ x: -10 * direction, duration: 200 }}>
		<slot />
	</main>
{/key}

<Terminal />
