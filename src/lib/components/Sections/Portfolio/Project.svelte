<script>
	import { fly } from 'svelte/transition';
	import { Badge } from 'flowbite-svelte';
	export let project;
	let y;

	$: {
		if (y) {
		}
	}
</script>

{#if project}
	<div class="flex my-5 py-2 w-full">
		<!-- Render the section content based on props -->
		<div class="w-1/2 hover:brightness-75 transition-all duration-150 hover:-translate-y-2">
			<a href={project.link} target="_blank">
				<img src={project.imageSrc} class=" w-full rounded shadow-lg" alt="Project" />
			</a>
		</div>
		<div class="w-1/2 relative order-1 p-4">
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

						<!-- <li
            class="list-group-item p-0 px-2 py-2"
            v-for="(tech, index) in projectData.technologies"
            :key="index"
          >
            <span
          
              class="badge text-bg-warning"
            >{{ tech }}</span>
          </li> -->
					</ul>
				</div>
			</div>
		</div>
	</div>
{/if}

<svelte:window bind:scrollY={y} />
