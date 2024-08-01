<script lang="ts">
	export let url: string;
	export let icon: string;
	export let alt: string;
</script>

<div>
	<a href={url} target="_blank" class="group flex gap-2">
		<img src={icon} {alt} class="w-5" />
		<div class="flex gap-1">
			<span class="group-hover:text-white transition-[color]"><slot /></span>
			<img src="external-link.svg" alt="" class="w-3 mb-auto" />
		</div>
	</a>
</div>
