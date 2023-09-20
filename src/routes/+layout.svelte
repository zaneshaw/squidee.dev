<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import "../app.postcss";
	import NavButton from "$lib/components/NavButton.svelte";
</script>

<div class="mx-auto flex min-h-screen w-[750px] flex-col py-5 gap-2">
	<div>
		<h1 class="text-center font-medium">squidee.dev</h1>
		<nav class="flex justify-center gap-4 py-2">
			<NavButton path="/" text="Home" />
			<span>·</span>
			<NavButton path="/squidcraft" text="SquidCraft M" />
		</nav>
	</div>
	<div class="grow bg-white p-10 rounded-2xl">
		<slot />
	</div>
	<div class="px-10 flex justify-between">
		<span>© 2023 Zane Shaw. All rights reserved.</span>
		<a href="/">squidee.dev</a>
	</div>
</div>
