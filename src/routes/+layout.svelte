<script lang="ts">
	import "../app.postcss";
	import { fly } from "svelte/transition";
	import { navigating } from "$app/stores";
	import Terminal from "$lib/components/Terminal.svelte";

	export let data;

	let direction: number;
	let routes = [
		{ name: "me", path: "/" },
		{ name: "folio", path: "/folio" },
		{ name: "blog", path: "/blog" },
		{ name: "game", path: "/game" }
	];
	$: if ($navigating) changeDir($navigating);

	// todo: allow anchors to call this?? idk
	const changeDir = (nav: any) => {
		const from = routes.map((x) => x.path).indexOf(nav.from?.route.id);
		const to = routes.map((x) => x.path).indexOf(nav.to?.route.id);

		if (to >= 0) {
			direction = from > to ? -1 : 1;
		} else {
			direction = 1;
		}
	};
</script>

<header class="flex gap-5 py-8">
	{#each routes as route}
		<a href={route.path} class="link pr-4">{route.name}</a>
	{/each}
</header>
{#key data.pathname}
	<main in:fly={{ x: 10 * direction, duration: 200, delay: 200 }} out:fly={{ x: -10 * direction, duration: 200 }}>
		<slot />
	</main>
{/key}

<Terminal />
