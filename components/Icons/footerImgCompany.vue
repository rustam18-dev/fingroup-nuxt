<template>
  <svg class="fill-white" width="24" height="55" fill="none" viewBox="0 0 24 292" xmlns="http://www.w3.org/2000/svg">
    <rect x="11" width="8" height="253" :fill="isColor ? '#168CE4' : '#fff'" />
    <rect x="11" y="268" width="8" height="55" fill="#168CE4" />
    <rect x="21" y="266" width="8" height="46" transform="rotate(90 24 279)" fill="#168CE4" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue';

const { isColor } = defineProps(['isColor']);
</script>
