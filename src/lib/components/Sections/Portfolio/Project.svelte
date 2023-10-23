<script lang="ts">


	import { Badge } from 'flowbite-svelte';

	import { sineIn } from 'svelte/easing';
	interface Project {
		title: string;
		imageSrc: string;
		description: string;
		technologies: string[];
		link: string;
	}
	export let project: Project | null;

	

</script>

{#if project}
	<a href={project.link}>
		<div
			class="  group flex space-x-8 card hover:bg-opacity-100 bg-zinc-950 bg-opacity-50 hover:bg-zinc-900 hover:border-indigo-400 hover:border my-3 p-8 rounded-md outline-none"
		>
			<div class=" w-1/3 hover:brightness-75 transition-all duration-150 hover:-translate-y-2">
				<img
					src={project.imageSrc}
					class=" shadow-lg shadow-zinc-700 hover:outline outline-gray-500 h-auto transition-all duration-150 hover:shadow-xl hover:cursor-pointer rounded"
					alt="Project"
				/>
			</div>

			<div class="w-2/3 text-sm">
				<div class="flex items-center space-x-3 mb-4">
					<p class="text-base font-1 title text-white">{project.title}</p>
				</div>
				<p class="description text-white">
					{project.description}
				</p>
				<div class=" flex flex-wrap gap-2 mt-2">
					{#each project.technologies as tech}
						<Badge large color="indigo">
							{tech}
						</Badge>
					{/each}
				</div>
			</div>
		</div>
	</a>
{/if}

<style>
	.card {
		transition: all 0.25s ease;
	}
	.card:hover {
		transition: all 0.25s ease;
	}

	.title {
		@apply transition-all duration-300;
	}
	.card:hover .title {
		@apply transition-all  duration-300 text-indigo-400;
	}
</style>
