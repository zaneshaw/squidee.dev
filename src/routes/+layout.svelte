<script lang="ts">
	import "../app.postcss";
	import NavButton from "$lib/components/NavButton.svelte";
</script>

<div class="mx-auto flex min-h-screen w-[750px] flex-col gap-2 py-5">
	<div>
		<h1 class="text-center font-medium">squidee.dev</h1>
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
