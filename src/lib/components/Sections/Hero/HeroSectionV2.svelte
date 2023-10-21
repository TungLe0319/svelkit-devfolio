<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import SetupAnimation from '$lib/components/SetupAnimation.svelte';
	import { videoSource } from '$lib/stores/landingPage';
  
  let rotateDeg = 0; // Initial rotation degree

  function setRotateDegWithDelay(deg) {
    setTimeout(() => {
      rotateDeg = deg;
    }, 150);
  }

  $: {
    switch ($page.route.id) {
      case '/':
        setRotateDegWithDelay(0);
        break;
      case '/about':
        setRotateDegWithDelay(180);
        break;
      case '/portfolio':
        setRotateDegWithDelay(0);
        break;
      case '/contact':
        setRotateDegWithDelay(180);
        break;
      default:
        setRotateDegWithDelay(0);
        break;
    }
  }
</script>

<div class=" relative flex flex-col justify-center items-center">
	<div class="video-container position-absolute d-flex justify-content-center">
		<video
			id="myVideo"
			src={$videoSource}
		
			loop
			muted
			autoplay
			class="object-fit"
      style="transform: rotate({rotateDeg}deg); "
		/>
	</div>
	<div class="absolute dark:text-white">
	<slot>
    
  </slot>
	</div>
</div>

<style lang="scss" scoped>
	video {
		object-fit: cover !important;
		width: 100%;
		height: 100%;
		filter: brightness(60%);
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
</style>
