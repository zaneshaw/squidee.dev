<script lang="ts">
	import { page } from "$app/stores";

	export let path: string;
	export let text: string;
</script>

<a href={path}>
	{#if path.split("/")[1] == $page.route.id?.split("/")[1]}
		<em>
			{text}
		</em>
	{:else}
		{text}
	{/if}
</a>
