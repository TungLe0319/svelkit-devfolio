<script>
	import { onMount } from 'svelte';
	import { Popover } from 'flowbite-svelte';
	import { EnvelopeSolid, GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
	import { contactIsInView } from '$lib/stores/Appstate';
	import { fade } from "svelte/transition";

	
</script>

{#if !$contactIsInView}
	<div 	transition:fade={{ delay: 150, duration: 150 }} class="hidden  text-center lg:block fixed bottom-0 left-0 transition-all duration-500">
		<div class="flex flex-col items-start ml-4">
			<div class="  space-y-4 group flex justify-center items-center mt-16 flex-col">
				<a href="mailto:tung.le0319@gmail.com" target="_blank" >
					<EnvelopeSolid
						class="w-8 h-8 text-white dark:text-indigo-300 hover:text-indigo-400 dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-1 flex justify-center items-center"
					/>
				</a>
				<a href="https://github.com/TungLe0319" target="_blank">
					<GithubSolid
						class="w-8 h-8 text-white dark:text-indigo-300 hover:text-indigo-400 dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-1"
					/>
				</a>

				<a href="https://www.linkedin.com/in/tung-le0319/" target="_blank">
					<LinkedinSolid
						class=" w-8 h-8 text-white dark:text-indigo-300 hover:text-indigo-400 dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-1"
					/>
				</a>

				<div class="w-0.5 bg-white h-32" />
			</div>
		</div>
	</div>

{/if}

<style lang="scss" scoped>
</style>
