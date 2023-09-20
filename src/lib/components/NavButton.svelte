<script lang="ts">
	import { page } from "$app/stores";

	export let path: string;
	export let text: string;
</script>

<a href={path} class="!bg-none font-light">
	{#if path == $page.route.id}
		<em>
			{text}
		</em>
	{:else}
		{text}
	{/if}
</a>
