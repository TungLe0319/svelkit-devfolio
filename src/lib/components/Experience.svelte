<script lang="ts">
	import { Timeline, TimelineItem, Button, Badge } from 'flowbite-svelte';
	import { LinkSolid } from 'flowbite-svelte-icons';
	import SectionHeader from './SectionHeader.svelte';

	const dataSet = [
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
				'Virtual Machines',
				'Microsoft Endpoint Configuration Manager(MECM) '
			]
		},
		{
			date: 'JAN - MAR 2023',
			title: 'RiaFox',
			description:
				'Graduated  in the top 1% of the cohort for a full-stack development bootcamp, learned CSS,HTML,Javascript fundamentals, DOM manipulations, Props, Building and intergrating REST APIs',
			link: 'https://boisecodeworks.com/',
			tech: ['Angular', 'TypeScript', 'ClickUp', 'HTML', 'CSS', 'Nest']
		},
		{
			date: 'AUG - NOV 2022',
			title: 'Boise CodeWorks',
			description: `Full-stack development boot camp where I immersed myself in over 600 hours of live coding sessions, including both independent and collaborative projects. During the program, I gained knowledge in various key areas, such as but no limited to:

Fundamentals of CSS, HTML, and JavaScript.
Building and integrating REST APIs.
Implementing authentication flows and user management.
Proficiently designing and managing databases, with a focus on MySQL.`,
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
				'Auth0',
				'REST APIs',
				'Object-oriented Programming'
			]
		}
	];
		const sectionHeader = {
		title: 'Experience',
		subtitle: `What I've done`
	};
</script>

			<div class=" flex flex-col items-center just-center  w-2/3"  id="experience">
	<SectionHeader {sectionHeader}/>
	<Timeline classTime="text-white">
		{#each dataSet as data}
			<TimelineItem>
				<p class="text-sm text-white">{data.date}</p>
				<div class="flex items-center space-x-2 text-indigo-400">
					<p class="text-indigo-400 font-1 text-xl my-2 text-shadow">{data.title}</p>
				</div>
				<p class="mb-4 font-normal text-white text-sm dark:text-gray-400">
					{data.description}
				</p>

				<div class="flex flex-wrap gap-2">
					{#each data.tech as tech}
						<Badge
							large
							border
							color="indigo"
							class="hover:-translate-y-2 transition-all duration-300 cursor-pointer">{tech}</Badge
						>
					{/each}
				</div>
			</TimelineItem>
		{/each}
	</Timeline>
</div>

<style></style>
