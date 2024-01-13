<template>
  <svg class="sm:h-[262px] h-[187px]" width="24" fill="white" viewBox="0 0 24 292" xmlns="http://www.w3.org/2000/svg">
    <rect x="11" width="2" height="253" :fill="isColor ? '#168CE4' : '#fff'" />
    <rect x="11" y="268" width="2" height="24" fill="#168CE4" />
    <rect x="24" y="279" width="2" height="24" transform="rotate(90 24 279)" fill="#168CE4" />
  </svg>
</template>

<script setup>
import { defineProps } from 'vue';

const { isColor } = defineProps(['isColor']);
</script>
