<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	const Status: { [key: string]: { colour: string; label: string } } = {
		PENDING: {
			colour: "bg-neutral-400",
			label: "Loading status..."
		},
		ONLINE: {
			colour: "bg-green-400",
			label: "I am ONLINE"
		},
		OFFLINE: {
			colour: "bg-red-400",
			label: "I am OFFLINE"
		},
		ERROR: {
			colour: "bg-neutral-400",
			label: "Couldn't load status :/"
		}
	};
	let statusPopover = false;
	let status = Status.PENDING;
	let userData: any = undefined;

	function updateStatus() {
		if (userData === undefined) return;
		let newStatus;

		if (userData.success) {
			if (["online", "dnd"].includes(userData.data.discord_status)) {
				newStatus = Status.ONLINE;
			} else {
				newStatus = Status.OFFLINE;
			}
		} else {
			newStatus = Status.ERROR;
		}
		let doCache = status != newStatus;
		status = newStatus;

		if (doCache) {
			localStorage.setItem(
				"status",
				Object.values(Status)
					.findIndex((val) => val === status)
					.toString()
			);
		}
	}

	async function fetchStatus() {
		if (!browser) return;
		const cache = localStorage.getItem("status");
		if (cache && +cache < 3) status = Object.values(Status)[+cache];
		userData = await (await fetch("https://api.lanyard.rest/v1/users/635058422169206785")).json();
	}

	fetchStatus();
	onMount(async () => {
		setInterval(fetchStatus, 120000);
	});
</script>

<div class="flex">
	<div
		on:mouseenter={() => (statusPopover = true)}
		on:mouseleave={() => (statusPopover = false)}
		aria-hidden
		class="my-auto h-3 w-3 rounded-full {status.colour}"
	>
		{#if statusPopover}
			<div
				transition:fade={{ duration: 75 }}
				class="absolute -right-3 top-1/2 w-max -translate-y-1/2 translate-x-full rounded bg-white px-3 py-1 shadow"
			>
				{status.label}
			</div>
		{/if}
		<div on:animationiteration={updateStatus} class="h-3 w-3 animate-ping-slow rounded-full {status.colour}"></div>
	</div>
</div>
