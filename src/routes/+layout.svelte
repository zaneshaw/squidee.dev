<script lang="ts">
	import "../app.postcss";
	import { fade, fly } from "svelte/transition";
	import { navigating } from "$app/stores";
	import { progress, loading, increaseProgress } from "$lib/stores/loading";
	import Terminal from "$lib/components/Terminal.svelte";

	export let data;

	let preloadedImages = [
		"/arrow-up-right.svg",

		"/badgarf.jpg",
		"/user.svg",
		"/map-pin.svg",
		"/mail.svg",
		"/github.svg",
		"/twitter.svg",

		"/folio/wip.png",

		"/rss.svg",
	];

	let progressInterval: number;
	let direction: number;
	let routes = [
		{ name: "me", path: "/" },
		{ name: "folio", path: "/folio" },
		{ name: "blog", path: "/blog" },
		{ name: "guestbook", path: "/guestbook" }
	];
	$: if ($navigating) {
		changeDir($navigating);

		if ($navigating.from?.route.id != $navigating.to?.route.id) {
			$loading = true;
			setTimeout(() => {
				increaseProgress(0.1, 0.2);
			}, 1);
			setTimeout(() => {
				progressInterval = setInterval(() => {
					increaseProgress(0.02, 0.08);
				}, 700); // todo: random interval
			}, 300);
		}
	}
	$: if (!$navigating) {
		clearInterval(progressInterval);
		$progress = 1;
	}

	// todo: allow anchors to call this?? idk. custom link component?
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

<svelte:head>
	{#each preloadedImages as image}
		<link rel="preload" as="image" href={image} />
	{/each}
</svelte:head>

{#if $loading}
	<div out:fade={{ duration: 300, delay: 100 }} style="width: {$progress * 100}%;" class="fixed left-0 top-0 z-50 h-0.5 bg-white transition-[width]" />
{/if}

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
