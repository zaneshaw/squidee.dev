<script lang="ts">
	import Badge from "$lib/components/Badge.svelte";
	import Project from "$lib/components/Project.svelte";
</script>

<svelte:head>
	<title>folio - zane shaw</title>
</svelte:head>

<h1>folio</h1>
<div class="flex flex-col gap-10">
	<Project
		name="squidee.dev"
		description="this website. i use it to put all my stuff in one place."
		imageSrc="/folio/squidee-dev-thumb.png"
		imageAlt="screenshot of squidee.dev"
		demoURL="https://squidee.dev"
		sourceURL="https://github.com/zaneshaw/squidee.dev"
	>
		<Badge label="svelte">
			<img src="logos/svelte.svg" alt="svelte logo" class="w-4" />
		</Badge>
	</Project>
	<Project
		name="Workout Composer"
		description="automate your exercise. input exercises and your entire workout will be tracked for you."
		imageSrc="/folio/workout-composer-thumb.png"
		imageAlt="screenshot of Workout Composer"
		demoURL="https://workoutcomposer.squidee.dev"
		sourceURL="https://github.com/zaneshaw/workout-composer"
	>
		<Badge label="react">
			<img src="logos/react.svg" alt="react logo" class="w-4" />
		</Badge>
	</Project>
	<Project
		name="squidpaste"
		description="free, anonymous service for hosting plain text. yummy. the server is closed source."
		imageSrc="/folio/squidpaste-thumb.png"
		imageAlt="screenshot of squidpaste"
		demoURL="https://paste.squidee.dev"
		sourceURL="https://github.com/zaneshaw/squidpaste"
	>
		<Badge label="express">
			<img src="logos/express.svg" alt="express logo" class="h-4 w-4" />
		</Badge>
		<Badge label="mongodb">
			<img src="logos/mongodb-springgreen.svg" alt="mongodb logo" class="h-4 w-4" />
		</Badge>
		<Badge label="vue">
			<img src="logos/vue.svg" alt="vue logo" class="w-4" />
		</Badge>
	</Project>
	<Project
		name="NMPM"
		description="Norditech Maintenance Procedure Manager. unofficial software made for a school project."
		imageSrc="/folio/nmpm-thumb.png"
		imageAlt="screenshot of NMPM"
	>
		<Badge label="private" color="yellow" />
		<Badge label="tauri">
			<img src="logos/tauri.svg" alt="tauri logo" class="w-4" />
		</Badge>
		<Badge label="svelte">
			<img src="logos/svelte.svg" alt="svelte logo" class="w-4" />
		</Badge>
	</Project>
	<Project name="placeholder" description="nothing here yet." />
</div>
