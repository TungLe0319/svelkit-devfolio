<!-- Navbar.svelte -->
<script>
	import { page } from '$app/stores';
	// @ts-ignore
	import { isDarkMode, videoSource } from '$lib/stores/landingPage.ts';
	import { SunSolid, MoonSolid } from 'flowbite-svelte-icons';

	import {
		Avatar,
		Dropdown,
		DropdownHeader,
		DropdownItem,
		DropdownDivider,
		DarkMode,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger
	} from 'flowbite-svelte';
	import { onMount } from "svelte";

	let activeUrl = '';
	let activeClass =
		'text-white bg-green-700 md:bg-transparent md:text-orange-400 md:dark:text-orange-400 dark:bg-green-600 md:dark:bg-transparent';
	let nonActiveClass =
		'!text-white hover:bg-gray-100 md:hover:bg-transparent border-0 hover:text-indigo-300 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-indigo-300 dark:hover:text-white dark:hover:bg-transparent';

	$: {
		activeUrl = $page.url.pathname;
		// const bodyEl = document.querySelector('body');
		// if (bodyEl?.classList.contains('dark:bg-gray-900')) {
		// 	$videoSource = 'src/lib/assets/animated2.mp4';
		// } else {
		// 	$videoSource = 'src/lib/assets/animated1.mp4';
		// }
	}

	const handleChange = () => {
		const bodyEl = document.querySelector('html');
		if (bodyEl?.classList.contains('dark')) {
			$videoSource = 'src/lib/assets/animated2.mp4';
		} else {
			$videoSource = 'src/lib/assets/animated1.mp4';
		}
	};
	onMount(()=>{
		handleChange()
	})
</script>

<Navbar
	class=" flex  fixed w-full top-0 z-50 left-0 justify-between px-6  h-20 rounded bg-transparent  dark:bg-transparent  "
>
	<NavBrand href="/">
		<img
			src="https://imgs.search.brave.com/YWjAuewFGspuo35AEkQ2ropTlCjZx1H73-kcak5PThM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzNo/dGt6L3N0eWxlcy9j/b21tdW5pdHlJY29u/XzVnbjQ3ZGhkcDRv/MzEucG5n"
			class="mr-3 h-6 sm:h-9"
			alt="Flowbite Logo"
		/>
	</NavBrand>
	<div class="flex items-center justify-center space-x-5 md:order-2 px-40">
		<NavUl {activeUrl} {activeClass} {nonActiveClass}>
			<NavLi class="text-lg font-3" href="/" active={true}>Landing Page</NavLi>
			<NavLi class="text-lg font-3" href="/about">About</NavLi>
			<NavLi class="text-lg font-3" href="/portfolio">Portfolio</NavLi>
			<NavLi class="text-lg font-3" href="/contact">Contact</NavLi>
		</NavUl>
		<NavHamburger class1="w-full md:flex md:w-auto md:order-1" />

		<button
			on:click={handleChange}
			class="bg-transparents hover:outline-none hover:border-none dark:hover:bg-transparent dark:hover:border"
		>
			<DarkMode
				class="hover:brightness-75  transition-all duration-150 bg-transparent hover:bg-transparent selection:bg-transparent !text-indigo-400 dark:!text-white"
			/>
		</button>
	</div>
</Navbar>

<style lang="scss">
	.navbar-hidden {
		transform: translateY(-100%);
		transition: all 0.5s ease;
	}
</style>
