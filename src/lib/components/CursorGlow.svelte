<!-- CursorGlow.svelte -->
<script lang="ts">
	export let x: string;
	export let y: string;
</script>



<div class=" cursor" style="transform: translate({x}, {y});" />
<div class="ring" style="transform: translate({x}, {y});" />
<div class="dot" style="transform: translate({x}, {y});" />





<style lang="scss" scoped>
	.cursor {
		position: fixed;
		inset: -250px; /* Increase the inset value to make it larger */
		width: 500px; /* Increase the width and height to make it larger */
		height: 500px;
		background: linear-gradient(
			45deg,
			rgba(124, 130, 221, 0.2),
			rgba(149, 155, 239, 0.2),
			rgba(131, 108, 250, 0.2),
			rgba(90, 85, 239, 0.2),
			rgba(115, 121, 243, 0.2)
		); /* Apply a gradient background with slight opacity */
		border-radius: 50%;
		pointer-events: none;
		transform: translate(-50%, -50%);
		transition: all 0.1s ease;
		z-index: 9999;
		filter: blur(100px); /* Add a blur effect to create blurred edges */
		box-shadow: 0 0 50px rgba(255, 255, 255, 0.5),
			/* Add a white glow */ 0 0 30px rgba(255, 165, 0, 0.7),
			/* Add an orange shadow */ 0 0 30px rgba(255, 69, 0, 0.7),
			/* Add a red shadow */ 0 0 30px rgba(139, 0, 0, 0.7),
			/* Add a dark red shadow */ 0 0 30px rgba(0, 0, 255, 0.5); /* Add a blueish tinted shadow around the edges */
	}
	.ring {
		position: fixed;
		inset: -20px; /* Increase the inset value to make it larger */
		width: 40px; /* Adjust the ring's size as needed */
		height: 40px;
 border: 9px solid white !important;
 outline: none !important;
		border-radius: 50%;
		transition: all 0.08s ease;
		pointer-events: none;
		z-index: 10000; /* Place it above the cursor */
	}

	.dot{
		position: fixed;
		inset: -4px; /* Increase the inset value to make it larger */
		width: 8px; /* Adjust the ring's size as needed */
		height:8px;
	background-color: rgba(255, 255, 255, 0.815);
		border-radius: 50%;
		transition: all 0.08s ease;
		pointer-events: none;
		z-index: 10000; /* Place it above the cursor */
	}
</style>
