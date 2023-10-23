<script lang="ts">
	import { Timeline, TimelineItem, Button, Badge } from 'flowbite-svelte';
	import { LinkSolid } from 'flowbite-svelte-icons';

	const dataSet =[
				 {
		date: 'APRIL - NOV 2023',
		title: '1901Group',
		description:
			'Served as an Information Technology Specialist, handled User account administration, Asset Management and Software installation across US Navy Active Directory. Troubleshooted asset, software, and hardware issues and provided remote user assistance as well as remote desktop assistance.',
		link: 'https://boisecodeworks.com/',
		tech: [
			'Command Line',
			'Powershell',
			'Active Directory',
			'Microsoft 365 Products',
			"Virtual Machines",
			"Microsoft Endpoint Configuration Manager(MECM) ",
		]
	},
		 {
		date: 'JAN - MAR 2023',
		title: 'RiaFox',
		description:
			'Graduated  in the top 1% of the cohort for a full-stack development bootcamp, learned CSS,HTML,Javascript fundamentals, DOM manipulations, Props, Building and intergrating REST APIs',
		link: 'https://boisecodeworks.com/',
		tech: [
			'Angular',
			'TypeScript',
			'ClickUp',
			'HTML',
			"CSS",
			"Nest",
		]
	},
		 {
		date: 'AUG - NOV 2022',
		title: 'Boise CodeWorks',
		description:
			'Graduated  in the top 1% of the cohort for a full-stack development bootcamp, learned CSS,HTML,Javascript fundamentals, DOM manipulations, Props, Building and intergrating REST APIs',
		link: 'https://boisecodeworks.com/',
		tech: [
			'CSS',
			'HTML',
			'JavaScript',
			'C#',
			'MySQL',
			'Vue',
			'NetCore',
			'BootStrap',
			'MondoDB',
			'Auth0'
		]
	},
	];
</script>

<div class=" w-full locomotive-section">
	<div class=" text-3xl font-1 text-white mb-4 text-shadow">Education and Certificates</div>
	<Timeline classTime="text-white">

{#each dataSet as data}

		<TimelineItem>
			<p class="text-sm text-white">{data.date}</p>
			<div class="flex items-center space-x-2 text-indigo-400">
				<p class="text-indigo-400 font-1 text-xl my-2 text-shadow">{data.title}</p>
				<LinkSolid />
			</div>
			<p class="mb-4 text-base font-normal text-white dark:text-gray-400">
				{data.description}
			</p>

			<div class="flex flex-wrap gap-2">
				{#each data.tech as tech}
					<Badge large border color="indigo">{tech}</Badge>
				{/each}
			</div>
		</TimelineItem>
{/each}



	</Timeline>
</div>

<style></style>
