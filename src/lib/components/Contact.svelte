<script>
	import { contactIsInView } from '$lib/stores/Appstate';
	import { EnvelopeSolid, GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
	import { fly } from 'svelte/transition';
	import SectionHeader from './SectionHeader.svelte';

	const sectionHeader = {
		title: 'Contact',
		subtitle: 'Get in touch'
	};
</script>

<div class="contact-container my-24" id="contact">
	<SectionHeader {sectionHeader} />

	<div class=" text-sm lg:text-xl text-center font-2 text-white lg:w-2/3">
		I'm currently actively seeking new opportunities, so if you have any inquiries or simply want to
		connect and have a friendly chat, please feel free to reach out. My inbox is always open and
		I'll do my best to get back to you!
	</div>

	{#if $contactIsInView}
		<div
			in:fly={{ y: 200, duration: 300, delay: 300 + 800 }}
			out:fly={{ x: -200, duration: 300, delay: 300 + 150 }}
			class="flex items-center justify-center my-10 mt-20"
		>
			<div class="  space-x-8 group flex justify-center items-center">
				<a href="mailto:tung.le0319@gmail.com">
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
		<div
			in:fly={{ y: 200, duration: 300, delay: 300 + 800 }}
			out:fly={{ x: -200, duration: 300, delay: 300 + 150 }}
			class="w-60 bg-white h-0.5"
		/>
	{/if}
</div>

<style lang="scss">
	.contact-container {
		@apply p-5 flex flex-col justify-center items-center w-2/3;
	}
</style>
