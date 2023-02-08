<script setup>
	useHead({
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} - Portfolio` : 'Portfolio';
		},
	});
</script>
<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
