<script lang="ts">
	export let url: string = "";
	export let icon: string;
	export let alt: string;
</script>

<div>
	{#if url != ""}
		<a href={url} target="_blank" class="group flex gap-2">
			<img src={icon} {alt} class="w-5" />
			<div class="flex gap-0.5">
				<span class="transition-[color] group-hover:text-white"><slot /></span>
				<img src="arrow-up-right.svg" alt="" class="mb-auto w-3" />
			</div>
		</a>
	{:else}
		<span class="group flex gap-2">
			<img src={icon} {alt} class="w-5" />
			<span class="transition-[color] group-hover:text-white"><slot /></span>
		</span>
	{/if}
</div>
