<script lang="ts">
	import InfoItem from "$lib/components/InfoItem.svelte";
	import SocialLink from "$lib/components/SocialLink.svelte";
	import StatusIndicator from "$lib/components/StatusIndicator.svelte";
	import { DateTime } from "luxon";
	import { onDestroy, onMount } from "svelte";
	import type { PageData } from "./$types";

	export let data: PageData;

	const todos = {
		"interactive old websites slideshow thing": false,
		"react project": true,
		"vue project": true,
		"astro project": false,
		"solid project": false,
		"c++ 2d game engine": false,
		"bad ui makeover (OP's vod websites)": false,
		"website background": false
	};
	let age: string = "uhhhhhhhhhhh";
	let ageInterval: number;

	const updateAge = () => {
		const birthday = { year: 2005, month: 8, day: 20 };
		const yearAge = DateTime.local().year - birthday.year - 1;
		const lastBirthday = DateTime.local(DateTime.local().year - 1, birthday.month, birthday.day + (DateTime.local().isInLeapYear ? 1 : 0));
		const ageProgress = DateTime.local().diff(lastBirthday);

		age = (yearAge + ageProgress.shiftTo("years").years).toFixed(9);
	};

	onMount(() => {
		updateAge();

		clearInterval(ageInterval);
		ageInterval = setInterval(updateAge, 50);
	});

	onDestroy(() => {
		clearInterval(ageInterval);
	});
</script>

<svelte:head>
	<title>zane shaw</title>
</svelte:head>

<div class="flex flex-col gap-6">
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-6">
			<div>
				<div class="relative h-28 w-28 items-center justify-center overflow-hidden rounded ring-1 ring-neutral-600">
					<img src="badgarf.png" alt="@PfpDrawer" title="@PfpDrawer" />
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<div class="flex gap-3">
					<h1>zane shaw</h1>
					<StatusIndicator />
				</div>
				<div class="flex flex-col">
					<InfoItem icon="user.svg" alt="user icon" label="squidee" />
					<InfoItem icon="map-pin.svg" alt="map pin icon" label="melbourne, australia" />
				</div>
			</div>
		</div>
		<p>
			yo. i'm a <span class="font-mono font-semibold text-white">{age}</span> y/o cs undergrad student currently developing games and websites for fun. i'll try
			to keep my <a href="/folio" class="link">folio</a> up-to-date and might <a href="/blog" class="link">post</a> about random stuff that i find interesting.
		</p>
		<p>
			leave something in the <a href="/guestbook" class="link">guestbook</a> while you're here :D
		</p>
	</div>
	<div>
		<div class="flex items-end gap-3">
			<h2>todo</h2>
			<div class="mb-1 flex gap-2 text-xs">
				<span class="cursor-pointer font-semibold text-white">2025</span>
				<span class="cursor-pointer">2024</span>
			</div>
		</div>
		<div class="font-mono">
			{#await data.streamed.todos}
				loading todos...
			{:then todos}
				{#each todos as item}
					<p>[{item.status == "doing" ? "-" : item.status == "done" ? "x" : " "}] {item.name}</p>
				{/each}
			{:catch error}
				<p>error loading todos: {error.message}</p>
			{/await}
		</div>
	</div>
	<div class="flex justify-end gap-10">
		<SocialLink icon="mail.svg" alt="mail icon">zane &lbrace;at&rbrace; squidee.dev</SocialLink>
		<SocialLink url="https://github.com/zaneshaw" icon="github.svg" alt="github logo">github</SocialLink>
		<SocialLink url="https://x.com/zaneshaw_" icon="twitter.svg" alt="twitter logo">twitter / x</SocialLink>
	</div>
</div>
