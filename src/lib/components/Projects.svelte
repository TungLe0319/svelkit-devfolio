<script lang="ts">
	import type { ProjectList } from '$lib/models/models';
	import ProjectCard from './Project.svelte';

	export let projects: ProjectList;
</script>

<div class="lg:w-2/3 flex flex-col items-center just-center lg:p-5" id="projects">
	<div class="text-5xl font-1 text-white my-24 text-shadow">Projects</div>
	{#each projects as project, index (project.title)}
		<ProjectCard {project} />
	{/each}
</div>

<style lang="scss">
</style>
