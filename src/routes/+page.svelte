<script>
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';

	import PortfolioSection from '$lib/components/Sections/Portfolio/PortfolioSection.svelte';
	import AboutSection from '$lib/components/Sections/About/AboutSection.svelte'
	import EducationSection from '$lib/components/Sections/Education/EducationSection.svelte'
	import SkillsSection from '$lib/components/Sections/Skills/SkillsSection.svelte'
</script>

<main class=" pt-14 flex justify-center items-center px-6">
	<div class="p-1 justify-center flex flex-col items-center">
		<AboutSection/>
		<EducationSection/>
		<SkillsSection/>
		<PortfolioSection />
	</div>
</main>

<style lang="scss">
</style>
