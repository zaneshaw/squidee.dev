<script lang="ts">
	export let name: string;
	export let icon: string;
	export let alt: string;
</script>

<div class="group/tag flex h-6 cursor-pointer gap-0.5 rounded bg-white/10 px-1 transition-colors hover:bg-white/[0.15]">
	<img src={icon} {alt} class="w-5" />
	<span class="my-auto text-sm font-light leading-none tracking-tighter text-neutral-400 transition-colors group-hover/tag:text-white">{name}</span>
</div>
