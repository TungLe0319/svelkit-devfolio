<script lang="ts">
	import { fly } from 'svelte/transition';

	import { Drawer, Button, CloseButton, Badge } from 'flowbite-svelte';
	import { InfoCircleSolid, ArrowRightOutline } from 'flowbite-svelte-icons';
	import { sineIn } from 'svelte/easing';
	interface Project {
		title: string;
		imageSrc: string;
		description: string;
		technologies: string[];
		link: string;
	}
	export let project: Project | null;

	let hidden1 = true;
	let transitionParams = {
		x: 320,
		duration: 200,
		easing: sineIn
	};
</script>

{#if project}






	<div class="  flex  space-x-8 hover:bg-zinc-800  p-8 rounded-md outline-none border-none">
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<div class=" w-1/3 hover:brightness-75 transition-all duration-150 hover:-translate-y-2">
			<!-- <a href={project.link} target="_blank" >
			</a> -->
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img
				on:click={() => (hidden1 = false)}
				src={project.imageSrc}
				class="   h-auto shadow-gray-500 hover:shadow-gray-300 transition-all duration-150 hover:shadow-xl hover:cursor-pointer rounded shadow-lg"
				alt="Project"
			/>
		</div>


		<div class="w-2/3 text-clip text-sm">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. A cupiditate ipsa tempora hic velit deserunt odio vel eligendi veniam aliquam aspernatur ut expedita similique quae dicta cum delectus.
		</div>
		<!-- <div class="w-1/2 relative order-1 p-4">
			<div class="flex">
				<div>
					<p class="font-1 text-4xl dark:text-white mt-3 mt-md-0">
						{project.title}
					</p>
				</div>
			</div>
			<div class=" p-2 border-0 bg-primary dark:text-white w-full">
				<span class="font-2 text-shadow mb-1">
					{project.description}
				</span>
				<div class="font-2">
					<ul class="flex space-x-2">
						{#each project?.technologies as tech}
							<li
								class=" cursor-default hover:shadow-xl shadow-gray-400 shadow-lg hover:-translate-y-2 transition-all duration-150 rounded-md"
							>
								<Badge border color="indigo">{tech}</Badge>
							</li>
						{/each}

				
					</ul>
				</div>
			</div>
		</div> -->
	</div>

	<Drawer
		width="w-96"
		transitionType="fly"
		placement="right"
		{transitionParams}
		bind:hidden={hidden1}
		id="sidebar1"
	>
		<div class="flex items-center">
			<CloseButton on:click={() => (hidden1 = true)} class="mb-4 dark:text-white" />
		</div>

		<img
			src={project.imageSrc}
			class="  shadow-gray-500 hover:cursor-pointer rounded shadow-xl"
			alt="Project"
		/>
		<div class=" relative order-1">
			<div>
				<div class="font-1 text-4xl dark:text-white my-5">
					{project.title}
				</div>
			</div>
			<div class=" p-2 border-0 bg-primary dark:text-white w-full">
				<span class="font-2 mb-1">
					{project.description}
				</span>
				<div class="font-2 my-4">
					<ul class=" flex flex-wrap items-center gap-2">
						{#each project?.technologies as tech}
							<li
								class=" cursor-default hover:shadow-xl shadow-gray-400 shadow-lg hover:-translate-y-2 transition-all duration-150 rounded-md"
							>
								<Badge large border color="indigo">{tech}</Badge>
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-2 gap-4">
			<Button href={project.link} target="_blank" class="px-4"
				>Visit Website <ArrowRightOutline class="w-3.5 h-3.5 ml-2" /></Button
			>
		</div>
	</Drawer>
{/if}
