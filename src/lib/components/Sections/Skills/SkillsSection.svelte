<script lang="ts">
	import { skillsIcons } from '$lib/stores/skills';
	import { Timeline, TimelineItem, Button, Gallery, Tooltip } from 'flowbite-svelte';
	import { ArrowRightOutline, IconSolid, LinkSolid } from 'flowbite-svelte-icons';
	


</script>

<div class=" pt-8 w-full   -z-10" >
	<!-- <div class=" text-6xl font-1">Skills</div> -->
	<div class="flex flex-wrap gap-3 justify-center items-center">
		{#each $skillsIcons as icon, index}
		<a href={icon.src} target="_blank" class="hover:bg-indigo-400  transition-all duration-300 p-2 rounded-full">
			<img src={icon.src} class="w-16 h-16" alt="Icon" />
			<Tooltip color="indigo">
			<div class="flex space-x-2 items-center">
			<p>		{icon.title}</p>
				<LinkSolid size="sm"/>
			</div>
			</Tooltip>
		</a>
		{/each}
	</div>
	
	<!-- <Gallery items={skillsIcons} class="gap-4 grid-cols-2  md:grid-cols-12" /> -->
</div>


<style></style>
