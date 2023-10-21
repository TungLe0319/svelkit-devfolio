<script> 
	import { onMount } from 'svelte'
	import { tweened } from 'svelte/motion'
	import { Screen } from 'svelte-preview-ui'
	import { fly, fade } from 'svelte/transition'
	import { quadIn } from 'svelte/easing'
	import { interpolateRound } from 'd3-interpolate'
	import { marked } from 'marked'
	import highlight from './highlight.js'
	
	const commands = [
		{
			command: 'npm init svelte@next my-site && cd my-site',
			caption: '**Scaffold** the project.'
		}, 
		{
			command: 'echo "Hello World" > src/routes/index.svelte',
			caption: 'Add some **content**.'
		},
		{
			command: 'git init && git add . && git commit -m "Initial commit"',
			caption: 'Setup **version control**.'
		},
		{ 
			command: 'npx vercel',
			caption: '**Deploy** to Vercel.'
		},
	]
	
	const duration = 18000
	const index = tweened(-1, { interpolate: interpolateRound, duration })
	const position = tweened(-1, { interpolate: interpolateRound, easing: quadIn})
	
	$: current = $index >= 0 ? commands[$index] : null
	
	$: if (current) {
		position.set(0, {duration: 0})
		position.set(current.command.length, {delay: 1000, duration: current.command.length * 50})
	}
	
	onMount(() => {
		$index = commands.length-1
	})
</script>

<main>
	
	<Screen class="screen" title="Terminal">
		<div class="wrapper">
			{#if current }
				{#each Array($index) as _, n}
					<div class="command">
						<span class="prompt">&gt;</span>
						{@html highlight(commands[n].command)}
					</div>
				{/each}
			
				<div class="command">
					<span class="prompt" class:empty={$position==0}>&gt;</span>
					<span class="text">{@html highlight(current.command.substr(0, $position))}</span>
					<span class="cursor"></span>
				</div>
			
			{/if}	
		</div>
	</Screen>
	
	
		<div class="caption">
			{#if current}
			  {#key current.caption}
				  <div in:fly={{y: 20, easing: quadIn}}>
				 	 {@html marked(current.caption)}
				  </div>
			  {/key}
			{/if}
		</div>

</main>


<style scoped>
	:global(*) {
		box-sizing: border-box;
	}
	:global(body) {
		background: #444;
		--screen-background-color: #333;
		--screen-text-color: #ccc;
		--screen-border-color: #8885;
		--screen-shadow-color: transparent;
		--width: 600px;
		--height: 250px;
		--purple: #dba9ff66;
	}
	main :global(.screen) {
		width: var(--width);
		height: var(--height);
		animation: pop-in 0.8s;
	} 
	
	@keyframes pop-in {
		from {
			transform: scale(0.5);
			margin-top: 50vh; 
		}
	}
	
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}
	
	.wrapper {
		padding: 10px 5px;
		position: relative;
		height: calc(var(--height) - 45px);
	}
		
	.command {
		font-family: "Monospace";
		font-size: 1.2rem;
		line-height: 1.6rem;
	}

	.command .prompt {
		color: var(--purple);
		font-weight: bold;
		display: inline-block;
	}
	
	.command .prompt.empty {
		width: 20px;
	}	
	
	.command .text {
		display: inline;
	}
	
	.command :global(i) {
		font-style: normal;
		color: #d1b178;
	}
	
	.command :global(b) {
		font-style: normal;
		color: #5dbabb;
	}
	
	.cursor {
		position: absolute;
		display: inline-block;
		width: 8px;
		height: 1.2rem;
		margin-top: 3px;
		margin-left: 2px;
		animation: blink 0.8s infinite;
	}

	@keyframes blink {
		0% {
			background: transparent;
		}
		40% {
			background: var(--purple);
		}
		to {
			background: var(--purple);
		}
	}
	
	.caption {
		color: #222;
		height: 6rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 5px;
	}
	.caption div {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px 10px;
		border-radius: 2px;
		background: #eee;
		border: solid 1px #5552;
		font-size: 1.2rem;
	}
	.caption :global(p) {
		margin: 0;
		padding: 0;
	}
</style>