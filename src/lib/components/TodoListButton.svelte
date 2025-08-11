<script lang="ts">
	export let year: string;
	export let currentYear: string;
</script>

<button on:click class="cursor-pointer {currentYear == year ? "font-semibold text-white" : ""}">{year}</button>