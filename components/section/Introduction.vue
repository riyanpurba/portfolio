<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="m-0 p-0 relative w-full min-h-screen flex items-center">
    <div class="container">
      <div class="flex items-center justify-center">
        <div class="w-10/12 text-center">
          <h1 class="text-3xl xl:text-8xl lg:text-8xl md:text-6xl sm:text-5xl uppercase text-white pb-8">
            {{ $t('name') }}
          </h1>
          <h2 class="text-xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-xl text-gray-300 py-8">
            {{ $t('position') }}
          </h2>
        </div>
      </div>
    </div>
    <div class="absolute top-0 left-0 w-full h-full">
      <canvas
        data-generated="true"
        style="width: 100% !important; height: 100% !important; position: unset; z-index: 0 !important; top: 0px !important; left: 0px !important; pointer-events: initial;"
        width="3360"
        height="1002"
      />
    </div>
    <div class="gradient-circle one" />
    <div class="gradient-circle two" />
    <div class="absolute h-[1px] w-[65%] left-0 bottom-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
  </section>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.gradient-circle{
	position: absolute;
	width: 200px;
	height: 200px;
	border-radius: 70%;
	opacity: .25;
	filter: blur(100px);	
		&.one{
			left: 0;
			bottom: 0;
			z-index: -1;
			background-image: linear-gradient(45deg,#059dff,#36c6f0);
		}
		&.two{
			top: 0;
			right: 0;
			z-index: -1;
			background-image: linear-gradient(45deg,#fb5343,#6549d5);
		}
}
</style>