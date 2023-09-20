<script lang="ts">
	import "../app.postcss";
	import NavButton from "$lib/components/NavButton.svelte";
	import { fade } from "svelte/transition";

	let statusPopover = false;
	let status = true;
</script>

<div class="mx-auto flex min-h-screen w-[750px] flex-col gap-2 py-5">
	<div>
		<div class="relative mx-auto w-fit">
			<h1 class="text-center font-medium">squidee.dev</h1>
			<div
				on:mouseenter={() => (statusPopover = true)}
				on:mouseleave={() => (statusPopover = false)}
				aria-hidden
				class="absolute -right-5 top-1/2 w-3 -translate-y-1/2 rounded-full {status ? "bg-green-500" : "bg-red-500"}"
			>
				{#if statusPopover}
					<div
						transition:fade={{ duration: 75 }}
						class="absolute -right-3 top-1/2 -translate-y-1/2 translate-x-full w-max rounded bg-white px-3 py-1 shadow"
					>
						I am {status ? "ONLINE" : "OFFLINE"}
					</div>
				{/if}
				<div class="aspect-square animate-ping rounded-full {status ? "bg-green-500" : "bg-red-500"}"></div>
			</div>
		</div>
		<nav class="flex justify-center gap-4 py-2 text-xl">
			<NavButton path="/" text="Home" />
			<span class="font-semibold">·</span>
			<NavButton path="/squidcraft" text="SquidCraft M" />
		</nav>
	</div>
	<div class="flex grow flex-col rounded-2xl bg-white p-10">
		<slot />
	</div>
	<div class="flex justify-between px-10">
		<span>© 2023 Zane Shaw. All rights reserved.</span>
		<a href="/" class="link">squidee.dev</a>
	</div>
</div>
