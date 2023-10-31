<script lang="ts">
	import { browser } from '$app/environment';
	import HeroSectionV2 from '$lib/components/VideoHeroImage.svelte';
	import { onMount } from 'svelte';
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import Project from '$lib/components/Project.svelte';
	import { writable } from 'svelte/store';
	let parallax: Parallax;
	let disabled = false;
	let fancy = 'Projects'.split('');
	import { projects } from '$lib/stores/projects';
	onMount(() => {
		// parallax.scrollTo(3, { selector: '.bottom-btn', duration: 5000 });
	});

</script>

{#if browser}
	<Parallax sections={3} bind:this={parallax} {disabled} class="bg-zinc-800">
		{#each fancy as char, index (index)}
			<ParallaxLayer
				rate={(index + 1) / (fancy.length - 1)}
				offset={1}
				style="
			  margin-left: {38 + index * 5}%; 
				display: flex; 
				justify-content: flex-start; 
				align-items: center;
      
		  "
			>
				<p class=" text-white text-9xl font-1">
					{char}
				</p>
			</ParallaxLayer>
		{/each}

		<ParallaxLayer offset={1} rate={-2.5} style="display: flex; justify-content: flex-end;">
			<div
				style="opacity: 0.5; width: 50%; height: 100%;"
				class="bg-gradient-to-r from-orange-500"
			/>
		</ParallaxLayer>

		<ParallaxLayer offset={1} rate={2.5} style="display: flex; justify-content: flex-start;">
			<div
				style="opacity: 0.5; width: 50%; height: 100%;"
				class="bg-gradient-to-l from-indigo-500"
			/>
		</ParallaxLayer>
		<!-- 
		<ParallaxLayer
			rate="1"
			class=""
			style="
	
			display: flex; 
			justify-content: center; 
			align-items: center; 
			flex-direction: column;
		"
		>
			<h1>Svelte Parallax</h1>
			<button
				class="bottom-btn"
				on:click={() => parallax.scrollTo(3, { selector: '.top-btn', duration: 4000 })}
			>
				Click me!
			</button>
		</ParallaxLayer> -->

		<ParallaxLayer
			offset="2"
			rate="2"
			class="flex justify-center items-center"
			style="

		"
		>
			<div class=" px-16  flex flex-col space-y-4">
				{#if projects}
					{#each $projects as project, index}
						<Project {project} />
					{/each}
				{:else}
					<p>loading...</p>
				{/if}
			</div>
<!-- 
			<button
				class="top-btn"
				on:click={() => parallax.scrollTo(1, { selector: '.bottom-btn', duration: 1000 })}
			>
				Scroll to top
			</button> -->
		</ParallaxLayer>

	</Parallax>
{/if}

<style>
	h1 {
		font-size: 2rem;
	}

	button {
		font-size: 1rem;
		cursor: pointer;
	}

	button:focus {
		outline: 4px dashed #ff5c77;
	}

	.disable {
		position: fixed;
		top: 1rem;
		left: 1rem;
		z-index: 10;
	}
</style>
