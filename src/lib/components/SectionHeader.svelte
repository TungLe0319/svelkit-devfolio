<script lang="ts">
	interface SectionHeader {
		title: string;
		subtitle: string;
	}

	export let sectionHeader: SectionHeader;
</script>

<div class="flex flex-col items-center justify-center mb-20">
	<div class=" text-7xl font-1 text-white text-shadow mb-4">{sectionHeader.title}</div>
	<div class="font-2 text-2xl text-indigo-400">{sectionHeader.subtitle}</div>
</div>

