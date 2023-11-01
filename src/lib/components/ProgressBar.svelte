<script setup lang="ts">
	import { browser } from '$app/environment';
	import { scrollY } from '$lib/stores/Appstate';
	// console.log($scrx/llY);
	let progressBarStyle: string;
	$: {
		$scrollY;
		if (browser) {


  let windowHeight = window.innerHeight;

  // Add a scroll event listener to update $scrollY
  window.addEventListener('scroll', () => {
    $scrollY = window.scrollY;
    let progress = ($scrollY / (document.body.scrollHeight - windowHeight)) * 100;
    progressBarStyle = `height: ${progress}%;`;
  });



		}
	}
</script>

<div class=" progress-bar" style={progressBarStyle} />

<style lang="scss">
	.progress-bar {
		@apply bg-gradient-to-b  from-indigo-500 via-teal-500  to-orange-500 w-0.5 fixed;
		z-index: 999999;
	}
</style>
