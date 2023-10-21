<script lang="ts">
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	
	import { Gallery } from 'flowbite-svelte';
	import Project from '$lib/components/Sections/Portfolio/Project.svelte';
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

.
<div class=" flex text-6xl font-1 px-2">Portfolio</div>
<div class=" grid grid-col-2 px-20">
	{#each $projects as project, index}
		<Project {project} />
	{/each}
</div>

<style>
	.grid-col-2 {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 16px; /* Adjust gap as needed */
	}
</style>
