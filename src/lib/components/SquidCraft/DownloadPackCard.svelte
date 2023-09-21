<script lang="ts">
	import { fade } from "svelte/transition";

	export let packName: string;
	export let packFlavour: string = "";
	export let packDesc: string;
	export let packImage: string;
	export let packImageHover: string;
	export let outline: boolean = false;

	let hovered: boolean;
</script>

<div
	on:mouseenter={() => (hovered = true)}
	on:mouseleave={() => (hovered = false)}
	aria-hidden
	class="group flex w-64 flex-col justify-between gap-4 rounded-2xl bg-white p-4 shadow-md ring-2 ring-inset ring-violet-100 transition-all hover:shadow-lg"
>
	<div class="relative aspect-square rounded-xl bg-violet-50 transition-all">
		<img
			src={packImage}
			alt="{packName} image"
			class="absolute left-0 top-0 w-full p-5 transition-all group-hover:p-[18px]"
		/>
		{#if hovered}
			<img
				transition:fade={{ duration: 150 }}
				src={packImageHover}
				alt="{packName} image"
				class="absolute left-0 top-0 w-full p-5 transition-all group-hover:p-[18px]"
			/>
		{/if}
	</div>
	<div class="flex flex-col gap-4 text-left">
		<div>
			<div class="flex items-center gap-1">
				<h3 class="text-lg font-bold text-neutral-700">
					{packName}
				</h3>
				<span class="text-neutral-500 text-sm">{packFlavour}</span>
			</div>
			<span class="text-sm">{@html packDesc}</span>
		</div>
		<button class="btn {outline && 'btn-outline'}">Download</button>
	</div>
</div>
