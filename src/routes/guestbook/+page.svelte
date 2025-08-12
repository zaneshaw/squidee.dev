<script lang="ts">
	import { DateTime } from "luxon";
	import type { PageData } from "./$types";
	import autosize from "svelte-autosize";

	export let data: PageData;
</script>

<svelte:head>
	<title>guestbook - zane shaw</title>
</svelte:head>

<h1 class="mb-5">guestbook</h1>
<div class="gap flex flex-col gap-10">
	{#each data.messages as message}
		<div class="flex w-full flex-col">
			<div class="flex w-fit items-center gap-2 text-sm">
				{#if message.link}
					<span class="text-neutral-400">message from <a href={message.link} class="link px-0.5">{message.author}</a></span>
				{:else}
					<span class="text-neutral-400">message from <span class="font-medium text-white">{message.author}</span></span>
				{/if}
				<div class="my-auto h-3.5 w-px bg-neutral-700" />
				<span class="ml-auto text-neutral-500">{DateTime.fromJSDate(new Date(message.created)).toFormat("DD")}</span>
			</div>
			<h2 class="relative whitespace-pre-line break-words font-semibold text-white">{message.message}</h2>
		</div>
	{/each}
	<div class="flex flex-col gap-1.5">
		<form method="POST" class="flex flex-col gap-5 rounded p-5 ring-1 ring-white">
			<h2>leave a message</h2>
			<div class="flex flex-wrap gap-5 sm:flex-nowrap">
				<label class="flex basis-full flex-col sm:basis-2/5">
					<span class="text-sm">your name / username</span>
					<input type="text" name="author" placeholder="..." required class="input w-full text-white" />
				</label>
				<label class="flex basis-full flex-col sm:basis-3/5">
					<span class="text-sm">your personal website <span class="ml-0.5 text-neutral-500">&lpar;optional&rpar;</span></span>
					<input
						type="text"
						name="link"
						placeholder="or linktree, twitter, etc"
						pattern="https:\/\/[a-zA-Z0-9.\-]+(\.[a-zA-Z])\S*"
						title="must be a valid https url :/"
						class="input w-full text-white"
					/>
				</label>
			</div>
			<label class="flex flex-col">
				<span class="text-sm">a message</span>
				<textarea use:autosize name="message" rows="1" placeholder="(press enter for new line)" required class="input w-full resize-none text-white"></textarea>
			</label>
			<button class="btn group ml-auto w-fit bg-white py-1 pl-2 font-medium text-black"
				>send <span class="pr-4 transition-[padding] group-hover:pl-1 group-hover:pr-3">-&gt;</span></button
			>
		</form>
		<span class="px-1 text-sm text-neutral-500">send me an email if you would like your message removed</span>
	</div>
</div>
