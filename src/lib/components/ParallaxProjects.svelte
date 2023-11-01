<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import Project from '$lib/components/ProjectCard.svelte';

	import { videoPaused, videoSource } from '$lib/stores/Appstate';
	let parallax: Parallax;
	let disabled = false;
	let fancy = 'Projects'.split('');
	import Typewriter from 'svelte-typewriter';
	onMount(() => {
		// parallax.scrollTo(3, { selector: '.bottom-btn', duration: 5000 });
	});
</script>

{#if browser}
	<Parallax sections={5} bind:this={parallax} {disabled} class=" bg-zinc-800 relative">
		<div class="video-container fixed inset-0">
			<video
				id="myVideo"
				src={$videoSource}
				loop
				bind:paused={$videoPaused}
				muted
				autoplay
				class="object-fit"
			/>
		</div>

		{#each fancy as char, index (index)}
			<ParallaxLayer
				rate={(index + 1) / (fancy.length - 1)}
				offset={2}
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
				class="bg-gradient-to-r from-orange-500 flex justify-center items-center"
			>
				<div
					class="justify-center items-center flex flex-col mt-10 text-white dark:text-indigo-500 w-1/2 h-screen"
				>
					<div class=" font-1 mb-16 z-50">
						<div class=" flex flex-col items-end">
							<p class="text-start text-3xl text-shadow">Collaborative</p>

							<p class="text-7xl e mb-0 text-shadow">Developer</p>
						</div>
					</div>
				</div>
			</div>
		</ParallaxLayer>

		<ParallaxLayer offset={1} rate={2.5} style="display: flex; justify-content: flex-start;">
			<div
				style="opacity: 0.5; width: 50%; height: 100%;"
				class="bg-gradient-to-l from-indigo-500 flex justify-center items-center"
			>
				<div
					class=" justify-center items-center flex flex-col mt-10 text-white dark:text-indigo-500 w-1/2 h-screen"
				>
					<div class=" font-1 mb-16 z-50">
						<div class="">
							<p class="text-start text-3xl text-shadow">Creative</p>

							<p class=" text-7xl mb-0 text-shadow">Design</p>
						</div>
					</div>
				</div>
			</div>
		</ParallaxLayer>

		<ParallaxLayer
			offset={3}
			rate={1}
			class="flex justify-center items-center "
			style="

		"
		>
			<div class=" px-16 flex flex-col space-y-4">
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
	video {
		object-fit: cover !important;
		width: 100%;
		height: 100%;
		filter: brightness(40%);
	}
	.video-container {
		height: 100vh;
		width: 100%;
	}
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
