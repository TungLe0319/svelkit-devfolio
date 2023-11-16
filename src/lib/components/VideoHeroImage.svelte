<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import { videoPaused, videoSource } from '$lib/stores/Appstate';
	import { onMount } from 'svelte';
	import Typewriter from 'svelte-typewriter';
	let y = 0;
	function handleScroll(event: any) {
		y = event.target.scrollTop;
		console.log(y);
	}
</script>

<div class=" relative flex flex-col justify-center items-center">
	<div class="video-container position-absolute d-flex justify-content-center">
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
	<div class="absolute w-full flex justify-center h-screen">
	<div
	class=" flex flex-col items-center justify-center text-white dark:text-indigo-500  h-screen"
	id="intro"
>
	<div class=" rounded flex flex-col space-y-4 w-full">
		<Typewriter interval={50}>
			<p class="font-2 mb-2 text-xl">Hi, my name is</p>
		</Typewriter>
		<Typewriter interval={100} delay={1000}>
			<p class="text-4xl lg:text-8xl font-1 font-extrabold text-indigo-400 text-shadow">Tung Le.</p>
		</Typewriter>
		<Typewriter interval={100} delay={2000}>
			<p class="text-4xl lg:text-8xl font-1 font-extrabold text-indigo-200 text-shadow">
				Software
			</p>
		</Typewriter>
		<Typewriter interval={100} delay={3500}>
			<p class="text-4xl lg:text-8xl font-1 font-extrabold text-indigo-200 text-shadow">
				Developer
			</p>
		</Typewriter>
	</div>
</div>

	</div>
</div>

<style lang="scss" scoped>
	video {
		object-fit: cover !important;
		width: 100%;
		height: 100%;
		filter: brightness(50%);
	}
	.video-container {
		height: 100vh;
		width: 100%;
	}
	.img-fluid-1 {
		height: 100vh;
		width: 100vw;
	}
	.padding1 {
		padding-top: 400px;
	}

	.pug-img {
		position: absolute;
		width: auto;

		transform: translateY(450px);
		height: 300px;
	}

	.locomotive-section {
		transition: transform 0.75s ease;
	}

	.hero-text-2 {
		transition: all 0.25s ease-out;
	}
	.hero-text {
		z-index: 9999;
	}
	.display-7 {
		font-size: 6rem;
		//when screen is 768px OR LESS
		@media only screen and (max-width: 768px) {
			font-size: 2.5rem;
		}
	}
	#heroText {
		transition: all 0.5s ease-out;
	}

	.test {
		transition: all 1.25s ease-out;
		transform: translateY(240px);
	}
	.test1 {
		transition: all 1.25s ease-out;
		transform: translateY(0px);
	}
	#hero {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		padding: 0;
		margin: 0;
		z-index: 0;
	}
	#heroVideo {
		width: 100%;
		object-fit: cover;
	}
	.hero-image {
		height: 100vh;
		/* always scale the image to the appropriate size of your screen */
		background-size: cover;

		background-position: center;
		/* keeps the image fixed while scrolling , neat effect. */
		background-attachment: fixed;
	}



	.video-container::before {
  @apply  bg-gradient-to-b from-transparent to-zinc-900;
  content: "";
  position: absolute;
  bottom: 0;
  z-index: 1;
  left: 0;
  width: 100%;
	
  height: 400px; /* adjust height as per your need */

}
</style>
