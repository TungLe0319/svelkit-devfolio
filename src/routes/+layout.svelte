<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
	import Footer from '../lib/components/SideBar.svelte';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	/** @type {import('./$types').LayoutData} */
	export let data;
</script>

<Navbar />
<div class="wrapper">
	{#key data?.pathname}
		<main class="w-full" in:fade={{ duration: 200, delay: 100 }} out:fade={{ duration: 200 }}>
			<slot />
		</main>
	{/key}
</div>

<Footer />

<svelte:window
	on:sveltekit:navigation-start={() => {
		console.log('Navigation started!');
	}}
	on:sveltekit:navigation-end={() => {
		console.log('Navigation ended!');
	}}
/>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.background {
		background: rgb(255, 255, 255);
		background: linear-gradient(
			0deg,
			rgba(255, 255, 255, 1) 86%,
			rgba(164, 191, 196, 0.3617822128851541) 100%
		);
	}
</style>
