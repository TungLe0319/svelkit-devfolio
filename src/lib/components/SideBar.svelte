<script>
	import { page } from '$app/stores';
	import {} from '../assets/images/GithubPreview.png';
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
		NavHamburger,
		Tooltip,
		Popover,
		Button
	} from 'flowbite-svelte';
	import {
		DotsHorizontalOutline,
		EnvelopeSolid,
		GithubSolid,
		GlobeOutline,
		HeartSolid,
		LinkedinSolid,
		ThumbsUpSolid
	} from 'flowbite-svelte-icons';
</script>

<!-- <div class=" relative h-0">
	<div
		id="navi"
		class="ml-3 h-1/3 w-20 transition-transform duration-300 fixed bottom-0 space-y-4 flex-col flex z-50 left-0 bg-blue-100"
	>
		<div class="  w-72  bg-blue-200 rotate-90 flex items-center justify-center mb-10">Tung.le0319@gmail.com</div>

		<a href="https://github.com/TungLe0319" target="_blank">
			<GithubSolid
				class="w-12 h-12 dark:text-indigo-300 hover:text-white dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-2"
			/>
		</a>
		<a href="https://www.linkedin.com/in/tung-le0319/" target="_blank">
			<LinkedinSolid
				class=" w-12 h-12 dark:text-indigo-300 hover:text-white dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-2"
			/>
		</a>
	</div>
</div> -->

<div class="text-center fixed bottom-0 left-0 h-1/3 w-20">
	<div class="flex flex-col  items-start ml-4">
		<!-- <div class="rotate-90 text-center flex items-center justify-center mx-5">
			<a
				href="mailto:tung.le0319@gmail.com"
				target="_blank"
				class="  text-2xl text-white dark:text-indigo-600 text-shadow hover:text-indigo-400 transition-all duration-300 ease-in-out hover:-translate-x-1"
			>
				<p>Tung.le0319@gmail.com</p>
			</a>
		</div> -->
		<div class=" mt-16 space-y-8 flex flex-col justify-center items-center">
			<a href="https://github.com/TungLe0319" target="_blank">
				<EnvelopeSolid
					class="w-8 h-8 text-white dark:text-indigo-300 hover:text-indigo-400 dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-1"
				/>
			</a>
			<a href="https://github.com/TungLe0319" target="_blank">
				<GithubSolid
					class="w-8 h-8 text-white dark:text-indigo-300 hover:text-indigo-400 dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-1"
				/>
					<Popover placement="top-end" class="w-96  text-sm bg-gray-900 border-none">
				<div class="flex">
					<div>
						<a href="https://github.com/TungLe0319" target="_blank">
							<img src="src/lib/assets/images/GithubSS.png" alt="" />
						</a>
					</div>
				</div>
			</Popover>
			</a>
		

			<a href="https://www.linkedin.com/in/tung-le0319/" target="_blank">
				<LinkedinSolid
					class=" w-8 h-8 text-white dark:text-indigo-300 hover:text-indigo-400 dark:hover:text-gray-300 transition-all  duration-300 ease-in-out hover:-translate-y-1"
				/>
					<Popover placement="top-end" class="w-96  text-sm bg-gray-100 border-none">
				<div class="flex">
					<div>
						<a href="https://www.linkedin.com/in/tung-le0319/" target="_blank">
							<img src="src/lib/assets/images/LinkedInSS.png" alt="" />
						</a>
					</div>
				</div>
			</Popover>
			</a>
		
		</div>
	</div>
</div>

<style lang="scss" scoped>
	.icons {
		font-size: 10rem !important;
	}

	.email {
		transition: all 0.5s ease-out;
	}
	.email:hover {
		transform: translateX(-30px);

		transition: all 0.5s ease-out;
	}
	.email-icon:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0px auto;
		background-color: #fff;
	}
	.linkedIn-icon:after {
		content: '';
		display: block;
		width: 1px;
		height: 90px;
		margin: 0px auto;
		background-color: #fff;
	}
	i {
		transition: all 0.5s ease-out;
	}
	i:hover {
		transform: translateY(-5px);
		color: turquoise !important;
	}

	.image {
		width: 2000px;
		height: 400px;
	}
</style>
