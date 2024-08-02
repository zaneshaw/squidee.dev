<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";

	const Status: { [key: string]: { colour: string; label: string } } = {
		LOADING: {
			colour: "bg-neutral-400",
			label: "checking status..."
		},
		ONLINE: {
			colour: "bg-green-400",
			label: "i'm online"
		},
		OFFLINE: {
			colour: "bg-red-400",
			label: "i'm offline"
		},
		ERROR: {
			colour: "bg-neutral-400",
			label: "couldn't load status :/"
		}
	};
	let status = Status.LOADING;
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

	onMount(async () => {
		fetchStatus();
		setInterval(fetchStatus, 120000);
	});
</script>

<div class="relative flex gap-2">
	<div class="mx-0.5 my-auto h-4 w-4 rounded-full {status.colour}" />
	<div on:animationiteration={updateStatus} class="absolute left-0.5 top-1 -z-10 h-4 w-4 animate-ping-slow rounded-full {status.colour}" />
	<span>{status.label}</span>
</div>
