<script>
	import { contactIsInView } from '$lib/stores/Appstate';
	import { EnvelopeSolid, GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
	import { fade } from 'svelte/transition';
</script>

<div class="contact-container" id="contact">
	<div class=" text-5xl font-1 text-shadow text-white my-24">Get In Touch</div>
	<div class=" text-2xl font-2 text-white">
		I am Currently Open to Work and if you would like to get in touch with me , connect with me on
		LinkedIn or Send me an email!
	</div>

	{#if $contactIsInView}
		<div
			transition:fade={{ delay: 250, duration: 300 }}
			class="flex items-center justify-center my-10"
		>
			<div class="  space-x-4 group flex justify-center items-center">
				<a href="https://github.com/TungLe0319" target="_blank">
					<EnvelopeSolid
						class="w-16 h-16 text-white dark:text-indigo-300 hover:text-indigo-400 dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-1 flex justify-center items-center"
					/>
				</a>
				<a href="https://github.com/TungLe0319" target="_blank">
					<GithubSolid
						class="w-16 h-16 text-white dark:text-indigo-300 hover:text-indigo-400 dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-1"
					/>
				</a>

				<a href="https://www.linkedin.com/in/tung-le0319/" target="_blank">
					<LinkedinSolid
						class=" w-16 h-16 text-white dark:text-indigo-300 hover:text-indigo-400 dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-1"
					/>
				</a>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.contact-container {
		@apply p-5 flex flex-col justify-center items-center w-2/3;
	}
</style>
