<script lang="ts">
	import ToggleTheme from '$lib/components/ToggleTheme.svelte';
	import { videoPaused } from '$lib/stores/landingPage';
	import { skillsIcons } from '$lib/stores/skills';

	import { Badge, Tooltip } from 'flowbite-svelte';
	import { LinkSolid } from 'flowbite-svelte-icons';

	import { sineIn } from 'svelte/easing';

	export let project : any

</script>

{#if project}
	<a href={project.link} target="_blank">
		<div
			class="  group flex space-x-8 card hover:bg-opacity-100 bg-zinc-950 bg-opacity-50 hover:bg-indigo-900 hover:border-indigo-400 hover:border my-3 p-8 rounded-md outline-none transition-all duration-100"
		>
			<div class=" w-1/3 hover:brightness-75 transition-all duration-150 hover:-translate-y-2">
				<img
					src={project.imageSrc}
					class=" shadow-lg shadow-zinc-800 hover:outline outline-indigo-400 h-auto transition-all duration-150 hover:shadow-xl hover:cursor-pointer rounded"
					alt="Project"
				/>
			</div>

			<div class="w-2/3 text-sm">
				<div class="flex items-center space-x-3 mb-4">
					<p class="text-lg font-1 title text-white">{project.title}</p>
				</div>
				<p class="description text-white">
					{project.description}
				</p>
				<div class=" flex flex-wrap gap-2 mt-2">
					{#each project.technologies as tech}
						<img src={tech.src} class="w-8 h-8" alt="tech" />
						<Tooltip placement="bottom" color="indigo">{tech.title}</Tooltip>
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
