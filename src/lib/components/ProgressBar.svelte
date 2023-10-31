<script setup lang="ts">
	let y: number;

	$: {
		if (y) {
			console.log(y);
		}
	}
</script>

<template />

<svelte:window bind:scrollY={y} />

<style lang="scss">
</style>
