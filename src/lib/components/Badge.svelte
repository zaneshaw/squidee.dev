<script lang="ts">
	export let label: string;
	export let color: "red" | "yellow" | "green" | undefined = undefined;

	const colors = {
		red: "ring-red-500 bg-red-500 ring-opacity-20 bg-opacity-[7.5%]",
		yellow: "ring-yellow-500 bg-yellow-500 ring-opacity-20 bg-opacity-5",
		green: "ring-green-500 bg-green-500 ring-opacity-20 bg-opacity-[7.5%]",
		none: "ring-white bg-white ring-opacity-[15%] bg-opacity-5"
	};
</script>

<div
	class="group/tag flex h-6 cursor-pointer gap-0.5 rounded px-1.5 ring-1 transition-colors hover:bg-opacity-10 hover:ring-opacity-30 {colors[color ?? 'none']}"
>
	<slot />
	<span class="my-auto text-sm font-light leading-none tracking-[-0.075em] text-neutral-400 transition-colors group-hover/tag:text-white">{label}</span>
</div>
