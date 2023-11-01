<script lang="ts">
	import { stringify } from "postcss";


  export let sectionHeader
</script>

<div class="flex flex-col items-center justify-center mb-20">
	<div class=" text-5xl font-1 text-white text-shadow mb-4">{sectionHeader.title}</div>
	<div class="font-2 text-indigo-400">{sectionHeader.subtitle}</div>
</div>

<style lang="scss">

</style>
