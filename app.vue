<script setup>
	useHead({
		titleTemplate: (titleChunk) => {
			return titleChunk ? `${titleChunk} - Portfolio` : 'Portfolio';
		},
	});
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
