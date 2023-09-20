<script lang="ts">
	export let id: string;
	export let header: string;
</script>

<div {id} class="flex flex-col">
	<h3 class="mt-4">{header}</h3>
	<slot />
</div>