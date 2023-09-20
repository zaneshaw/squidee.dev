<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	const flavour = [":3", "derp ! ! !", "blep", "mleh", "mlem", "miaow", "beep boop POTATO FART ! !", ":("];
	let randFlavour = "";

	onMount(() => {
		randFlavour = flavour[Math.floor(Math.random() * flavour.length)];
	})
</script>

<svelte:head>
	<title>squidee.dev</title>
</svelte:head>

<div class="flex flex-col grow justify-between">
	<div>
		<h2>Home</h2>
		<p>This website just started development on the 20th of sept! (so it's gonna be empty)</p>
		<p>Check out the <a href="/squidcraft" class="link">SquidCraft M</a> modded server in the meantime :D</p>
	</div>
	<div class="flex flex-col px-12 mt-auto">
		<img src="/poopeater.jpg" alt="dumb stupid silly little creature little thing" class="overflow-hidden rounded-[5rem] rounded-br-none" />
		<div class="h-5 ml-auto">
			{#if randFlavour}
				<em in:fade class="italic text-violet-400">"{randFlavour}"</em>
			{/if}
		</div>
	</div>
</div>
