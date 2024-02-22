<script setup >
const { data } = await useFetch('/api/faq')
</script>

<template>
  <section class="section p-4">
    <div class="container mx-auto">
      <div class="max-w-2xl">
        <h2 class="h2">Frequently asked questions</h2>
        <p>If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you.</p>
      </div>
      <div class="gap-16 sm:columns-2 lg:columns-3 mt-16">
        <template v-for="(item,index) in data" :key="`faq-${index}`">
         <div class="mb-6">
           <h5 class="text-lg font-normal leading-6 mb-2">{{item.question}}</h5>
           <div v-html="item.answer" class="leading-6"></div>
         </div>
        </template>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
