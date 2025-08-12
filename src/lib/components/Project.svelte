<script lang="ts">
	export let name: string;
	export let description: string;
	export let imageSrc: string | undefined = undefined;
	export let imageAlt: string | undefined = undefined;
	export let demoURL: string | undefined = undefined;
	export let sourceURL: string | undefined = undefined;
	export let wip: boolean = false;
</script>

<div class="group flex rounded ring-1 ring-transparent transition-all">
	<div
		class="relative flex h-20 w-20 shrink-0 cursor-default items-center justify-center overflow-hidden rounded bg-neutral-800 ring-1 ring-neutral-800 transition group-hover:ring-neutral-700 sm:h-32 sm:w-32"
	>
		{#if imageSrc == "comingsoon"}
			<span class="animate-pulse">coming soon...</span>
		{:else if imageSrc == undefined}
			<span>no image</span>
		{:else}
			<div class="absolute h-full w-full transition-[height,width] group-hover:h-[110%] group-hover:w-[110%]">
				<img src={imageSrc} alt={imageAlt} class="h-full w-full object-cover" />
			</div>
		{/if}
		{#if wip}
			<img
				src="folio/wip.png"
				alt="wip"
				class="pointer-events-none absolute h-full w-full object-cover transition-[opacity,height,width] duration-200 group-hover:h-[120%] group-hover:w-[120%] group-hover:opacity-0"
			/>
		{/if}
	</div>
	<div class="relative flex w-full flex-col gap-2 overflow-hidden px-4 py-0 sm:py-3">
		<div class="hidden justify-between gap-5 sm:flex">
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
		<div class="flex justify-between gap-5 sm:hidden">
			{#if demoURL}
				<a href={demoURL} target="_blank" class="flex shrink-0 cursor-pointer gap-0.5">
					<h2 class="link truncate">{name}</h2>
					<img src="arrow-up-right.svg" alt="" class="mb-auto w-3" />
				</a>
			{:else}
				<h2 class="truncate">{name}</h2>
			{/if}
		</div>

		<p class="line-clamp-2 break-words leading-tight text-neutral-400 transition-colors group-hover:text-neutral-300">
			{description}
		</p>
		<div class="absolute -bottom-2 right-0 flex gap-1 p-[inherit]">
			<slot />
		</div>
	</div>
</div>
