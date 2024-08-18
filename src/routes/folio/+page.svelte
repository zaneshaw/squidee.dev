<script lang="ts">
	import Project from "$lib/components/Project.svelte";
	import TechStackIcon from "$lib/components/TechStackIcon.svelte";
</script>

<svelte:head>
	<title>folio - zane shaw</title>
</svelte:head>

<h1>folio</h1>
<div class="flex flex-col gap-10">
	<Project
		name="squidee.dev"
		description="this website. i use it to put all my stuff in one place."
		imageSrc="folio/squidee-dev.png"
		imageAlt="screenshot of squidee.dev"
		demoURL="https://squidee.dev"
		sourceURL="https://github.com/zaneshaw/squidee.dev"
	>
		<TechStackIcon name="svelte" icon="logos/svelte.svg" alt="svelte logo" />
	</Project>
	<Project
		name="Workout Composer"
		description="automate your exercise. input exercises and your entire workout will be tracked for you."
		imageSrc="folio/workout-composer1.png"
		imageAlt="screenshot of squidee.dev"
		demoURL="https://workoutcomposer.squidee.dev"
		sourceURL="https://github.com/zaneshaw/workout-composer"
	>
		<TechStackIcon name="react" icon="logos/react.svg" alt="react logo" />
	</Project>
</div>
