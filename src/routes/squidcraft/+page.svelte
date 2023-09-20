<script>
	import DownloadPackCard from "$lib/components/SquidCraft/DownloadPackCard.svelte";
	import FrontPageSection from "$lib/components/SquidCraft/FrontPageSection.svelte";
</script>

<div class="flex flex-col gap-8">
	<div>
		<h2>SquidCraft M</h2>
		<p>
			This is the official portal for <em>SquidCraft M</em> <a href="#modpacks" class="link">downloads</a> and info. Try
			<a href="#join" class="link">joining the server</a>
			or view the <a href="#modlist" class="link">list of mods</a>.
		</p>
	</div>
	<FrontPageSection id="join" header="Join">
		<p class="mb-4">Please only submit a whitelist application if you know <em>Zane</em>/<em>squidee</em>!</p>
		<button class="btn w-fit">Request to Join</button>
	</FrontPageSection>
	<FrontPageSection id="modpacks" header="Modpacks">
		<p class="mb-4">Download curated modpacks for the server here!</p>
		<div class="flex justify-center gap-20">
			<DownloadPackCard
				packName="Core Pack"
				packDesc="Mod pack for the SquidCraft M server. This is <em>required</em>."
				packImage="/icon_core.png"
				packImageHover="/icon_core_hover.png"
			/>
			<DownloadPackCard
				packName="Optimisation Pack"
				packDesc="Optional optimisation pack if you're having performance issues."
				packImage="/icon_opti.png"
				packImageHover="/icon_opti_hover.png"
				outline
			/>
		</div>
	</FrontPageSection>
	<FrontPageSection id="modlist" header="Mod List">
		<p class="mb-4">List of mods currently in the modpack and installed on the server.</p>
		<div class="relative flex h-56 items-center justify-center">
			<div class="h-full w-full animate-pulse rounded-lg bg-violet-200"></div>
			<span class="absolute font-semibold text-violet-500">Coming soon™</span>
		</div>
	</FrontPageSection>
</div>
