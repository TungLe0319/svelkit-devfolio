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


<VideoHeroImage>
	<div class="flex justify-center items-center flex-col relative">
		<!-- <div
			class="justify-center items-center flex flex-col  text-white dark:text-indigo-500 w-1/2 h-screen"
		>
			<div class=" font-1">
				<div class="">
					<Typewriter mode="cascade" interval={100}>
						<p class="text-start text-3xl text-shadow">Creative</p>
					</Typewriter>

					<Typewriter mode="cascade" interval={200} delay={1000}>
						<p class=" text-7xl mb-0 text-shadow">Design</p>
					</Typewriter>
					<div class="flex justify-center my-5">
						<Typewriter mode="cascade" interval={400} delay={1500}>
							<b class=" text-7xl text-center text-shadow text-indigo-400 my-3">&</b>
						</Typewriter>
					</div>
					<div class=" flex flex-col items-end">
						<Typewriter mode="cascade" interval={100} delay={2500}>
							<p class="text-start text-3xl text-shadow">Collaborative</p>
						</Typewriter>

						<Typewriter mode="cascade" interval={200} delay={3500}>
							<p class="text-7xl e mb-0 text-shadow">Developer</p>
						</Typewriter>
					</div>
				</div>

			</div>
		</div>
		
		<div
		class=" relative lg:flex lg:flex-col justify-center items-center lg:px-16 space-x-3 px-5 text-white"
		>
		<div class="lg:w-1/2 p-10">
			<div class="sticky top-24">
				<div class="p-4 bg-zinc-900 bg-opacity-80 rounded">
					<p class="font-2 mb-2">Hi, my name is</p>
					<p class="text-4xl font-1 text-indigo-400">Tung Le.</p>
					
					<p class="font-2 my-2">
							I'm a software developer with expertise in crafting exceptional UI/UX designs
							and creating immersive digital experiences. My current focus is on expanding my
							knowledge by mastering innovative frameworks like Svelte and Nuxt, allowing me to
							build cutting-edge, accessible, and beautifully styled webpages and applications.
						</p>
						<p class="text-4xl font-1 text-end text-indigo-400">Open to work.</p>
					</div>
					
				</div>
			</div>
			
			
		</div> -->
		<Intro />
	</div>
</VideoHeroImage>

<div class="bg-zinc-900 w-full flex flex-col items-center justify-center">
	<!-- <section id="about"></section>
	<section id="skills"></section>
	<section id="experience"></section>
	<section id="projects"></section> -->
	<AboutMe />
	<SkillsSection {skills} />
	<Experience />
	<Projects {projects} />
	<Contact />
	<Footer />
	<CursorGlow {x} {y} />
</div>

<!-- <ParallaxProjects/> -->

<style lang="scss">
	
</style>
