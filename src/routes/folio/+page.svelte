<script lang="ts">
	import Project from "$lib/components/Project.svelte";
	import TechStackIcon from "$lib/components/TechStackIcon.svelte";
</script>

<svelte:head>
	<title>folio - zane shaw</title>
</svelte:head>

<h1>folio</h1>
<div class="flex flex-col gap-10">
	{#each { length: 6 } as _}
		<Project
			name="a project that exists."
			description="a description of the project. a description of the project. a description of the project."
			demoURL=""
			sourceURL=""
		>
			<TechStackIcon name="svelte" icon="svelte.svg" alt="svelte logo" />
			<TechStackIcon name="netlify" icon="netlify.svg" alt="netlify logo" />
		</Project>
	{/each}
</div>
