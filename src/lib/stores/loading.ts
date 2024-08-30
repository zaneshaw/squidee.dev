import { get, writable } from "svelte/store";

export const progress = writable(0);
export const loading = writable(false);

progress.subscribe((p) => {
	if (p >= 1) {
		setTimeout(() => {
			loading.set(false);
			progress.set(0);
		}, 100);
	}
});

export function increaseProgress(min: number, max: number) {
	const scaledMin = min * (1 - get(progress) * 1.3);
	const scaledMax = max * (1 - get(progress) * 1.3);
	const amount = Math.max(0, scaledMin + Math.random() * (scaledMax - scaledMin));

	loading.set(true);
	progress.update((p) => p + amount);
}
