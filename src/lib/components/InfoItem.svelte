<script lang="ts">
	export let icon;
	export let alt;
	export let label;
</script>

<div class="flex gap-2">
	<img src={icon} {alt} class="w-5" />
	<span>{label}</span>
</div>
