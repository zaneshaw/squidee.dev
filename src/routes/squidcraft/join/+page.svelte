<div class="flex flex-col gap-4">
	<div>
		<h2>SquidCraft M - Apply to Join</h2>
		<p>(If I know you, you're probably going to instantly be whitelisted.)</p>
		<p class="text-red-400">* Indicates required</p>
	</div>
	<form
		name="join"
		data-netlify="true"
		action="/squidcraft/join/success"
		class="mx-auto flex w-fit flex-col items-center gap-2"
	>
		<input type="text" name="name" placeholder="Name (optional)" />
		<div class="relative">
			<input type="text" name="ign" placeholder="Minecraft JE IGN" required /><span
				class="absolute -right-3 top-0 text-red-400">*</span
			>
		</div>
		<span></span>
		<button type="submit" class="btn w-full">Join</button>
	</form>
</div>

<style lang="postcss">
	input {
		@apply rounded-lg px-4 py-2 outline-0 ring-2 ring-violet-300 focus:ring-violet-500;
	}
</style>
