<script lang="ts">
	import type {  TechList } from '$lib/models/models';
	import { Tooltip } from 'flowbite-svelte';


	export let skills: TechList;
</script>

<div class=" pt-8 w-full -z-10">
	<div class="flex flex-wrap gap-1 justify-center items-center">
		{#each skills as icon, index}
			<div class="hover:bg-indigo-500/60 transition-all duration-300 p-2 rounded-full">
				<img src={icon.src} class="lg:w-12 lg:h-12 h-8 w-8" alt="Icon" />
				<Tooltip color="indigo">
					<p>{icon.title}</p>
				</Tooltip>
			</div>
		{/each}
	</div>
</div>

<style>

</style>
