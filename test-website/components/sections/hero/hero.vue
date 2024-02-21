<script setup lang="ts">

const logoNames = [
  'bullhorn_logo',
  'carerix_logo',
  'jobadder_logo',
  'otys_logo',
  'salesforce_logo',
  'vincere_logo',
];

</script>

<template>
  <section class="section">
    <div class="flex justify-center items-center min-h-[40vh]">
      <div class="flex flex-col items-center max-w-5xl">
        <h1 class="h1">Scale Recruitment</h1>
        <h1 class="h1 text-accent">by Automating Stuff.</h1>
        <p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-pretty  text-center">
          Supercharge your ATS, CRM or VMS by engaging 1,000s of existing and new candidates via their favourite
          communication channel(s) in seconds. And automate the boring stuff that keep your recruiters busy all day.</p>
        <ul class="flex items-center mt-10 gap-x-6">
          <li>
            <NuxtLink to="https://app.hiredata.com/login">Login</NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://hiredata.com/register" class="btn btn-dark">Try for free</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-20 lg:mt-44">
      <p class="font-display text-center text-base text-slate-900"> Supercharge your favourite ATS, CRM
        or HRIS with HireData
      </p>
      <ul
          class="mt-8 grid grid-cols-2 lg:grid-cols-6 gap-8 ">
       <template v-for="logo in logoNames">
         <li class="flex justify-center">
           <img :src="`/_nuxt/assets/img/${logo}.svg`" :alt="logo">
         </li>
       </template>
      </ul>

    </div>
  </section>
</template>

<style scoped>

</style>
