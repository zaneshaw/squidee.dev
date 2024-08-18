<script lang="ts">
	export let label: string;
	export let color: "red" | "yellow" | "green";
</script>

<div
	class="group/tag flex h-6 cursor-pointer gap-0.5 rounded px-1.5 transition-colors {color == 'red'
		? 'bg-red-500/[0.15]'
		: color == 'yellow'
		? 'bg-yellow-500/[0.15]'
		: 'bg-green-500/[0.15]'}"
>
	<span class="my-auto text-sm font-light leading-none tracking-[-0.075em] text-neutral-400 transition-colors group-hover/tag:text-white">{label}</span>
</div>
