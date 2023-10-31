<script lang="ts">
	import { skillsIcons } from '$lib/stores/skills';
	import { Tooltip} from 'flowbite-svelte';
		import { fade, fly, slide, scale, blur } from "svelte/transition";
	import * as eases from "svelte/easing";


</script>

<div class=" pt-8 w-full -z-10">
	<div class="flex flex-wrap gap-1 justify-center items-center">
		{#each $skillsIcons as icon, index}
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
		section {
	  display: flex;
	  flex-wrap: wrap;
	  justify-content: center;
	  gap: 2rem;
	  margin-top: 5rem;
	}

	.controls {
	  display: flex;
	  justify-content: center;
	  gap: 2rem;
	  font-family: sans-serif;
	}

	.input-group {
	  display: flex;
	  flex-direction: column;
	  align-items: baseline;
	  gap: 0.5rem;
	}

	.box {
	  width: 100px;
	  height: auto;
	  aspect-ratio: 1 / 1;
	  background: goldenrod;
	  border-radius: 10px;
	  box-shadow: 1px 3px 6px 1px lightgrey;
	}
</style>
