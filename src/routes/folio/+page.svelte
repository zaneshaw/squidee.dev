<script lang="ts">
	import Badge from "$lib/components/Badge.svelte";
	import Project from "$lib/components/Project.svelte";

	let cursor: HTMLDivElement;
	let cursorArea: HTMLDivElement;

	function onMouseMove(e: MouseEvent) {
		const x = (e.clientX - cursorArea.offsetLeft + 840 / 2 + scrollX) * 1.02;
		const y = (e.clientY - cursorArea.offsetTop + scrollY) * 1.02;

		cursor.style.transform = `translate(${x * 0.15}px,${y * 0.15}px)`;
	}
</script>

<svelte:head>
	<title>folio - zane shaw</title>
	<meta property="og:title" content="folio - zane shaw" />
	<meta name="description" content="i'm a 20 y/o cs undergrad student currently developing games and websites for fun.">
	<meta property="og:description" content="i'm a 20 y/o cs undergrad student currently developing games and websites for fun." />
</svelte:head>

<svelte:window on:mousemove={onMouseMove} />

<div bind:this={cursorArea} class="center-x pointer-events-none absolute top-[45px] h-[840px] w-[840px] hidden lg:block" />

<h1 class="mb-5">folio</h1>
<div class="gap flex flex-col gap-10">
	<Project name="Fishcove 64" description="secret..." imageSrc="/folio/fishcove-blurred.jpg" imageAlt="blurred screenshot of Fishcove 64" wip>
		<Badge label="🛠️ work in progress" color="yellow" />
		<Badge label="libdragon">
			<img src="logos/libdragon.png" alt="libdragon logo" class="w-4" />
		</Badge>
		<Badge label="tiny3d">
			<img src="logos/tiny3d.png" alt="tiny3d logo" class="w-4" />
		</Badge>
		<Badge>
			<img src="logos/c.svg" alt="c logo" class="w-4" />
		</Badge>
	</Project>
	<Project
		name="Sanctuary 64"
		description="demo i made to learn how to develop a game for the nintendo 64."
		imageSrc="/folio/sanctuary64-label.jpg"
		imageAlt="Sanctuary 64 cartridge label"
	>
		<Badge label="🔒 private" color="yellow" />
		<Badge label="libdragon">
			<img src="logos/libdragon.png" alt="libdragon logo" class="w-4" />
		</Badge>
		<Badge label="tiny3d">
			<img src="logos/tiny3d.png" alt="tiny3d logo" class="w-4" />
		</Badge>
		<Badge>
			<img src="logos/c.svg" alt="c logo" class="w-4" />
		</Badge>
	</Project>
	<div class="group flex rounded ring-1 ring-transparent transition-all">
		<div
			class="relative flex h-20 w-20 shrink-0 cursor-default items-center justify-center overflow-hidden rounded bg-neutral-800 ring-1 ring-neutral-800 transition group-hover:ring-neutral-700 sm:h-32 sm:w-32"
		>
			<img src="/folio/squidee-dev-thumb.jpg" alt="screenshot of this website" />
			<img src="/cursor.png" alt="" bind:this={cursor} class="pointer-events-none absolute left-0 top-0 w-[3px] hidden lg:block" />
		</div>
		<div class="relative flex w-full flex-col gap-2 overflow-hidden px-4 py-0 sm:py-3">
			<div class="hidden justify-between gap-5 sm:flex">
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
			<div class="flex justify-between gap-5 sm:hidden">
				<a href="https://squidee.dev" target="_blank" class="flex shrink-0 cursor-pointer gap-0.5">
					<h2 class="link truncate">squidee.dev</h2>
					<img src="arrow-up-right.svg" alt="" class="mb-auto w-3" />
				</a>
			</div>

			<p class="line-clamp-2 break-words leading-tight text-neutral-400 transition-colors group-hover:text-neutral-300">
				this website. i use it to put all my stuff in one place.
			</p>
			<div class="absolute -bottom-2 right-0 flex gap-1 p-[inherit]">
				<Badge label="svelte">
					<img src="logos/svelte.svg" alt="svelte logo" class="w-4" />
				</Badge>
				<Badge>
					<img src="logos/typescript.svg" alt="typescript logo" class="w-4" />
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
		<Badge>
			<img src="logos/typescript.svg" alt="typescript logo" class="w-4" />
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
		<Badge>
			<img src="logos/typescript.svg" alt="typescript logo" class="w-4" />
		</Badge>
	</Project>
	<Project
		name="NMPM"
		description="Norditech Maintenance Procedure Manager. unofficial software made for a school project."
		imageSrc="/folio/nmpm-thumb.png"
		imageAlt="screenshot of NMPM"
	>
		<Badge label="🔒 private" color="yellow" />
		<Badge label="tauri">
			<img src="logos/tauri.svg" alt="tauri logo" class="w-4" />
		</Badge>
		<Badge label="svelte">
			<img src="logos/svelte.svg" alt="svelte logo" class="w-4" />
		</Badge>
		<Badge>
			<img src="logos/typescript.svg" alt="typescript logo" class="w-4" />
		</Badge>
	</Project>
</div>
