<script setup lang="ts">

import Topnav from "~/components/navigators/topnav.vue";
import Botnav from "~/components/navigators/botnav.vue";
</script>

<template>
<div>
  <topnav/>
  <slot/>
  <botnav/>
</div>
</template>

<style scoped>

</style>
