<div class="flex flex-col gap-4">
	<div>
		<h2>SquidCraft M - Apply to Join</h2>
		<p>(If I know you, you're probably going to instantly be whitelisted.)</p>
		<p class="text-red-400">* Indicates required</p>
	</div>
	<form name="join" netlify class="flex flex-col gap-2 items-center w-fit mx-auto">
		<input type="text" name="name" placeholder="Name (optional)" />
		<div class="relative">
			<input type="text" name="ign" placeholder="Minecraft JE IGN" required /><span class="text-red-400 absolute top-0 -right-3">*</span>
		</div>
		<span></span>
		<button type="submit" class="btn ml-auto">Join</button>
	</form>

	<form name="contact" netlify>
		<p>
		  <label>Name <input type="text" name="name" /></label>
		</p>
		<p>
		  <label>Email <input type="email" name="email" /></label>
		</p>
		<p>
		  <button type="submit" class="btn">Send</button>
		</p>
	  </form>
</div>

<style lang="postcss">
	input {
		@apply rounded-lg ring-violet-300 focus:ring-violet-500 outline-0 ring-2 px-4 py-2;
	}
</style>
