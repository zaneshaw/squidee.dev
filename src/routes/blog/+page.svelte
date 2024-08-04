<svelte:head>
	<title>blog - zane shaw</title>
</svelte:head>

<h1>blog</h1>
<div class="flex flex-col gap-4">
	<label class="flex">
		<img src="search.svg" alt="search icon" class="cursor-text border-b border-white pr-1" />
		<input type="text" placeholder="search posts" class="input h-12 w-full" />
	</label>
	<div class="flex flex-col items-center">
		{#each { length: 6 } as _}
			<div class="group relative flex w-full cursor-pointer flex-col py-4 transition-all hover:pb-8">
				<div class="flex justify-between gap-5">
					<div>
						<h2 class="relative font-normal text-neutral-300 transition-colors group-hover:text-white">this is a blog post</h2>
						<p class="line-clamp-2 break-all text-neutral-400 transition-colors group-hover:text-neutral-300">this a descriptive description</p>
					</div>
					<span class="flex-shrink-0 font-light text-neutral-300 transition-colors group-hover:text-white">3 aug</span>
				</div>

				<span class="absolute bottom-1 text-neutral-300 opacity-0 transition-all group-hover:opacity-100">read &rarr;</span>
			</div>
		{/each}
	</div>
</div>
