<script lang="ts">
	import type { ProjectItem } from '$lib/models/models';
	import { Tooltip } from 'flowbite-svelte';

	export let project: ProjectItem;
</script>

{#if project}
	<a href={project.link} target="_blank">
		<div class="   card group">
			<div
				class=" img-container"
			>
				<img
					src={project.src}
					class=" project-img"
					alt="Project"
				/>
				<div class=" flex flex-wrap gap-2 mt-2 p-2">
					{#each project.tech as tech}
						<img src={tech.src} class="w-8 h-8" alt="tech" />
						<Tooltip placement="bottom" color="indigo">{tech.title}</Tooltip>
					{/each}
				</div>
			</div>

			<div class="lg:w-2/3 text-sm p-4 !m-0 lg:ml-32">
				<div class="flex items-center space-x-3 mb-4">
					<p class="text-lg font-1 title text-white">{project.title}</p>
				</div>
				<p class="description text-white">
					{project.description}
				</p>
			</div>
		</div>
	</a>
{/if}

<style lang="scss" scoped>
	.card {
		@apply lg:flex space-x-8  hover:bg-opacity-100 bg-zinc-950 bg-opacity-50 hover:bg-indigo-500/30 hover:border-indigo-400 hover:border my-3 lg:p-0 rounded-md outline-none transition-all duration-100;
	}
	.card:hover {
		transition: all 0.25s ease;
		backdrop-filter: blur(8px);
	}

	.img-container{
		@apply lg:w-1/3 transition-all duration-150 group-hover:-translate-y-2
	}

	.project-img{
		@apply  hover:brightness-75  shadow-lg shadow-zinc-800 hover:outline hover:outline-2  outline-white h-auto transition-all duration-300 hover:shadow-xl hover:cursor-pointer rounded
	}

	.title {
		@apply transition-all duration-300;
	}
	.card:hover .title {
		@apply transition-all  duration-300 text-indigo-400;
	}
</style>
