<script setup>
defineProps({
  active: Boolean,
  tab: Object
})
</script>

<template>
  <button
      :class=" active ? 'bg-white lg:bg-blue-300/5 text-accent hover:bg-white/90  lg:border-l lg:border-y lg:text-white lg:border-blue-200' : 'text-white/50' "
      class="text-left py-2 px-4 my-4 lg:my-0 lg:p-6 hover:bg-white hover:bg-opacity-15 lg:rounded-l-2xl rounded-full lg:rounded-none lg:hover:bg-blue-300/20 lg:hover:text-white ">
    <h4
        :class="active ? 'text-accent lg:text-white' : 'text-white'"
        class="text-lg  lg:mb-2 text-nowrap">{{ tab.title }}</h4>
    <p class="text-base leading-6 hidden lg:flex">{{ tab.description }}</p>
  </button>
</template>

<style scoped>

</style>
