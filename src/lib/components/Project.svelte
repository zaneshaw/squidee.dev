<script lang="ts">
	export let name: string;
	export let description: string;
	export let demoURL: string;
	export let sourceURL: string;
</script>

<div class="group flex overflow-hidden rounded p-2 pr-0 ring-1 ring-transparent transition-all hover:ring-neutral-700">
	<div class="flex aspect-square h-32 cursor-default items-center justify-center rounded bg-neutral-800 transition-all group-hover:text-lg">image here</div>
	<div class="relative w-full overflow-auto px-4 py-3">
		<div class="flex justify-between gap-5">
			<h2 class="truncate">{name}</h2>
			<div class="flex shrink-0 gap-8">
				<a href={demoURL} target="_blank" class="flex shrink-0 cursor-pointer gap-1">
					<h2 class="link font-normal">demo</h2>
					<img src="external-link.svg" alt="" class="mb-auto w-3" />
				</a>
				<a href={sourceURL} target="_blank" class="flex shrink-0 cursor-pointer gap-1">
					<h2 class="link font-normal">source</h2>
					<img src="external-link.svg" alt="" class="mb-auto w-3" />
				</a>
			</div>
		</div>
		<p class="line-clamp-2 break-words text-neutral-400 transition-colors group-hover:text-neutral-300">
			{description}
		</p>
		<div class="absolute bottom-0 right-0 flex gap-1 p-[inherit]">
			<slot />
		</div>
	</div>
</div>
