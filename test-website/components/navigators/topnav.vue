<script setup>

import Dropdown from "~/components/navigators/partials/dropdown.vue";

const showingNavigationDropdown = ref(false);

const links = [
  {label: 'Features', to: '/'},
  {label: 'Testimonial', to: '/'},
  {label: 'Pricing', to: '/'},
]
</script>

<template>
  <nav>
    <div class="flex container gap-4 mx-auto p-4 justify-between">
      <div class="flex-grow flex items-center gap-8">
        <!--logo-->
        <img class="h-10" src="../../assets/images/image.svg">
        <!--links-->
        <div class="hidden flex-grow xl:flex justify-between items-center">
          <ul class="flex gap-4">
            <li v-for="link in links" :key="`${link.label}-link`">
              <NuxtLink :to="link.to">{{link.label}}</NuxtLink>
            </li>
          </ul>
          <ul class="flex gap-4 items-center">
            <li>
              <NuxtLink to="/login">Login</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class=" flex items-center gap-4">
        <!--try button-->
        <button class="btn bg-neutral-800 text-white px-3 py-1">Try for free</button>
        <!--hamburger-->

        <div class="xl:hidden">
          <button
              @click="showingNavigationDropdown = !showingNavigationDropdown"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path
                  :class="{hidden: showingNavigationDropdown,'inline-flex': !showingNavigationDropdown}"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                  :class="{hidden: !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown,                    }"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <Dropdown v-model="showingNavigationDropdown" :links="links"/>
    </div>
  </nav>
</template>

<style scoped>

</style>
