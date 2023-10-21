
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
</script>

<div class=" relative h-0">
	<div
		id="navi"
		class="ml-3 h-1/5 w-20 transition-transform duration-300 fixed bottom-0 space-y-4 flex-col flex z-50 left-0"
	>
		<a href="https://github.com/TungLe0319" target="_blank">
			<GithubSolid class="w-12 h-12 dark:text-indigo-300 hover:text-white dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-2" />
		</a>
		<a href="https://www.linkedin.com/in/tung-le0319/" target="_blank">
			<LinkedinSolid class=" w-12 h-12 dark:text-indigo-300 hover:text-white dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-2" />
		</a>
	</div>
</div>

<style lang="scss">
	
</style>
