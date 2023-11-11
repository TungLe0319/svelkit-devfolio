<script lang="ts">
	import { Timeline, TimelineItem, Button, Badge } from 'flowbite-svelte';
	import SectionHeader from './SectionHeader.svelte';
	import type { ExperienceList } from '$lib/models/models';

	export let experience: ExperienceList;

	const sectionHeader = {
		title: 'Experience',
		subtitle: `What I've done`
	};
</script>

<div class=" flex flex-col items-center just-center w-2/3" id="experience">
	<SectionHeader {sectionHeader} />
	<Timeline classTime="text-white">
		{#each experience as data}
			<TimelineItem>
				<p class="text-sm text-white">{data.date}</p>
				<div class="flex items-center space-x-2 text-indigo-400">
					<p class="text-indigo-400 font-1 text-xl my-2 text-shadow">{data.title}</p>
				</div>
				<p class="mb-4 font-normal text-white text-sm dark:text-gray-400">
					{data.description}
				</p>

				<div class="flex flex-wrap gap-2">
					{#each data.tech as tech}
						<Badge
							large
							border
							color="indigo"
							class="hover:-translate-y-2 transition-all duration-300 cursor-pointer text-xs "
							>{tech}</Badge
						>
					{/each}
				</div>
			</TimelineItem>
		{/each}
	</Timeline>
</div>

<style></style>
