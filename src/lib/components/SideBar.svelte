<script>
	import { onMount } from 'svelte';
	import { Popover } from 'flowbite-svelte';
	import { EnvelopeSolid, GithubSolid, LinkedinSolid } from 'flowbite-svelte-icons';
	
</script>



<div class="text-center fixed bottom-0 left-0 h-1/3 w-20">
	<div class="flex flex-col items-start ml-4">
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
								<img src="GithubSS.png" alt="" />
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
								<img src="LinkedInSS.png" alt="" />
							</a>
						</div>
					</div>
				</Popover>
			</a>
		</div>
	</div>
</div>

<style lang="scss" scoped>
	

</style>
