<!-- Navbar.svelte -->
<script>
	import { page } from '$app/stores';

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
	import { GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';

	import {} from '../';

	let isMenuOpen = false;
	let y = 0;
	let lastScrollY = 0;
	let isNavbarHidden = false;
	let activeUrl = '';
	let activeClass =
		'text-white bg-green-700 md:bg-transparent md:text-orange-700 md:dark:text-orange-400 dark:bg-green-600 md:dark:bg-transparent';
	let nonActiveClass =
		'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent';

	$: {
		activeUrl = $page.url.pathname;
	}
</script>

<Navbar
	class=" flex  fixed w-full top-0 z-50 left-0 justify-between px-6  h-20 rounded bg-transparent   "
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
			<DarkMode btnClass=" w-6 h-6" />

	</div>
</Navbar>

<style lang="scss">
	.navbar-hidden {
		transform: translateY(-100%);
		transition: all 0.5s ease;
	}
	.link,
	.sign-out-btn {
		@apply relative flex ml-0 pl-0  transition-transform duration-200  text-2xl;

		text-decoration: none;
		font-weight: 600;
		font-family: 'Shadows Into Light', cursive;

		&:hover {
			transform: scaleX(1);
			text-decoration: none;
		}

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 0;
			width: 0;
			height: 3px;
			background-color: orange;
			transform-origin: 0 100%;
			transform: scaleX(0);
			transition: transform 0.3s, width 0.3s;
		}

		&:hover::after {
			transform: scaleX(1);
			width: 100%;
		}
	}
</style>
