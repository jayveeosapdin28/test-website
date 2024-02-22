<script setup >
const { data } = await useFetch('/api/pricing')
</script>

<template>
  <section id="pricing" class="section bg-gradient-to-b px-12 from-[#0E142F] to-[#0E142F]/90 overflow-hidden">
    <div class="max-w-5xl mx-auto">
      <div class="text-center text-white">
        <h2 class="h2 text-center text-white">Maximizing value in every plan.</h2>
        <p>Explore our scalable recruitment solution with a 14-day free trial and a 30-day 100% money-back
          guarantee.</p>
      </div>
      <div class="mt-16 ">
        <ul class="grid lg:gap-6 lg:grid-cols-3">
          <template v-for="(item, index) in data" :key="`pricing-${index}`">
            <li>
              <div
                  :class="{'bg-accent/10 border border-accent rounded-3xl ': item.popular}"
                  class="text-neutral-300 p-6 relative">
                <div  class="pb-6 flex h-14 animate-pulse">
                  <p v-if="item.popular" class="bg-neutral-800 rounded-full px-4  text-sm py-1">Most Popular</p>
                </div>
                <h4 class="h4 font-light text-white">{{ item.plan }}</h4>
                <p class="font-light text-sm">Chanel: {{ item.channels.join(', ') }}</p>

                <div class="mt-8 flex flex-col">
                  <p class="font-light text-sm">Starting at</p>
                  <div class="flex items-center gap-2">
                    <h2 class="h2 text-white">{{ item.price }}</h2>
                    <div class="flex flex-col ">
                      <p class="leading-4 font-light">per <br> month</p>
                    </div>
                  </div>
                  <p class="leading-4 font-light">Billed monthly based on usage</p>
                </div>
                <div class="py-4">
                  <NuxtLink class="btn btn-lg bg-accent text-white py-2">Start Trial</NuxtLink>
                </div>
                <div class="mt-2">
                  <p class="leading-4 font-light mb-4">This includes:</p>
                  <ul>
                    <template v-for="feature in item.features">
                      <li class="flex items-start gap-2 mb-2">
                        <div class="mt-1">
                          <svg class="InlineSVG Icon PriceColumn-check Icon--sm" focusable="false" fill="#ffffff"
                               color="#ffffff" fill-opacity="0.7" height="16" viewBox="0 0 16 16" width="16">
                            <path
                                d="m8 16c-4.418278 0-8-3.581722-8-8s3.581722-8 8-8 8 3.581722 8 8-3.581722 8-8 8zm3.0832728-11.00479172-4.0832728 4.09057816-1.79289322-1.79289322c-.39052429-.39052429-1.02368927-.39052429-1.41421356 0s-.39052429 1.02368927 0 1.41421356l2.5 2.50000002c.39052429.3905243 1.02368927.3905243 1.41421356 0l4.79037962-4.79768495c.3905243-.3905243.3905243-1.02368927 0-1.41421357-.3905243-.39052429-1.0236893-.39052429-1.4142136 0z"
                                fill-rule="evenodd"></path>
                          </svg>
                        </div>
                        <p class="leading-6"> {{ feature }}</p>
                      </li>
                    </template>
                  </ul>
                </div>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
