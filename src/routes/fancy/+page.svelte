<script lang="ts">
	import { browser } from '$app/environment'
	import { onMount } from 'svelte';
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import Project from '$lib/components/ProjectCard.svelte';
	let parallax: Parallax;
	let disabled = false;
	let fancy = 'Projects'.split('');
	onMount(() => {
		// parallax.scrollTo(3, { selector: '.bottom-btn', duration: 5000 });
	});

</script>

{#if browser}
	<Parallax sections={8} bind:this={parallax} {disabled} class="bg-zinc-800">
		{#each fancy as char, index (index)}
			<ParallaxLayer
				rate={(index + 1) / (fancy.length - 1)}
				offset={1}
				style="
			  margin-left: {38 + index * 5}%; 
				display: flex; 
				justify-content: flex-start; 
				align-items: center;
      
		  "
			>
				<p class=" text-white text-9xl font-1">
					{char}
				</p>
			</ParallaxLayer>
		{/each}

		<ParallaxLayer offset={1} rate={-2.5} style="display: flex; justify-content: flex-end;">
			<div
				style="opacity: 0.5; width: 50%; height: 100%;"
				class="bg-gradient-to-r from-orange-500"
			/>
		</ParallaxLayer>

		<ParallaxLayer offset={1} rate={2.5} style="display: flex; justify-content: flex-start;">
			<div
				style="opacity: 0.5; width: 50%; height: 100%;"
				class="bg-gradient-to-l from-indigo-500"
			/>
		</ParallaxLayer>
	
		<ParallaxLayer
			offset={2}
			rate={2}
			class="flex justify-center items-center"
			style="

		"
		>
			<div class=" px-16  flex flex-col space-y-4">
				<!-- {#if projects}
					{#each $projects as project, index}
						<Project {project} />
					{/each}
				{:else}
					<p>loading...</p>
				{/if} -->
			</div>

		</ParallaxLayer>

		<!-- Add 5 more sections with unique styling -->
		<ParallaxLayer offset={3} rate={1} style="background-color: #ff0000;">
			<!-- Section content for 'Projects' -->

			Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat sed commodi, optio, labore nihil exercitationem quod ratione adipisci aut velit aspernatur pariatur culpa voluptatibus possimus. Minus placeat expedita tenetur, distinctio obcaecati provident suscipit voluptatum. Sapiente consequatur reiciendis atque dolores eos explicabo nesciunt consectetur voluptatum provident nihil est sequi illum dicta libero adipisci quidem omnis numquam debitis eaque, iste voluptatem mollitia consequuntur labore at? Blanditiis fugiat optio ipsa doloribus, voluptatum nihil eveniet architecto et, sapiente aperiam corporis quidem sit! Consectetur iusto ut voluptates suscipit velit exercitationem repudiandae laudantium ex obcaecati maxime? Iusto amet itaque sequi non debitis quidem consectetur nobis tempora perferendis! Cumque delectus non tenetur. Reprehenderit nostrum quia temporibus voluptate incidunt. Mollitia modi ad impedit excepturi asperiores voluptas inventore, velit, molestias ipsa eaque culpa quisquam dolor aliquam molestiae? Veniam, nobis? Earum adipisci obcaecati ex sunt, voluptatum corrupti quia. Atque voluptatibus ea iste inventore blanditiis est harum unde qui, quam dolorum modi tenetur aperiam soluta quas laborum voluptatem magnam vitae repellat exercitationem. Eaque, magni libero ex placeat, cumque sunt esse neque minima velit consectetur reiciendis id! In quidem molestias, a libero praesentium et modi est quisquam sapiente, veritatis necessitatibus. Natus doloribus rem nulla tenetur aspernatur? Inventore debitis quae voluptatem facilis!
		</ParallaxLayer>

		<ParallaxLayer offset={4} rate={1} style="background-color: #00ff00;">
			<!-- Section content for 'Contact' -->		Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat sed commodi, optio, labore nihil exercitationem quod ratione adipisci aut velit aspernatur pariatur culpa voluptatibus possimus. Minus placeat expedita tenetur, distinctio obcaecati provident suscipit voluptatum. Sapiente consequatur reiciendis atque dolores eos explicabo nesciunt consectetur voluptatum provident nihil est sequi illum dicta libero adipisci quidem omnis numquam debitis eaque, iste voluptatem mollitia consequuntur labore at? Blanditiis fugiat optio ipsa doloribus, voluptatum nihil eveniet architecto et, sapiente aperiam corporis quidem sit! Consectetur iusto ut voluptates suscipit velit exercitationem repudiandae laudantium ex obcaecati maxime? Iusto amet itaque sequi non debitis quidem consectetur nobis tempora perferendis! Cumque delectus non tenetur. Reprehenderit nostrum quia temporibus voluptate incidunt. Mollitia modi ad impedit excepturi asperiores voluptas inventore, velit, molestias ipsa eaque culpa quisquam dolor aliquam molestiae? Veniam, nobis? Earum adipisci obcaecati ex sunt, voluptatum corrupti quia. Atque voluptatibus ea iste inventore blanditiis est harum unde qui, quam dolorum modi tenetur aperiam soluta quas laborum voluptatem magnam vitae repellat exercitationem. Eaque, magni libero ex placeat, cumque sunt esse neque minima velit consectetur reiciendis id! In quidem molestias, a libero praesentium et modi est quisquam sapiente, veritatis necessitatibus. Natus doloribus rem nulla tenetur aspernatur? Inventore debitis quae voluptatem facilis!
		</ParallaxLayer>

		<ParallaxLayer offset={5} rate={1} style="background-color: #0000ff;">
			<!-- Section content for 'About Me' -->		Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat sed commodi, optio, labore nihil exercitationem quod ratione adipisci aut velit aspernatur pariatur culpa voluptatibus possimus. Minus placeat expedita tenetur, distinctio obcaecati provident suscipit voluptatum. Sapiente consequatur reiciendis atque dolores eos explicabo nesciunt consectetur voluptatum provident nihil est sequi illum dicta libero adipisci quidem omnis numquam debitis eaque, iste voluptatem mollitia consequuntur labore at? Blanditiis fugiat optio ipsa doloribus, voluptatum nihil eveniet architecto et, sapiente aperiam corporis quidem sit! Consectetur iusto ut voluptates suscipit velit exercitationem repudiandae laudantium ex obcaecati maxime? Iusto amet itaque sequi non debitis quidem consectetur nobis tempora perferendis! Cumque delectus non tenetur. Reprehenderit nostrum quia temporibus voluptate incidunt. Mollitia modi ad impedit excepturi asperiores voluptas inventore, velit, molestias ipsa eaque culpa quisquam dolor aliquam molestiae? Veniam, nobis? Earum adipisci obcaecati ex sunt, voluptatum corrupti quia. Atque voluptatibus ea iste inventore blanditiis est harum unde qui, quam dolorum modi tenetur aperiam soluta quas laborum voluptatem magnam vitae repellat exercitationem. Eaque, magni libero ex placeat, cumque sunt esse neque minima velit consectetur reiciendis id! In quidem molestias, a libero praesentium et modi est quisquam sapiente, veritatis necessitatibus. Natus doloribus rem nulla tenetur aspernatur? Inventore debitis quae voluptatem facilis!
		</ParallaxLayer>

		<ParallaxLayer offset={6} rate={1} style="background-color: #ffff00;">
			<!-- Section content for 'GitHub Repo' -->
		</ParallaxLayer>

		<ParallaxLayer offset={7} rate={1} style="background-color: #ff00ff;">
			<!-- Section content for the fifth section -->
		</ParallaxLayer>

	</Parallax>
{/if}

<style>
	h1 {
		font-size: 2rem;
	}

	button {
		font-size: 1rem;
		cursor: pointer;
	}

	button:focus {
		outline: 4px dashed #ff5c77;
	}

	.disable {
		position: fixed;
		top: 1rem;
		left: 1rem;
		z-index: 10;
	}
</style>