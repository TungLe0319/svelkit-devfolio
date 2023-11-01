<script lang="ts">
	import type { ProjectList } from '$lib/models/models';
	import ProjectCard from './ProjectCard.svelte';

	export let projects: ProjectList;
</script>

<div class="lg:w-2/3 space-y-5 flex flex-col items-center just-center lg:p-5" id="projects">
	<div class="text-5xl font-1 text-white my-20 text-shadow">Projects</div>
	{#each projects as project, index (project.title)}
		<ProjectCard {project} />
	{/each}
</div>

<style lang="scss">
</style>
