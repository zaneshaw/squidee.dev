<script lang="ts">
	export let name: string;
	export let description: string;
	export let imageSrc: string | undefined = undefined;
	export let imageAlt: string | undefined = undefined;
	export let demoURL: string | undefined = undefined;
	export let sourceURL: string | undefined = undefined;
</script>

<div class="group flex overflow-hidden rounded p-2 pr-0 ring-1 ring-transparent transition-all hover:ring-neutral-700">
	<div class="flex h-32 w-32 shrink-0 cursor-default items-center justify-center overflow-hidden rounded bg-neutral-800 ring-1 ring-neutral-800">
		{#if imageSrc == "comingsoon"}
			<span class="animate-pulse">coming soon...</span>
		{:else if imageSrc == undefined}
			<span>no image</span>
		{:else}
			<img src={imageSrc} alt={imageAlt} class="h-full w-full object-cover transition-[height,width] group-hover:h-[120%] group-hover:w-[120%]" />
		{/if}
	</div>
	<div class="relative flex w-full flex-col gap-2 overflow-hidden px-4 py-3">
		<div class="flex justify-between gap-5">
			<h2 class="truncate">{name}</h2>
			<div class="flex shrink-0 gap-8">
				{#if demoURL}
					<a href={demoURL} target="_blank" class="flex shrink-0 cursor-pointer gap-0.5">
						<h2 class="link font-normal">demo</h2>
						<img src="arrow-up-right.svg" alt="" class="mb-auto w-3" />
					</a>
				{/if}
				{#if sourceURL}
					<a href={sourceURL} target="_blank" class="flex shrink-0 cursor-pointer gap-0.5">
						<h2 class="link font-normal">source</h2>
						<img src="arrow-up-right.svg" alt="" class="mb-auto w-3" />
					</a>
				{/if}
			</div>
		</div>
		<p class="line-clamp-2 break-words leading-tight text-neutral-400 transition-colors group-hover:text-neutral-300">
			{description}
		</p>
		<div class="absolute -bottom-2 right-0 flex gap-1 p-[inherit]">
			<slot />
		</div>
	</div>
</div>
