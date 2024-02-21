<script setup lang="ts">

import FeatureTabItem from "~/components/sections/feature/partials/featureTabItem.vue";

const tabs = [
  {
    title: 'Unified Multi-Channel Communication',
    description: 'Manage all your recruitment conversations in one place, with our integrated inbox that supports web/chat, email, and WhatsApp for seamless interaction with candidates.',
    img: 'feature1'
  },
  {
    title: ' Recruitment Automation',
    description: 'Accelerate and streamline your hiring process with our robust automation, minimizing manual tasks and enabling you to focus on decision-making and strategic tasks.',
    img: 'feature2'
  },
  {
    title: 'Customizable Workflows',
    description: 'Create and customize your recruitment workflows to ensure a smooth transition from one hiring stage to the next, improving efficiency and candidate experience.',
    img: 'feature3'
  },
  {
    title: 'Data-Driven Analytics',
    description: 'Leverage our comprehensive, data-driven reports to gain valuable insights into your hiring process, helping you to make informed decisions and continually improve your recruitment strategy',
    img: 'feature4'
  },
]
const active_tab = ref(0)
</script>

<template>
  <div class="grid grid-cols-12">
    <div class="col-span-12 lg:col-span-5 py-14">
      <ul class="flex gap-x-4 lg:flex-col scroll overflow-x-auto lg:overflow-hidden">
        <template v-for="(tab,index) in tabs" :key="`feature-tab-${index}`">
          <li >
            <FeatureTabItem :active="index === active_tab" @click="active_tab = index" :tab="tab" />
          </li>
        </template>
      </ul>
    </div>
    <div class="col-span-12 lg:col-span-7 h-[37rem]  relative">
      <template v-for="(tab,index) in tabs" :key="`feature-img-tab-${index}`">
        <div v-if="index === active_tab"  class="lg:hidden">
          <p class="text-white leading-6  lg:hidden">{{ tab.description }}</p>
        </div>
        <div v-if="index === active_tab" class="w-[45rem] lg:w-[69rem] mt-24 lg:mt-0 rounded-xl shadow-lg absolute left-0 top-0 overflow-hidden">
          <img :src="`/_nuxt/assets/img/features/${tab.img}.png`" class="w-full h-full object-contain">
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>


</style>
