<script lang="ts">
	import EducationSection from '$lib/components/EducationSection.svelte';
	import VideoHeroImage from '$lib/components/VideoHeroImage.svelte';
	import Project from '$lib/components/Project.svelte';
	import SkillsSection from '$lib/components/SkillsSection.svelte';
	import Typewriter from 'svelte-typewriter';
	import Footer from '$lib/components/Footer.svelte';


	export let data;
	const projects = data.projects 
	const skills = data.skillsIcons
</script>

<VideoHeroImage>
	<div class="flex justify-center items-center flex-col relative">
		<div
			class="justify-center items-center flex flex-col mt-10 text-white dark:text-indigo-500 w-1/2 h-screen"
		>
			<div class=" font-1 ">
				<!-- <div class="">
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
				</div> -->

					<div class="p-4  rounded" >
						<p class="font-2 mb-2 text-2xl">Hi, my name is</p>
						<p class="text-6xl font-1 text-indigo-400 my-6 text-shadow">Tung Le.</p>

					
							<p class="font-2 my-2 text-2xl">
							I'm a software developer with expertise in crafting exceptional UI/UX designs
							and creating immersive digital experiences. My current focus is on expanding my
							knowledge by mastering innovative frameworks like Svelte and Nuxt, allowing me to
							build cutting-edge, accessible, and beautifully styled webpages and applications.
						</p>
						
						<p class="text-6xl font-1 text-end text-indigo-400 text-shadow">Open to work.</p>
					</div>


					
			</div>
			
		</div>

		<div class=" relative lg:flex lg:flex-col justify-center items-center lg:px-16 space-x-3 px-5 text-white">
			<!-- <div class="lg:w-1/2 p-10">
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
			</div> -->


			
					<div class=" flex justify-center items-center mb-24 ">
						<SkillsSection {skills} />
					</div>
	
			<div class="lg:w-1/2 flex flex-col items-center just-center lg:p-5">
				<EducationSection />

				<div class="text-4xl text-white font-1 text-shadow my-10">Projects</div>
				{#each projects as project, index (project.title)}
					<Project {project} />
				{/each}
			</div>
		</div>

		<Footer />
	</div>
</VideoHeroImage>

<!-- <ParallaxProjects/> -->

<style lang="scss">
</style>
