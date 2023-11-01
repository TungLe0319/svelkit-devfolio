<script lang="ts">
	import { browser } from '$app/environment';
	import SectionHeader from './SectionHeader.svelte';

	function readFile() {
		// console.log('sdf');
		if (window && browser) {
			window?.open('TungDeveloperResume.pdf', '_blank'); //to open in new tab
		}
	}
	const sectionHeader = {
		title: 'About Me',
		subtitle: 'Get to know me'
	};
</script>

<div class="flex justify-center flex-col items-center mt-24 h-screen" id="about">
	<SectionHeader {sectionHeader} />

	<div class="flex flex-col lg:flex-row justify-center space-x-10 w-4/5">
		<div class="lg:w-1/2">
			<div class="font-2 text-white">
				Hello! I'm Tung Le, and I have a strong passion for bringing digital creations to life on
				the web. My journey began in the culinary world and customer service, where I spent over 8
				years working in kitchens and various customer service roles.
				<br /><br />
				My desire totransition into the tech industry led me to enroll in a full-stack development bootcamp.
				This decision was influenced by an alumnus who recommended it. While I thoroughly enjoyed my
				time working with people and food, I felt a compelling need to dive into the world of technology,
				a realm that has always captivated me.
				<br /> <br />

				Fast forward to today having successfully completed the bootcamp, I've collaborated with my
				brothers, who also attended the same course, to develop several applications. Currently, my
				primary focus is on refining my development skills by creating applications using different
				frameworks and technologies. It's not just about coding; it's a true passion that I
				wholeheartedly immerse myself in.
			</div>
		</div>
		<div class=" flex items-center justify-center mt-4 lg:mt-0">
			<img
				src="TungPortrait.jpg"
				alt=""
				class="w-auto h-96 object-cover rounded shadow-2xl shadow-indigo-500/30"
			/>
		</div>
	</div>
</div>

<!-- <button
	class="p-4 my-10 bg-indigo-500 rounded-md shadow-xl shadow-indigo-500/40 font-2 text-sm text-white hover:bg-indigo-400 transition-all duration-300"
	on:click={readFile}>Check Out My Resume</button
> -->

<style lang="scss" scoped>
	.component {
		@apply p-1;
	}
</style>
