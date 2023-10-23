<script lang="ts">
	import { Card, Button, Toggle } from 'flowbite-svelte';
	import { ArrowRightOutline } from 'flowbite-svelte-icons';
	interface Project {
		title: string;
		imageSrc: string;
		description: string;
		technologies: string[];
		link: string;
	}
	export let project: Project | null;
</script>

<div>
	<Card img={project?.imageSrc} horizontal class=" mx-2 mb-4 outline-none border-none bg-zinc-800">
		<h5
			class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate hover:whitespace-normal hover:overflow-visible transition-all duration-200"
		>
			{project?.title}
		</h5>
		<p class="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
			{project?.description}
		</p>
		<Button>
			<a href={project?.link}>
				Read more <ArrowRightOutline class="w-3.5 h-3.5 ml-2 text-white" /></a
			>
		</Button>
	</Card>
</div>

<style>
	.custom-bg {
		background: #3c3735 !important;
	}
</style>
