<script lang="ts">
	import { fly } from 'svelte/transition';
</script>


<div class="flex flex-col justify-center items-center mb-4">


<div
	class="  mt-20 flex flex-col lg:flex-row justify-center items-center font-1 text-sm text-white text-shadow"
>
	Designed & Developed by
	<a
		href="https://github.com/TungLe0319/svelkit-devfolio"
		class="  text-indigo-500 transition-all duration-300 mx-1.5 my-2"
		target="_blank"
		>Tung Le
	</a>
	2023 🤘🏻 Built with
	<a
		href="https://kit.svelte.dev/"
		class="  text-orange-500 transition-all duration-300 mx-1.5 my-2"
		target="_blank"
		>Sveltekit
	</a>
	&
	<a
		href="https://tailwindcss.com/"
		class="  text-teal-400 transition-all duration-300 mx-1.5"
		target="_blank"
		>Tailwind
	</a>


	
</div>


		<a 	in:fly={{ x: -200, duration: 300, delay: 300 + 150 }} href="https://tung.devopportunities.dev/#/" class="font-2 p-2   font-bold text-indigo-500 text-shadow" target="_blank">
					Check Out my First Portfolio
				</a>

</div>



<style lang="css">

	a{
		@apply hover:-translate-y-1 transition-transform 
	}
</style>