<script lang="ts">
	import '../app.css';

	import Sidebar from '../lib/components/SideBar.svelte';
	import { fade } from 'svelte/transition';
	import type { LayoutData } from './$types';
	import Navigation from '$lib/components/Navigation.svelte';
	import { scrollY } from '$lib/stores/Appstate';

	let y: number;
	$: {
		$scrollY = y;
	}
	export let data: LayoutData;
</script>

<div class="wrapper">
	{#key data?.pathname}
		<main class="w-full" in:fade={{ duration: 300, delay: 100 }} out:fade={{ duration: 200 }}>
			<slot />
		</main>
	{/key}
</div>
<svelte:window bind:scrollY={y} />
<Navigation />
<Sidebar />

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
