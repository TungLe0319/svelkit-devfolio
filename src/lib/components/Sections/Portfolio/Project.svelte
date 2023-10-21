<script>
	export let project;
</script>

{#if project}
	<div class="flex my-5 py-2">
		<!-- Render the section content based on props -->
		<div class="w-7/12">
			<a href={project.link} target="_blank">
				<img
					src={project.imageSrc}
					class="img-fluid elevation-6 rounded project-image"
					alt="Project"
				/>
			</a>
		</div>
		<div class="w-5/12 relative order-1">
			<div class="flex">
				<div>
					<p class="font-1 text-2xl text-yellow-500 mt-3 mt-md-0">
						{project.title}
					</p>
				</div>
			</div>
			<div class="card elevation-6 p-2 border-0 bg-primary text-white project-description w-full">
				<p class="font-2 text-white text-shadow mb-1">
					{project.description}
				</p>
				<div class="font-2">
					<ul class="list-group list-group-horizontal bg-transparent">
            

<li>
  
</li>


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
