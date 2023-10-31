<script lang="ts">
	import type { TechList } from '$lib/models/models';
	import { Tooltip } from 'flowbite-svelte';

	export let skills: TechList;
</script>

<div class="flex flex-col w-1/2 justify-center items-center mb-24" id="skills">
	<div class=" text-5xl font-1 text-white mb-24 text-shadow">Skills</div>
	<div class=" ">
		<div class="flex flex-wrap gap-1 justify-center items-center">
			{#each skills as icon, index}
				<div class="hover:bg-indigo-500/60 transition-all duration-300 p-2 rounded-full">
					<img src={icon.src} class="lg:w-16 lg:h-16 h-8 w-8" alt="Icon" />
					<Tooltip color="indigo">
						<p>{icon.title}</p>
					</Tooltip>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
</style>
