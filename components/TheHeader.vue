<script lang="ts" setup>
const showChangeLanguage = ref(false);
const handleChangeLanguage = () => {
	showChangeLanguage.value = !showChangeLanguage.value
}

</script>

<template>
  <header class="fixed w-full h-[100px] z-50 dark:bg-[#111215]">
    <nav class="py-4">
      <div class="container">
        <div class="relative flex items-center justify-between">
          <NuxtLink to="/">
            <img
              src="@/assets/img/rynprb.png"
              alt="RYNPRB"
              title="RYNPRB"
              width="60"
              height="60"
            >
          </NuxtLink>
          <div class="relative">
            <button
              class="dark:text-white font-bold text-lg w-[50px] h-[50px] border rounded-full"
              @click="handleChangeLanguage"
            >
              {{ $t('language') }}
            </button>
            <div
              v-if="showChangeLanguage"
              id="dropdown"
              class="dropdown-menu absolute right-0 top-[60px] z-10 w-auto text-base list-none bg-white rounded-lg divide-y divide-gray-100"
            >
              <ul
                class="py-1"
                aria-labelledby="dropdownButton"
              >
                <li>
                  <a
                    ref="lang"
                    href="#"
                    class="flex items-center p-3 hover:bg-gray-200 text-lg"
                  > EN </a>
                </li>
                <li>
                  <a
                    ref="lang"
                    href="#"
                    class="flex items-center p-3 hover:bg-gray-200 text-lg"
                  > ID </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
