<script>
	import { browser } from '$app/environment';
	import { fly } from 'svelte/transition';
	// import PortfolioSection from '../../lib/components/Portfolio/PortfolioSection.svelte';
 
 import PortfolioSection from '$lib/components/Sections/Portfolio/PortfolioSection.svelte'
</script>

<main class="bg-blue-800 pt-14">
	<div class="container p-1 justify-center flex items-center">
		<PortfolioSection />
    
	</div>
</main>

<style lang="scss">
</style>
