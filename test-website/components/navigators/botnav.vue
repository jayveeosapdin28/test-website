<script setup lang="ts">
defineProps({
  links: Array,
})

</script>

<template>
  <footer>
    <div class="flex justify-center">
      <div>
        <!--logo-->
        <div class="text-center flex justify-center">
          <img class="h-10" src="/assets/img/image.svg">
        </div>
        <!--links-->
        <div class="mt-6">
          <ul>
            <ul class="flex  gap-x-6">
              <li v-for="link in links" :key="`${link.label}-link`">
                <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
    <div class="container mx-auto mt-8 ">
      <hr class="text-secondary/20">
      <div class="flex justify-between py-8 text-sm items-center">
        <p>Copyright ©2024HireData. All rights reserved.</p>
        <div>
          <NuxtLink to="https://www.linkedin.com/company/hiredata-improve-every-day/">
            <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512">
              <path
                  d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path>
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>
