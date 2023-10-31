<script lang="ts">
	import HeroSectionV2 from '$lib/components/VideoHeroImage.svelte';
import { Timeline, TimelineItem, Button } from 'flowbite-svelte';
	import { ArrowRightOutline, CalendarWeekSolid } from 'flowbite-svelte-icons';


</script>

<HeroSectionV2>
<main class="  pt-64   mt-40 flex flex-col  justify-center items-center px-6 h-screen overflow-scroll">
	<div class="p-1 justify-center flex flex-col items-center">
		<div class=" locomotive-section w-full">
			<div class=" text-6xl font-1 dark:text-white">About Me</div>
			<Timeline>
				<TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400" />
					<div class="grid grid-cols-3">
						<img src="src\lib\assets\images\CosmicWolf.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Mandala1.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Mandala2.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Newt.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\SunflowerStar.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Turtle.png" alt="" class="w-48" />
					</div>
					<Button color="alternative">Learn more<ArrowRightOutline class="ml-2 w-3 h-3" /></Button>
				</TimelineItem>
				<TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						All of the pages and components are first designed in Figma and we keep a parity between
						the two versions even as we update the project.
					</p>
				</TimelineItem>
				<TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						Get started with dozens of web components and interactive elements built on top of
						Tailwind CSS.
					</p>
				</TimelineItem>
			</Timeline>
		</div>
	</div>
	<div class="p-1 justify-center flex flex-col items-center">
		<div class=" locomotive-section w-full">
			<div class=" text-6xl font-1 dark:text-white">About Me</div>
			<Timeline>
				<TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400" />
					<div class="grid grid-cols-3">
						<img src="src\lib\assets\images\CosmicWolf.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Mandala1.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Mandala2.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Newt.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\SunflowerStar.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Turtle.png" alt="" class="w-48" />
					</div>
					<Button color="alternative">Learn more<ArrowRightOutline class="ml-2 w-3 h-3" /></Button>
				</TimelineItem>
				<TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						All of the pages and components are first designed in Figma and we keep a parity between
						the two versions even as we update the project.
					</p>
				</TimelineItem>
				<TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						Get started with dozens of web components and interactive elements built on top of
						Tailwind CSS.
					</p>
				</TimelineItem>
			</Timeline>
		</div>
	</div>
	<div class="p-1 justify-center flex flex-col items-center">
		<div class=" locomotive-section w-full">
			<div class=" text-6xl font-1 dark:text-white">About Me</div>
			<Timeline>
				<TimelineItem title="Application UI code in Tailwind CSS" date="February 2022">
					<p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400" />
					<div class="grid grid-cols-3">
						<img src="src\lib\assets\images\CosmicWolf.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Mandala1.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Mandala2.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Newt.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\SunflowerStar.png" alt="" class="w-48" />
						<img src="src\lib\assets\images\Turtle.png" alt="" class="w-48" />
					</div>
					<Button color="alternative">Learn more<ArrowRightOutline class="ml-2 w-3 h-3" /></Button>
				</TimelineItem>
				<TimelineItem title="Application UI code in Tailwind CSS" date="March 2022">
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						All of the pages and components are first designed in Figma and we keep a parity between
						the two versions even as we update the project.
					</p>
				</TimelineItem>
				<TimelineItem title="Application UI code in Tailwind CSS" date="April 2022">
					<p class="text-base font-normal text-gray-500 dark:text-gray-400">
						Get started with dozens of web components and interactive elements built on top of
						Tailwind CSS.
					</p>
				</TimelineItem>
			</Timeline>
		</div>
	</div>
</main>


</HeroSectionV2>


<style lang="scss" scoped>
  /* Style the thumb and track (optional) */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: transparent; /* Thumb color */
}

::-webkit-scrollbar-track {
  background-color: transparent; /* Track color */
}
</style>
