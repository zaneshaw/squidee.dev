<script lang="ts">
	import InfoItem from "$lib/components/InfoItem.svelte";
import SocialLink from "$lib/components/SocialLink.svelte";
	import StatusIndicator from "$lib/components/StatusIndicator.svelte";
	import { DateTime } from "luxon";
	import { onDestroy, onMount } from "svelte";

	let age: string = "uhhhhhhhhhhh";
	let ageInterval: number;

	const updateAge = () => {
		// could just get age then increment on interval
		age = (
			DateTime.now()
				.diff(DateTime.local(2005, 8, 20))
				.toMillis() /
			1000 /
			60 /
			60 /
			24 /
			365
		).toFixed(9);
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

<div class="flex flex-col gap-4">
	<div class="flex items-center gap-6">
		<div class="flex aspect-square h-28 items-center justify-center ring-1 ring-neutral-300">game here</div>
		<div class="flex flex-col gap-2">
			<div class="flex gap-1.5">
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
		yo. i'm an <span class="font-mono font-semibold text-white">{age}</span> y/o cs undergrad student currently
		developing games and websites for fun. i'll try to keep my <a href="/folio" class="link">folio</a> up-to-date and
		might <a href="/blog" class="link">post</a> random stuff that i find interesting.
	</p>
	<div class="flex justify-end gap-10">
		<SocialLink icon={"mail.svg"} alt={"mail icon"}>zane &lbrace;at&rbrace; squidee.dev</SocialLink>
		<SocialLink url={"https://github.com/zaneshaw"} icon={"github.svg"} alt={"github logo"}>github</SocialLink>
		<SocialLink url={"https://x.com/zaneshaw_"} icon={"twitter.svg"} alt={"twitter logo"}>twitter / x</SocialLink>
	</div>
</div>
