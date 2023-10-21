<script>
	import { writable } from 'svelte/store';

	import { setContext, onMount } from 'svelte';
	let y = 0;

	$: {
		y;
		if (y) {
		}
	}
</script>

<div class="hero-image w-full flex flex-col dark:text-white justify-center items-center">
	<section class="locomotive-section" style="transform: translateY(-{y}px) ">
		<div class="row justify-content-between w-100">
			<div id="heroText2" class="col-md-6 hero-text-2 mt-5">
				<p class="text-start text-4xl ms-5 font-1 text-shadow">creative</p>
				<p class="font-1 display-7 mb-0 text-shadow">
					Designer <b class="display-6 text-warning">&</b>
				</p>
				<p class="font-1 display-7 text-shadow">Developer</p>
			</div>
			<div id="heroText" class="col-md-6 text-end text-light">
				<p class="display-6 font-1 mb-0 text-shadow">Willing To Learn</p>
				<p class="display-1 font-1 mb-0 text-shadow">Anything</p>
				<p class="font-1 display-1 mb-0 text-shadow">Anytime</p>
				<p class="font-1 display-1 text-shadow">Anywhere</p>
			</div>
		</div>
	</section>
</div>
<svelte:window bind:scrollY={y} />

<style lang="scss">

	.hero-text-2 {
		transition: all 0.25s ease-out;
	}

	.display-7 {
		font-size: 10rem;
		//when screen is 768px OR LESS
		@media only screen and (max-width: 768px) {
			font-size: 6rem;
		}
	}

	.hero-image {
		height: 100vh;
		/* always scale the image to the appropriate size of your screen */
		background-size: cover;
		
		// background-image: url('https://images.unsplash.com/photo-1697451446465-c1dba554aa44?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
		background-position: center;
		/* keeps the image fixed while scrolling , neat effect. */
		background-attachment: fixed;
	}
</style>
