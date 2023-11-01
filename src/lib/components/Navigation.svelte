<script lang="ts">
	import { browser } from '$app/environment';
	import { contactIsInView } from '$lib/stores/Appstate';
	const buttonData = [
		{ name: 'About', id: 'about' },
		{ name: 'Skills', id: 'skills' },
		{ name: 'Experience', id: 'experience' },
		{ name: 'Projects', id: 'projects' },
		{ name: 'Contact', id: 'contact' }
	];
	const sections = ['about', 'skills', 'experience', 'projects', 'contact'];
	let activeSection = ''; // Variable to track the active section
	function scrollToSection(sectionId: string) {
		const section = document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	}
	if (browser) {
		// Create an Intersection Observer to determine which section is in view
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					activeSection = entry.target.id; // Set the active section
console.log(activeSection);

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

	// Observe the sections and create buttons
	// $: {
	// 	sections.forEach((section) => {
	// 		const sectionId = section.id;
	// 		const sectionName = section.name;
	// 		if (browser) {
	// 			const sectionElement = document.getElementById(sectionId);

	// 			if (sectionElement) {
	// 				observer.observe(sectionElement);
	// 			}
	// 		}
	// 	});
	// }
</script>

<div class="text-center fixed bottom-12 right-0 h-fit w-30 space-y-4">
	{#each buttonData as item}
		<button
			class="button group text-shadow {activeSection === item.id ? 'active' : ''}"
			on:click={() => scrollToSection(item.id)}
		>
			<span class="font-1 side-text">{item.name}</span>
			<span class="side-line {activeSection === item.id ? 'active-line' : ''}" />
		</button>
	{/each}
</div>

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
		@apply text-indigo-400 -translate-x-4;
	}
	.active-line {
		@apply bg-indigo-400;
	}
</style>
