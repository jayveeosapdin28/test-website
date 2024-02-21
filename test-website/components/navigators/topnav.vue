<script setup lang="ts">

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
            <li>
              <NuxtLink to="/">Features</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Testimonial</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/">Pricing</NuxtLink>
            </li>
          </ul>
          <ul class="flex gap-4 items-center">
            <li>
              <NuxtLink to="/">Login</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <div class=" flex items-center gap-4">
        <!--try button-->
        <button class="btn bg-neutral-800 text-white px-3 py-1">Try for free</button>
        <!--hamburger-->
        <div class="xl:hidden">
          <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path

                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
            <!--          <path-->
            <!--              stroke-linecap="round"-->
            <!--              stroke-linejoin="round"-->
            <!--              stroke-width="2"-->
            <!--              d="M6 18L18 6M6 6l12 12"-->
            <!--          />-->
          </svg>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>
