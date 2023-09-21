<script lang="ts">
	import "../app.postcss";
	import NavButton from "$lib/components/NavButton.svelte";
	import StatusIndicator from "$lib/components/StatusIndicator.svelte";
	import SocialIcon from "$lib/components/SocialIcon.svelte";
</script>

<div class="mx-auto flex min-h-screen w-[750px] flex-col gap-2 py-5">
	<div>
		<div class="relative mx-auto flex w-fit gap-2">
			<h1 class="text-center font-medium">squidee.dev</h1>
			<StatusIndicator />
		</div>
		<nav class="flex justify-center gap-4 py-2 text-xl">
			<NavButton path="/" text="Home" />
			<span class="font-semibold">·</span>
			<NavButton path="/squidcraft" text="SquidCraft M" />
		</nav>
	</div>
	<div class="flex grow flex-col rounded-2xl bg-white p-10">
		<slot />
	</div>
	<div class="flex justify-between px-10">
		<div>
			<span>© 2023 Zane Shaw. All rights reserved.</span>
		</div>
		<div class="flex items-center gap-3">
			<div class="flex gap-2">
				<SocialIcon href="https://twitter.com/zaneshaw_" title="Twitter" style="hover:fill-[#1D9BF0]">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"/></svg>
				</SocialIcon>
				<SocialIcon href="https://steamcommunity.com/id/squidee_" title="Steam" style="hover:fill-black">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.387 3.387 0 0 1 1.912-.59c.063 0 .125.004.188.006l2.861-4.142V8.91a4.528 4.528 0 0 1 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159a3.392 3.392 0 0 1-3.39 3.396 3.412 3.412 0 0 1-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25a2.551 2.551 0 0 0 3.337-3.324 2.547 2.547 0 0 0-3.255-1.413l1.523.63a1.878 1.878 0 0 1-1.445 3.467H7.54zm11.415-9.303a3.019 3.019 0 0 0-3.015-3.015 3.015 3.015 0 1 0 3.015 3.015zm-5.273-.005a2.264 2.264 0 1 1 4.531 0 2.267 2.267 0 0 1-2.266 2.265 2.264 2.264 0 0 1-2.265-2.265z"/></svg>			</SocialIcon>
				<SocialIcon href="https://github.com/zaneshaw" title="GitHub" style="hover:fill-[#181717]">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
				</SocialIcon>
			</div>
			<a href="/" class="link">squidee.dev</a>
		</div>
	</div>
</div>
