<script lang="ts">
	import type { ProjectList } from '$lib/models/models';
	import ProjectCard from './ProjectCard.svelte';
	import SectionHeader from './SectionHeader.svelte';

	export let projects: ProjectList;
	const sectionHeader = {
		title: 'Projects',
		subtitle: `What I've built`
	};
</script>

<div class="lg:w-2/3 space-y-5 flex flex-col items-center just-center lg:p-5 my-24" id="projects">
	<SectionHeader {sectionHeader} />

	{#each projects as project, index (project.title)}
		<ProjectCard {project} />
	{/each}
</div>

<style lang="scss">
</style>
