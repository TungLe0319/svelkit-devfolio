<script lang="ts">
	import { browser } from '$app/environment';
	import { contactIsInView } from '$lib/stores/Appstate';
	import { SpeedDial, SpeedDialButton } from 'flowbite-svelte';
	import { GithubSolid, LinkedinSolid, EnvelopeSolid } from 'flowbite-svelte-icons';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	const buttonData = [
		{ name: 'About', id: 'about' },
		{ name: 'Skills', id: 'skills' },
		{ name: 'Experience', id: 'experience' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'Contact', id: 'contact' }
	];
	const sections = ['about', 'skills', 'experience', 'projects', 'contact'];

let visible:boolean = false

onMount(()=>{
	visible = true
})

	let activeSection = ''; // Variable to track the active section
	function scrollToSection(sectionId: string) {
		const section = document.getElementById(sectionId);
		if (section) {
			activeSection = sectionId;
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
	if (browser) {
		// Create an Intersection Observer to determine which section is in view
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeSection = entry.target.id; // Set the active section
					// console.log(activeSection);

					if (activeSection === 'contact') {
						$contactIsInView = true;
					} else {
						$contactIsInView = false;
					}
				}
			});
		});

		// Observe the sections

		sections.forEach((sectionId) => {
			const section = document.getElementById(sectionId);
			if (section) {
				observer.observe(section);
			}
		});
	}
</script>

<div class="hidden  lg:block  fixed text-center bottom-12 right-0 h-fit w-30 space-y-4">
	{#each buttonData as item,index}
	{#if visible}
		<button
		in:fly={{ x: 200, duration: 300, delay: (300 + 200 * index) }} out:fade={{ delay: 150, duration: 150 }} 
			class="button group text-shadow {activeSection === item.id ? 'active' : 'opacity-80'}"
			on:click={() => scrollToSection(item.id)}
		>
			<span class="font-1 side-text">{item.name}</span>
			<span class="side-line {activeSection === item.id ? 'active-line' : ''}" />
			<span class="absolute -right-5">🥐</span>
		</button>
		{/if}
	{/each}

	
</div>
<SpeedDial   color="light" defaultClass="fixed bottom-6 right-6   lg:hidden">
	
		<SpeedDialButton name="Github" >
		<a href="https://github.com/TungLe0319" target="_blank">
				<GithubSolid class="w-10 h-10" />
		</a>
		</SpeedDialButton>
		<SpeedDialButton name="LinkedIn">
		<a href="https://www.linkedin.com/in/tung-le0319/" target="_blank">
				<LinkedinSolid class="w-8 h-8" />
		</a>
		</SpeedDialButton>
		<SpeedDialButton name="Github">
		<a href="mailto:tung.le0319@gmail.com" target="_blank">
				<EnvelopeSolid class="w-9 h-9" />
		</a>
		</SpeedDialButton>
		
	
	</SpeedDial>

<style lang="scss">
	.button {
		@apply flex space-x-4 items-center justify-between w-full  text-white dark:text-indigo-300 hover:text-indigo-400 dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-x-1;
	}
	.side-line {
		@apply w-8 h-0.5 bg-white group-hover:bg-indigo-400  transition-all duration-300;
	}
	.side-text {
		@apply text-sm;
	}

	.active {
		@apply text-indigo-400 -translate-x-6;
	}
	.active-line {
		@apply bg-indigo-400;
	}
</style>
