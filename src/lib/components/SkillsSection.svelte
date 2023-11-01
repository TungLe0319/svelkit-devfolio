<script lang="ts">
	import type { TechList } from '$lib/models/models';
	import { Tooltip } from 'flowbite-svelte';
	import SectionHeader from './SectionHeader.svelte';

	export let skills: TechList;
		const sectionHeader = {
		title: 'Skills',
		subtitle: `What  I've worked with`
	};
</script>

<div class="flex flex-col lg:w-1/2 justify-center items-center h-screen my-24" id="skills">
<SectionHeader {sectionHeader} />
	<div class=" ">
		<div class="flex flex-wrap gap-1 justify-center items-center">
			{#each skills as icon, index}
				<div class="hover:bg-indigo-500/60 transition-all duration-300 p-2 rounded-full">
					<img src={icon.src} class="lg:w-24 lg:h-24 h-16 w-16 " alt="Icon"  />
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
