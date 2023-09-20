<script lang="ts">
	import "../app.postcss";
</script>

<div class="mx-auto min-h-screen w-[750px] bg-white pt-5 flex flex-col p-10">
	<div>
		<h1 class="text-center">squidee.dev</h1>
		<nav class="flex justify-center gap-4 py-2">
			<a href="/">Home</a>
			<span>·</span>
			<a href="/squidcraft">SquidCraft M</a>
		</nav>
	</div>
	<div class="grow">
		<slot />
	</div>
	<div class="flex justify-between mt-10">
		<span>© 2023 Zane Shaw. All rights reserved.</span>
		<a href="/">squidee.dev</a>
	</div>
</div>
