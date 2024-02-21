<template>
  <Transition name="nested">
    <div
        class="fixed top-0 left-0 w-full h-full bg-blue-100 bg-opacity-60 flex justify-center outer z-50"
        v-if="internalModel"
        @click="internalModel = false"
    >
      <div class="w-full p-8  relative top-14 inner">
        <div class="bg-white rounded-xl shadow-lg p-6">
         <ul class="flex flex-col gap-4">
           <li v-for="link in links" :key="`${link.label}-link`">
             <NuxtLink :to="link.to">{{link.label}}</NuxtLink>
           </li>
           <li>
             <hr class="text-neutral-200">
           </li>
           <li>
             <NuxtLink to="/login">Login</NuxtLink>
           </li>
         </ul>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import {computed, defineProps, defineEmits} from 'vue';

const props = defineProps({
  modelValue: Boolean,
  links: Object
})

const emit = defineEmits(['update:modelValue'])

const internalModel = computed({
  set: (val) => {
    emit('update:modelValue', val)
  },
  get: () => props.modelValue
});

</script>

<style scoped>

.nested-enter-active, .nested-leave-active {
  transition: all 0.2s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  opacity: 0;
}


.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.2s ease-in-out;
}

.nested-enter-active .inner {
  transition: all 0.2s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateY(-30px);
  opacity: 0.001;
}
</style>
