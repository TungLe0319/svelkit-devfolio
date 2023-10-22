<script>
	import HeroSectionV2 from '$lib/components/Sections/Hero/HeroSectionV2.svelte';
	import SetupAnimation from '$lib/components/SetupAnimation.svelte';

</script>

<HeroSectionV2>
	<section class="pt-10 mt-10 mb-5 text-shadow text-white dark:text-indigo-500">
		<div class=" font-1 mb-4">
			<div class="">
				<p class="text-start text-3xl ">Creative</p>

				<p class=" text-7xl mb-0 ">Design</p>
				<div class="flex justify-center">
					<b class=" text-7xl text-center">&</b>
				</div>
				<div class=" flex flex-col items-end">
					<p class="text-start text-3xl ">Creative</p>

					<p class="text-7xl e mb-0 ">Design</p>
				</div>
			</div>
		</div>
		<SetupAnimation />
	</section>
</HeroSectionV2>

<style lang="scss">
</style>
