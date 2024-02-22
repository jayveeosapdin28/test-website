<script setup lang="ts">
const { data } = await useFetch('/api/feature')
</script>

<template>
<section class="section">
  <div class="container mx-auto flex flex-col">
    <div class="text-center max-w-3xl mx-auto">
      <h2 class="h2 text-center mb-12">
        Simplify everyday hiring tasks.
      </h2>
      <p class="text-lg">
        HireData is designed to streamline your recruitment operations, freeing you to focus on securing top talent
      </p>
    </div>
    <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 mt-8">
      <template v-for="item in data">
        <div>
          <div class="flex justify-center">
            <div class="flex  justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <img :src="`/_nuxt/assets/img/secondary_feature/${item.icon}.png`" :alt="item.icon" class="w-full h-full object-contain">
            </div>
          </div>
          <h3 class="mb-2 text-xl font-bold text-center dark:text-white">{{item.title}}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-center">{{item.description}}</p>
        </div>
      </template>
    </div>
  </div>
</section>
</template>

<style scoped>

</style>
