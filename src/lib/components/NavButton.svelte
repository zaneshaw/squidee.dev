<script lang="ts">
	import { page } from "$app/stores";

	export let path: string;
	export let text: string;
</script>

<a href={path}>
	{#if path == $page.route.id}
		<em>
			{text}
		</em>
	{:else}
		{text}
	{/if}
</a>
