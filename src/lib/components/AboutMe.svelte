<script>
	import { browser } from "$app/environment";

	if (browser && window) {
		
	}

	function readFile() {
		// console.log('sdf');
if (window && browser ) {
	     window?.open('TungDeveloperResume.pdf', '_blank') //to open in new tab
}
   }
</script>

<div class="flex justify-center space-x-4 w-2/3 p-4 my-24" id="about">
	<div class="w-1/2">
		<div class=" text-5xl font-1 text-white text-shadow mb-18">About Me</div>

		<div class="font-2 text-white">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatum nostrum aperiam.
			Ullam aliquid mollitia cumque rerum temporibus facere modi in tenetur, sit magnam, consectetur
			nobis placeat provident iure dolore. Fuga consectetur sed temporibus impedit, alias illum
			atque unde quae porro dolorum ipsum nisi pariatur incidunt veritatis eligendi maxime corporis
			reiciendis itaque ea illo nam, adipisci quasi voluptas tempore? Eius aliquid alias quam.
			Quasi, commodi ex saepe sapiente ipsa quae labore veritatis facere voluptate possimus. Iure
			quam quia reiciendis, at iste exercitationem dolorum maiores repellendus enim voluptates sunt
			veritatis omnis, deleniti mollitia eos. Libero esse inventore consequuntur? Assumenda, minima
			explicabo.
		</div>
	</div>
	<div class="w-1/2 flex items-center justify-center">
		<img
			src="TungPortrait.jpg"
			alt=""
			class="w-auto h-96 object-cover rounded shadow-2xl shadow-indigo-500/30"
		/>
	</div>
</div>
<button  class="p-4 bg-indigo-500 rounded-md shadow-xl shadow-indigo-500/40 font-2  text-sm text-white hover:bg-indigo-400 transition-all duration-300" on:click={readFile}>Check Out My Resume</button>

<style lang="scss">
	.component {
		@apply p-1;
	}
</style>
