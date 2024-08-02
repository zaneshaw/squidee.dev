<script lang="ts">
	import { fade, slide } from "svelte/transition";

	let isOpen: boolean;
	let history: string[] = [
		" ___  ___  _   _ ___ ___    _____ ___ ___ __  __ ___ _  _   _   _          _ ",
		"/ __|/ _ \\| | | |_ _|   \\  |_   _| __| _ \\  \\/  |_ _| \\| | /_\\ | |    __ _/ |",
		"\\__ \\ (_) | |_| || || |) |   | | | _||   / |\\/| || || .` |/ _ \\| |__  \\ V / |",
		"|___/\\__\\_\\\\___/|___|___/    |_| |___|_|_\\_|  |_|___|_|\\_/_/ \\_\\____|  \\_/|_|",
		"",
		"welcome! this website has a terminal (for some reason).",
		"type `help` to get started:"
	];
	let output: HTMLElement;
	let input: HTMLInputElement;

	const submit = () => {
		const message = input.value;
		const responses: string[] = [];
		history = [...history, "", `> ${message}`];

		setTimeout(() => {
			if (message == "help") {
				responses.push("what? what do you want?!");
				responses.push("(btw, you've found 0/5 secrets)");
			} else {
				responses.push("unknown command!!");
			}

			history = [...history, ...responses];
		}, 200);

		input.value = "";

		setTimeout(() => {
			output.scrollTo(0, output.scrollHeight);
		}, 1);
	};

	const open = () => {
		isOpen = true;

		setTimeout(() => {
			input.focus();
			output.scrollTo(0, output.scrollHeight);
		}, 1);
	};

	const close = () => {
		isOpen = false;
	};
</script>

{#if isOpen}
	<div transition:fade={{ duration: 100 }} class="absolute bottom-3 left-3 flex w-[600px] flex-col gap-2 font-mono text-xs">
		<div class="overflow-hidden rounded bg-neutral-900/70 ring-1 ring-neutral-700/70">
			<div class="flex justify-between bg-neutral-700/70 text-neutral-400">
				<span class="px-2 my-auto">squid terminal v1</span>
				<button on:click={close}>
					<img src="x.svg" alt="close icon" />
				</button>
			</div>
			<div bind:this={output} class="flex h-[12.05rem] overflow-y-auto px-1">
				<pre class="flex w-full flex-col font-mono leading-none"> <!-- fix: mt-auto doesnt work -->
					{#each history as message}
						<span class="h-[0.75rem] min-h-[0.75rem]">{message}</span>
					{/each}
				</pre>
			</div>
		</div>
		<input
			bind:this={input}
			on:keydown={(e) => {
				if (e.key == "Enter") submit();
			}}
			placeholder="enter command..."
			type="text"
			class="h-6 w-full rounded bg-neutral-900/70 px-1 outline-none ring-1 ring-neutral-700/70 placeholder:text-neutral-600"
		/>
	</div>
{:else}
	<button transition:slide={{ duration: 150 }} on:click={open} class="absolute bottom-0 left-0 p-2">
		<img src="square-terminal.svg" alt="terminal icon" />
	</button>
{/if}
