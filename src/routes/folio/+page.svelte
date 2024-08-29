<script lang="ts">
	import Badge from "$lib/components/Badge.svelte";
	import Project from "$lib/components/Project.svelte";

	let cursor: HTMLDivElement;
	let cursorArea: HTMLDivElement;

	function onMouseMove(e: MouseEvent) {
		const x = e.clientX - cursorArea.offsetLeft + 840 / 2 + scrollX;
		const y = e.clientY - cursorArea.offsetTop + scrollY;

		cursor.style.transform = `translate(${x * 0.15}px,${y * 0.15}px)`;
	}
</script>

<svelte:head>
	<title>folio - zane shaw</title>
</svelte:head>

<svelte:window on:mousemove={onMouseMove} />

<div bind:this={cursorArea} class="pointer-events-none absolute left-1/2 top-[45px] h-[840px] w-[840px] -translate-x-1/2" />

<h1>folio</h1>
<div class="flex flex-col gap-10">
	<div class="group flex overflow-hidden rounded p-2 pr-0 ring-1 ring-transparent transition-all hover:ring-neutral-700">
		<div class="relative flex h-32 w-32 shrink-0 cursor-default items-center justify-center overflow-hidden rounded bg-neutral-800 ring-1 ring-neutral-800">
			<img src="/folio/squidee-dev-thumb2.png" alt="screenshot of this website" />
			<img src="/cursor.png" alt="" bind:this={cursor} class="absolute left-0 top-0 w-[2px]" />
		</div>
		<div class="relative flex w-full flex-col gap-2 overflow-hidden px-4 py-3">
			<div class="flex justify-between gap-5">
				<h2 class="truncate">squidee.dev</h2>
				<div class="flex shrink-0 gap-8">
					<a href="https://squidee.dev" target="_blank" class="flex shrink-0 cursor-pointer gap-0.5">
						<h2 class="link font-normal">demo</h2>
						<img src="arrow-up-right.svg" alt="" class="mb-auto w-3" />
					</a>
					<a href="https://github.com/zaneshaw/squidee.dev" target="_blank" class="flex shrink-0 cursor-pointer gap-0.5">
						<h2 class="link font-normal">source</h2>
						<img src="arrow-up-right.svg" alt="" class="mb-auto w-3" />
					</a>
				</div>
			</div>
			<p class="line-clamp-2 break-words leading-tight text-neutral-400 transition-colors group-hover:text-neutral-300">
				this website. i use it to put all my stuff in one place.
			</p>
			<div class="absolute -bottom-2 right-0 flex gap-1 p-[inherit]">
				<Badge label="svelte">
					<img src="logos/svelte.svg" alt="svelte logo" class="w-4" />
				</Badge>
			</div>
		</div>
	</div>
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
