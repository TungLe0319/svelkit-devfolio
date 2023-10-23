<script lang="ts">
	import { browser } from '$app/environment';
	import HeroSectionV2 from '$lib/components/Sections/Hero/VideoHeroImage.svelte';
	import { onMount } from 'svelte';
	import { Parallax, ParallaxLayer } from 'svelte-parallax';
	import Project from '$lib/components/Sections/Portfolio/Project.svelte';
	import { writable } from 'svelte/store';
	let parallax: Parallax;
	let disabled = false;
	let fancy = 'Projects'.split('');

	onMount(() => {
		// parallax.scrollTo(3, { selector: '.bottom-btn', duration: 5000 });
	});

	const projects = writable([
		{
			title: 'SamadhiYogaIdaho',
			imageSrc:
				'https://media.discordapp.net/attachments/1060066788878069891/1060067418073993226/samadhiApp.png?width=720&height=399',
			description: `Custom Designed and built website for a small yoga business owner client. integrated Ghost for CMS Publishing for her blog as well
              as configuring MailGun for Email Service. The app allows users to
              easily browse and sign up for classes, view class schedules, and
              sign up for yoga retreats. It will also include a feature for
              teachers to manage their schedules and events, the business to
              manage customer information. The SPA will be optimized for both
              desktop and mobile use, making it convenient for users to access
              from any device. Overall, the goal of the app is to provide a
              seamless and convenient experience for both the business and its
              customers.`,
			technologies: ['Vue.Js', 'Bootstrap', 'MongoDb', 'PocketBase', 'Ghost'],
			link: 'https://www.samadhiyogaidaho.com/#/'
		},
		{
			title: 'Better After Books',
			imageSrc:
				'https://media.discordapp.net/attachments/1060066788878069891/1060067418820579439/BetterAfterBooks.png?width=720&height=390',
			description: `     Better After Books is a social network that allows users to
              discover new books and save them to a list collection (i.e, a
              wishlist,favorites,reading and finished list) and browsing what
              other users recommended and reviewed. Demonstrates a working
              knowledge of how to architect and design full-stack applications.
              Utilizing a VueJs frontend with Vue-Router to manage the DOM. On
              the server-side, using DotNet WebApi for server and implement the
              Repository pattern to communicate with a MySQL server for their
              database. In addition, Auth0 for user management, Dapper as an
              ORM.`,
			technologies: ['Vue.Js', 'C#', 'DotNet', 'MySQL', 'Bootstrap'],
			link: 'https://better-after-books-demo.onrender.com/#/'
		},
		{
			title: 'Keepr',
			imageSrc:
				'https://media.discordapp.net/attachments/1060066788878069891/1060068356541120683/KeeprSS.png?width=720&height=395',
			description: `  Keepr is a social network that allows users to visually share and
              discover new interests by posting images or videos to their own,
              or others', collections (i.e., a collection of 'vaults,' usually
              with a common theme) and browsing what other users have kept.
              Demonstrates a working knowledge of building full-stack
              applications. Utilizing a VueJs frontend with Vue-Router to manage
              the DOM. On the server-side, using DotNet WebApi for their server
              and implement the Repository pattern to communicate with their
              database. In addition, Auth0 for user management, Dapper as an
              ORM, and a MySQL server for their database.`,
			technologies: ['HTML', 'CSS', 'Javascript'],
			link: 'https://keepr-project-demo.onrender.com'
		},
		{
			title: 'NextFire',
			imageSrc:
				'https://cdn.discordapp.com/attachments/1060066788878069891/1060067418464075877/TowerSS.png',
			description: `  SPA app designed to help people get together with other users for
              events as well as create them. VueJs with Vue-Router for the
              client. Express with Node.js and MongoDB with Mongoose to manage
              database and handling relationships of both one to many, and many
              to many objects. Identity management with Auth0.`,
			technologies: ['Next.js', 'Tailwind', 'React'],
			link: 'https://next-fire.tung.devopportunities.dev/'
		},
		{
			title: 'Browse Learn Offer Grow (B.L.O.G)',
			imageSrc:
				'https://media.discordapp.net/attachments/1060066788878069891/1165068659912355990/image.png?ex=654581be&is=65330cbe&hm=430d46aed7750e097cf44cc1d98cf76596700d00cbe0e72e64a4f70784cef630&=&width=720&height=368',
			description: `  SPA app designed to help people get together with other users for
              events as well as create them. VueJs with Vue-Router for the
              client. Express with Node.js and MongoDB with Mongoose to manage
              database and handling relationships of both one to many, and many
              to many objects. Identity management with Auth0.`,
			technologies: ['Next.js', 'Tailwind', 'React', 'Auth.js'],
			link: 'https://svelte-blog.tung.devopportunities.dev/'
		},
		{
			title: 'The Daily Sun',
			imageSrc:
				'https://cdn.discordapp.com/attachments/1060066788878069891/1165069470625181706/image.png?ex=6545827f&is=65330d7f&hm=bb345073945238971a93be26cc104ec6500979661b9938eb5013cad754400a8c&',
			description: `  SPA app designed to help people get together with other users for
              events as well as create them. VueJs with Vue-Router for the
              client. Express with Node.js and MongoDB with Mongoose to manage
              database and handling relationships of both one to many, and many
              to many objects. Identity management with Auth0.`,
			technologies: ['Nuxt', 'Tailwind', 'NextAuth.js'],
			link: 'https://thedailysun.devopportunities.dev/'
		}
	]);
</script>

{#if browser}
	<Parallax sections={3} bind:this={parallax} {disabled} class="bg-zinc-800">
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
		<!-- 
		<ParallaxLayer
			rate="1"
			class=""
			style="
	
			display: flex; 
			justify-content: center; 
			align-items: center; 
			flex-direction: column;
		"
		>
			<h1>Svelte Parallax</h1>
			<button
				class="bottom-btn"
				on:click={() => parallax.scrollTo(3, { selector: '.top-btn', duration: 4000 })}
			>
				Click me!
			</button>
		</ParallaxLayer> -->

		<ParallaxLayer
			offset="2"
			rate="2"
			class="flex justify-center items-center"
			style="

		"
		>
			<div class="  ">
				{#if projects}
					{#each $projects as project, index}
						<Project {project} />
					{/each}
				{:else}
					<p>loading...</p>
				{/if}
			</div>
<!-- 
			<button
				class="top-btn"
				on:click={() => parallax.scrollTo(1, { selector: '.bottom-btn', duration: 1000 })}
			>
				Scroll to top
			</button> -->
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
