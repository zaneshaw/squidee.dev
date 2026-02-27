<script lang="ts">
	export let label: string | undefined = undefined;
	export let color: "red" | "yellow" | "green" | "gray" | undefined = undefined;

	const colors = {
		red: "ring-red-500/20 bg-red-500[7.5%]",
		yellow: "ring-yellow-500/20 bg-yellow-500/5",
		green: "ring-green-500/20 bg-green-500/[7.5%]",
		gray: "ring-white/25 bg-white/10",
		none: "ring-white/15 bg-white/5"
	};
</script>

<div
	class="group/tag sm:flex hidden h-6 cursor-pointer items-center gap-1 rounded px-1.5 ring-1 transition-colors hover:bg-opacity-10 hover:ring-opacity-30 {colors[color ?? 'none']} "
>
	<slot />
	{#if label}
		<span class="my-auto text-sm font-light leading-none tracking-[-0.075em] text-neutral-400 transition-colors group-hover/tag:text-white">{label}</span>
	{/if}
</div>
