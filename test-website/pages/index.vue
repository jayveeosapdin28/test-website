<script setup lang="ts">

import Hero from "~/components/sections/hero/hero.vue";
import PrimaryFeature from "~/components/sections/feature/primaryFeature.vue";
import SecondaryFeature from "~/components/sections/feature/secondaryFeature.vue";
import Cta from "~/components/sections/cta/cta.vue";
import Testimonial from "~/components/sections/testimonial/testimonial.vue";
import Pricing from "~/components/sections/pricing/pricing.vue";
import Faq from "~/components/sections/faq/faq.vue";
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
  <!--testimonial-->
  <Testimonial/>
  <!--pricing-->
  <Pricing/>
  <!--faq-->
  <Faq/>

</template>

<style scoped>

</style>
