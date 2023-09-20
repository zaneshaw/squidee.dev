<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import "../app.postcss";
	import NavButton from "$lib/components/NavButton.svelte";
</script>

<div class="mx-auto flex min-h-screen w-[750px] flex-col bg-white p-10 pt-5">
	<div>
		<h1 class="text-center">squidee.dev</h1>
		<nav class="flex justify-center gap-4 py-2">
			<NavButton path="/" text="Home" />
			<span>·</span>
			<NavButton path="/squidcraft" text="SquidCraft M" />
		</nav>
	</div>
	<div class="grow">
		<slot />
	</div>
	<div class="mt-10 flex justify-between">
		<span>© 2023 Zane Shaw. All rights reserved.</span>
		<a href="/">squidee.dev</a>
	</div>
</div>
