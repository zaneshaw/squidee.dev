<script lang="ts">
	import InfoItem from "$lib/components/InfoItem.svelte";
	import SocialLink from "$lib/components/SocialLink.svelte";
	import { DateTime } from "luxon";
	import { onDestroy, onMount } from "svelte";
	import type { PageData } from "./$types";
	import TodoListButton from "$lib/components/TodoListButton.svelte";

	export let data: PageData;

	let age: string = "uhhhhhhhhhhh";
	let ageInterval: number;
	let todoListYear: string = "2025";

	let myTime = "...";
	let myTimeInterval: number;

	const updateAge = () => {
		const localTime = DateTime.local();
		const birthday = { year: 2005, month: 8, day: 20 };
		const yearAge = localTime.year - birthday.year - 1;
		const lastBirthday = DateTime.local(localTime.year - 1, birthday.month, birthday.day + (localTime.isInLeapYear ? 1 : 0));
		const ageProgress = localTime.diff(lastBirthday);

		age = (yearAge + ageProgress.shiftTo("years").years).toFixed(9);
	};

	const updateMyTime = () => {
		myTime = DateTime.local().setZone("Australia/Melbourne").toFormat("hh:mm a");
	};

	onMount(() => {
		updateAge();
		updateMyTime();

		clearInterval(ageInterval);
		ageInterval = setInterval(updateAge, 10);

		clearInterval(myTimeInterval);
		myTimeInterval = setInterval(updateMyTime, 1000);
	});

	onDestroy(() => {
		clearInterval(ageInterval);
		clearInterval(myTimeInterval);
	});
</script>

<svelte:head>
	<title>zane shaw</title>
	<meta property="og:title" content="zane shaw" />
	<meta name="description" content="i'm a 20 y/o cs undergrad student currently developing games and websites for fun.">
	<meta property="og:description" content="i'm a 20 y/o cs undergrad student currently developing games and websites for fun." />
</svelte:head>

<div class="flex flex-col gap-6">
	<div class="flex flex-col gap-4">
		<div class="flex items-center gap-3">
			<div>
				<div class="relative h-28 w-28">
					<img src="zanesquid3_small.png" alt="me with a squid hat" />
				</div>
			</div>
			<div class="flex flex-col gap-2">
				<h1>zane shaw</h1>
				<div class="flex flex-col">
					<InfoItem icon="user.svg" alt="user icon" label="squidee" />
					<InfoItem icon="map-pin.svg" alt="map pin icon" label="melbourne, australia" />
					<InfoItem icon="clock.svg" alt="clock icon" label={myTime} />
				</div>
			</div>
		</div>
		<p>
			yo. i'm a <span class="font-mono font-semibold text-white">{age}</span> y/o cs undergrad student currently developing games and websites for fun. i'll try
			to keep my <a href="/folio" class="link">folio</a> up-to-date and might <a href="/blog" class="link">post</a> about random stuff that i find interesting.
		</p>
		<p>
			leave something in my <a href="/guestbook" class="link">guestbook</a> while you're here :D
		</p>
	</div>
	<div>
		<div class="flex items-end gap-3">
			<h2>todo</h2>
			<div class="mb-1 flex gap-2 text-xs">
				<!-- looks good to me ¯\(°_o)/¯ -->
				<TodoListButton on:click={() => (todoListYear = "2025")} year={"2025"} currentYear={todoListYear} />
				<TodoListButton on:click={() => (todoListYear = "2024")} year={"2024"} currentYear={todoListYear} />
			</div>
		</div>
		<div class="font-mono">
			{#await data.streamed.todoList}
				loading todo list...
			{:then todoList}
				{#each todoList as item}
					{#if item.year == todoListYear}
						<p>[{item.status == "doing" ? "-" : item.status == "done" ? "x" : " "}] {item.name}</p>
					{/if}
				{/each}
			{:catch error}
				<p>error loading todo list: {error.message}</p>
			{/await}
		</div>
	</div>
	<div class="flex flex-col justify-end gap-3 sm:flex-row sm:gap-10">
		<h2 class="sm:hidden block">links</h2>
		<SocialLink icon="mail.svg" alt="mail icon">zane &lbrace;at&rbrace; squidee.dev</SocialLink>
		<SocialLink url="https://github.com/zaneshaw" icon="github.svg" alt="github logo">github</SocialLink>
		<SocialLink url="https://x.com/zaneshaw_" icon="twitter.svg" alt="twitter logo">twitter / x</SocialLink>
	</div>
</div>
