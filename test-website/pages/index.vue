<script setup lang="ts">

import Hero from "~/components/sections/hero/hero.vue";
import PrimaryFeature from "~/components/sections/feature/primaryFeature.vue";
import SecondaryFeature from "~/components/sections/feature/secondaryFeature.vue";
import Cta from "~/components/sections/cta/cta.vue";
</script>

<template>
  <!--hero-->
  <div class="container mx-auto">
    <Hero/>
  </div>
  <!--feature-->
  <PrimaryFeature/>
  <SecondaryFeature/>

  <!--cta-->
  <Cta/>

</template>

<style scoped>

</style>
