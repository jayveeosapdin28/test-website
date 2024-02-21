<script setup>
const props = defineProps({
  src: String,
  alt: String,
});

const getImageUrl = (path) => {
  const pathArr = path.split('.');
  if (pathArr.length < 2) return undefined;

  const url = `../assets/images${pathArr[0]}.${pathArr[1]}`;

  return new URL(url, import.meta.url).href;
}
</script>

<template>
  <img :src="getImageUrl(props.src)" :alt="props.alt"/>
</template>
