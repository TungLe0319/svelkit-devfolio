<script lang="ts">
	import Experience from '$lib/components/Experience.svelte';
	import VideoHeroImage from '$lib/components/VideoHeroImage.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import Typewriter from 'svelte-typewriter';
	import Footer from '$lib/components/Footer.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Intro from '$lib/components/Intro.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import CursorGlow from '$lib/components/CursorGlow.svelte';
	import { browser } from '$app/environment';
	export let data;
	const projects = data.projects;
	const skills = data.skillsIcons;
	const experience = data.experience
	let x: any = 0;
	let y: any = 0;

	$: {
		if (browser) {
			document.addEventListener('mousemove', (e) => {
				x = e.clientX + 'px';
				y = e.clientY + 'px';
			});
			// console.log(x,y);
		}
	}
</script>

<svelte:head>
	<title>Tung Le, Developer Portfolio V2!</title>
	<meta name="description" content="Explore my Developer Portfolio 2.0, meticulously crafted with SvelteKit and Tailwind CSS. Discover a showcase of my latest projects, skills, and creative endeavors in the world of web development. Dive into a seamless and responsive experience that reflects my passion for technology and innovation." />
</svelte:head>

<VideoHeroImage/>

<div class="bg-zinc-900 w-full flex flex-col items-center justify-center">
	<AboutMe />
	<SkillsSection {skills} />
	<Experience {experience} />
	<Projects {projects} />
	<Contact />
	<Footer />
	<CursorGlow {x} {y} />
</div>

<!-- <ParallaxProjects/> -->

<style lang="scss">
	
</style>
