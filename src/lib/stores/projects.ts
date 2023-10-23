import { writable } from 'svelte/store';
import { setContext } from 'svelte';
export const projects = writable([
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
		technologies: [
			{
				title: 'Vue.js 3',
				src: 'https://imgs.search.brave.com/Hsy3vsixUOO8EgH22as2LpgNP6zF5hEx6P-pDoc0n0c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMzN3/dWJyZmtpMGw2OC5j/bG91ZGZyb250Lm5l/dC83MThjNmU0ODk1/NjI0OTEyMWNmM2Nj/YTFhMjJhOTlmODM3/MmEzZjBkLzVmNjg5/L19udXh0L2ltZy9j/MmE2MDVmLnBuZw'
			},
			{
				title: 'BootStrap',
				src: 'https://pluspng.com/img-png/bootstrap-logo-vector-png-bem-with-bootstrap-bootstrap-logo-1024.png'
			},
			{
				title: 'MongoDb',
				src: 'https://pluspng.com/img-png/logo-mongodb-png-hundreds-of-popular-mongodb-articles-400.png'
			}
		],
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
		technologies: [
			{
				title: 'Vue.js 3',
				src: 'https://imgs.search.brave.com/Hsy3vsixUOO8EgH22as2LpgNP6zF5hEx6P-pDoc0n0c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMzN3/dWJyZmtpMGw2OC5j/bG91ZGZyb250Lm5l/dC83MThjNmU0ODk1/NjI0OTEyMWNmM2Nj/YTFhMjJhOTlmODM3/MmEzZjBkLzVmNjg5/L19udXh0L2ltZy9j/MmE2MDVmLnBuZw'
			},
			{
				title: 'MySQL',
				src: 'https://findicons.com/files/icons/977/rrze/720/database_mysql.png'
			},
			{
				title: 'DotNet Core',
				src: 'https://wpguru.co.uk/wp-content/uploads/2020/04/dotnet-logo.png'
			},
			{
				title: 'C-Sharp',
				src: 'https://1.bp.blogspot.com/-U8C6UaajxeA/XV1J6Yo6x2I/AAAAAAAABQo/3v2OEgTGn9ggUqArXtGZpl_6zqbo09nmACLcBGAs/s1600/csharp_logo.png'
			}
		],
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
		technologies: [
			{
				title: 'Vue.js 3',
				src: 'https://imgs.search.brave.com/Hsy3vsixUOO8EgH22as2LpgNP6zF5hEx6P-pDoc0n0c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kMzN3/dWJyZmtpMGw2OC5j/bG91ZGZyb250Lm5l/dC83MThjNmU0ODk1/NjI0OTEyMWNmM2Nj/YTFhMjJhOTlmODM3/MmEzZjBkLzVmNjg5/L19udXh0L2ltZy9j/MmE2MDVmLnBuZw'
			},
			{
				title: 'MySQL',
				src: 'https://findicons.com/files/icons/977/rrze/720/database_mysql.png'
			},
			{
				title: 'DotNet Core',
				src: 'https://wpguru.co.uk/wp-content/uploads/2020/04/dotnet-logo.png'
			},
			{
				title: 'C-Sharp',
				src: 'https://1.bp.blogspot.com/-U8C6UaajxeA/XV1J6Yo6x2I/AAAAAAAABQo/3v2OEgTGn9ggUqArXtGZpl_6zqbo09nmACLcBGAs/s1600/csharp_logo.png'
			}
		],
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
		technologies: [
			{
				title: 'React',
				src: 'https://imgs.search.brave.com/qlFAtMUjOJ06EBhykDOXGUrmQ4UM2GdOmNiPAzXjS5w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy1kb3dubG9hZC5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTYvMDkvUmVhY3Rf/bG9nb19sb2dvdHlw/ZV9lbWJsZW0tNzAw/eDYyNi5wbmc'
			},
			{
				title: 'Next.js',
				src: 'https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png'
			},

			{
				title: 'FireBase',
				src: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'
			},
			{
				title: 'TailWind CSS',
				src: 'https://media.zeemly.com/zeemly/product/tailwind-css.png'
			}
		],
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
		technologies: [
			{
				title: 'Svelte',
				src: 'https://imgs.search.brave.com/AtFnftxXfySR-pIt0LrD64jshxNlrFjMfr9etQbLNAU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2dp/bGJhcmJhcmEvbG9n/b3MvbWFpbi9sb2dv/cy9zdmVsdGUtaWNv/bi5zdmc.svg'
			},
			{
				title: 'PostgreSQL',
				src: 'https://cdn.freebiesupply.com/logos/thumbs/2x/postgresql-logo.png'
			},
			{
				title: 'Auth.js',
				src: 'https://authjs.dev/img/logo/logo-sm.webp'
			},
			{
				title: 'TailWind CSS',
				src: 'https://media.zeemly.com/zeemly/product/tailwind-css.png'
			},
			{
				title: 'Prisma.io',
				src: 'https://imgs.search.brave.com/KhQAV89DalGsyHLIk36WzppNhJCg02NbIehcQjuSTeU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nL28vYnVz/aW5lc3MvdnNjb2Rl/LXByb2dyYW0taXRl/bS1pY29uL3ByaXNt/YS5wbmc'
			}
		],
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
		technologies: [
			{
				title: 'Nuxt.js',
				src: 'https://imgs.search.brave.com/ac3WGz-DgM03071K34NEHSDn6LTb8cM2YIrFfa7YAcM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2FlL051eHRfbG9n/by5zdmc.svg'
			},
			{
				title: 'TailWind CSS',
				src: 'https://media.zeemly.com/zeemly/product/tailwind-css.png'
			},
			{
				title: 'Auth.js',
				src: 'https://authjs.dev/img/logo/logo-sm.webp'
			},
			{
				title: 'Prisma.io',
				src: 'https://imgs.search.brave.com/KhQAV89DalGsyHLIk36WzppNhJCg02NbIehcQjuSTeU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nL28vYnVz/aW5lc3MvdnNjb2Rl/LXByb2dyYW0taXRl/bS1pY29uL3ByaXNt/YS5wbmc'
			},
			{
				title: 'PostgreSQL',
				src: 'https://cdn.freebiesupply.com/logos/thumbs/2x/postgresql-logo.png'
			}
		],
		link: 'https://thedailysun.devopportunities.dev/'
	}
]);


