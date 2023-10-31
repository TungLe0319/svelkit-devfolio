<script lang="ts">
	import type { ProjectItem } from '$lib/models/models';
	import {  Tooltip } from 'flowbite-svelte';

	export let project:ProjectItem
</script>

{#if project}
	<a href={project.link} target="_blank">
		<div
			class="  group lg:flex space-x-8 card hover:bg-opacity-100 bg-zinc-950 bg-opacity-50 hover:bg-indigo-500/30 hover:border-indigo-400 hover:border my-3 lg:p-0 rounded-md outline-none transition-all duration-100"
		>
			<div
				class=" lg:w-1/3 hover:brightness-75 transition-all duration-150 group-hover:-translate-y-2"
			>
				<img
					src={project.src}
					class=" shadow-lg shadow-zinc-800 hover:outline outline-indigo-400 h-auto transition-all duration-150 hover:shadow-xl hover:cursor-pointer rounded"
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

<style scoped>
	.card {
		transition: all 0.25s ease;
	}
	.card:hover {
		transition: all 0.25s ease;
		backdrop-filter: blur(8px);
	}

	.title {
		@apply transition-all duration-300;
	}
	.card:hover .title {
		@apply transition-all  duration-300 text-indigo-400;
	}
</style>
