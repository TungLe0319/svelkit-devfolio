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

<div class="flex justify-center flex-col items-center mt-24" id="about">
	<SectionHeader {sectionHeader} />


	<div class="flex justify-center space-x-4 w-4/5">
		<div class="w-1/2">
			<div class="font-2 text-white">
				Hey there! I'm Tung Le, and I'm all about crafting digital wonders that come to life on the
				web. My Odyssey into web development began taking a full-stack development bootcamp
				recommended by an alumni after having worked in kitchens and customer service for 8+ years.
				I enjoy working with people and food but I wanted a shift into the tech world that i was
				always subliminal interested in. During the course and building together applications that
				came to life on the web and taught me the ropes of HTML,CSS and Javascript, setting me on a
				path I couldn't resist.
				<br /><br />

				Fast forward to today, and I've had the opportunity to work in diverse settings, from
				bustling advertising agencies to nimble startups, massive corporations, and even a
				student-led design studio. These experiences have shaped me into the developer I am today.
				<br /><br />
				My primary focus right now revolves around honing my develment skills with building various applications
				with differing frameworks and technologies. It's more than just coding; it's a pleasure i find
				myself getting stuck in.
			</div>
		</div>
		<div class=" flex items-center justify-center">
			<img
				src="TungPortrait.jpg"
				alt=""
				class="w-auto h-96 object-cover rounded shadow-2xl shadow-indigo-500/30"
			/>
		</div>
	</div>
</div>
<button
	class="p-4 my-10 bg-indigo-500 rounded-md shadow-xl shadow-indigo-500/40 font-2 text-sm text-white hover:bg-indigo-400 transition-all duration-300"
	on:click={readFile}>Check Out My Resume</button
>

<style lang="scss">
	.component {
		@apply p-1;
	}
</style>
