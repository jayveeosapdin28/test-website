<script setup lang="ts">

import Topnav from "~/components/navigators/topnav.vue";
import Botnav from "~/components/navigators/botnav.vue";

const links = [
  {label: 'Features', to: '#features'},
  {label: 'Testimonial', to: '#testimonial'},
  {label: 'Pricing', to: '#pricing'},
]
</script>

<template>
  <div class="smooth-scroll">
    <Topnav :links="links"/>
    <slot/>
    <Botnav :links="links"/>
  </div>
</template>

<style scoped>

</style>
