<script lang="ts">
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	import { Gallery } from 'flowbite-svelte';
	import Project from '$lib/components/ProjectCard.svelte';
	import HeroSectionV2 from '$lib/components/VideoHeroImage.svelte';
	import { projects } from '$lib/stores/projects';

</script>

<HeroSectionV2>
	<div
		class=" w-full flex flex-col text-white dark:text-indigo-500 h-screen overflow-y-scroll "
	>
		<div class=" font-1 mb-4 flex">
			<div class="">
				<p class="text-start text-3xl">Creative</p>

				<p class=" text-7xl mb-0">Design</p>
				<div class="flex justify-center">
					<b
						class=" text-7xl text-center "
						>&</b
					>
				</div>
				<div class=" flex flex-col items-end">
					<p class="text-start text-3xl">Collabarative</p>

					<p class="text-7xl e mb-0">Developer</p>
				</div>
			</div>
		</div>

		<div class=" ">
			<div class=" flex flex-wrap justify-center items-center">
				{#each $projects as project, index}
					<Project {project} />
				{/each}
			</div>
		</div>
	</div>
</HeroSectionV2>

<style>
	.grid-col-2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px; /* Adjust gap as needed */
	}
</style>
