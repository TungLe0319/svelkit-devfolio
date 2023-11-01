<script lang="ts">
	import Typewriter from 'svelte-typewriter';
</script>

<div
	class=" flex flex-col items-center justify-center text-white dark:text-indigo-500 lg:w-4/5 h-screen"
	id="intro"
>
	<div class=" rounded flex flex-col space-y-4 w-full">
		<Typewriter interval={50}>
			<p class="font-2 mb-2 text-xl">Hi, my name is</p>
		</Typewriter>
		<Typewriter interval={100} delay={1000}>
			<p class="text-4xl lg:text-8xl font-1 font-extrabold text-indigo-400 text-shadow">Tung Le.</p>
		</Typewriter>
		<Typewriter interval={100} delay={2000}>
			<p class="text-4xl lg:text-8xl font-1 font-extrabold text-indigo-200 text-shadow">
				Software
			</p>
		</Typewriter>
		<Typewriter interval={100} delay={3500}>
			<p class="text-4xl lg:text-8xl font-1 font-extrabold text-indigo-200 text-shadow">
				Developer
			</p>
		</Typewriter>
	</div>
</div>

<style lang="scss">
</style>
