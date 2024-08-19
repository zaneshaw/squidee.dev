<script lang="ts">
	import { fade, fly } from "svelte/transition";

	let isOpen: boolean;
	let locked: boolean;
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

	const submit = async () => {
		const message = input.value.trim();
		if (locked || message == "") return;
		history = [...history, "", `> ${message}`];
		locked = true;

		const response = await fetch("/api/command", {
			method: "POST",
			body: JSON.stringify({ command: message.toLowerCase(), secrets: localStorage.getItem("secrets") }),
			headers: {
				"content-type": "application/json"
			}
		});

		const res = await response.json();
		console.log(res);

		if (res.action == "secret_new") {
			registerSecret(message);
		}

		history = [...history, ...res.messages];
		locked = false;
		scrollBottom();

		input.value = "";

		scrollBottom();
	};

	const registerSecret = (secret: string) => {
		let secrets: string[] = [];
		const saved = localStorage.getItem("secrets");
		if (saved != null) secrets = JSON.parse(saved);

		secrets.push(secret);

		localStorage.setItem("secrets", JSON.stringify(secrets));
	};

	const open = () => {
		isOpen = true;

		focus();
		scrollBottom();
	};

	const close = () => {
		isOpen = false;
	};

	const focus = () => {
		setTimeout(() => {
			input.focus();
		}, 1);
	};

	const scrollBottom = () => {
		setTimeout(() => {
			output.scrollTo(0, output.scrollHeight);
		}, 1);
	};
</script>

{#if isOpen}
	<div transition:fade={{ duration: 100 }} class="fixed bottom-3 left-3 flex w-[600px] flex-col gap-2 font-mono text-xs">
		<div class="overflow-hidden rounded bg-neutral-900/70 ring-1 ring-neutral-700/70">
			<div class="flex justify-between bg-neutral-700/70 text-neutral-400">
				<span class="my-auto px-2">squid terminal v1</span>
				<button on:click={close}>
					<img src="x.svg" alt="close icon" />
				</button>
			</div>
			<div bind:this={output} class="flex h-[12.05rem] overflow-y-auto px-1">
				<pre class="flex w-full flex-col font-mono leading-none"> <!-- fix: mt-auto doesnt work -->
					{#each history as message}
						<span class="h-[0.75rem] min-h-[0.75rem] whitespace-break-spaces break-all">{message}</span>
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
	<button transition:fly={{ x: -15, duration: 250 }} on:click={open} class="fixed bottom-0 left-0 p-2">
		<img src="square-terminal.svg" alt="terminal icon" />
	</button>
{/if}
