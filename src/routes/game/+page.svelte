<script lang="ts">
	import { onMount } from "svelte";
	import { screen, processPhysics, holdJump, releaseJump, move, setCanvas } from "$lib/game";

	let frame: string = "";
	let frameBuffer: string = "";
	let keys: string[] = [];
	let debugCanvas: HTMLCanvasElement;

	onMount(() => {
		setCanvas(debugCanvas);
		draw();

		const drawLoop = setInterval(() => {
			processPhysics();
			processRepeatInputs();
			draw();
		}, 20);

		return () => {
			clearInterval(drawLoop);
		};
	});

	function onKeydown(e: KeyboardEvent) {
		if (e.repeat) return;

		if (!keys.includes(e.key)) {
			keys.push(e.key);

			if (keys.includes(" ")) {
				holdJump();
			}
		}
	}

	function onKeyup(e: KeyboardEvent) {
		if (keys.includes(e.key)) {
			if (e.key == " ") {
				releaseJump();
			}

			keys.splice(keys.indexOf(e.key), 1);
		}
	}

	function draw() {
		frameBuffer = "";
		for (let y = 0; y < screen.length; y++) {
			for (let x = 0; x < screen[y].length; x++) {
				frameBuffer += screen[y][x] ?? " ";
			}
			frameBuffer += "\n";
		}
		frame = frameBuffer;
	}

	function processRepeatInputs() {
		if (keys.includes("d")) move(1);
		else if (keys.includes("a")) move(-1);
		else move(0);
	}
</script>

<svelte:body on:keydown={onKeydown} on:keyup={onKeyup} />
<div class="relative mx-auto w-fit rounded p-2 ring-1 ring-neutral-700">
	<canvas bind:this={debugCanvas} class="absolute opacity-50"></canvas>
	<pre class="leading-[12.75px] tracking-[4px]">{frame}</pre>
</div>
