<script lang="ts">
	export let href: string;
	export let title: string;
	export let style: string;
</script>

<a {href} {title} target="_blank" class="w-5 cursor-pointer fill-violet-300 transition-colors {style}">
	<slot />
</a>
