<template>
  <div class="mt-[125px] relative z-[10]">
    <h2 class="main_title">Наши достижения</h2>
    <div class="flex w-full gap-[75px] mt-[65px] mb-[125px]">
      <div v-for="achievement in achievements" :key="achievement.id" class="back cursor-pointer rounded-[15px]">
        <img :src="achievement.img" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '../assets/img/achievements1.png'
import img2 from '../assets/img/achievements2.png'
import img3 from '../assets/img/achievements3.png'
import img4 from '../assets/img/achievements4.png'

const achievements = ref([
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
])

</script>

<style scoped>
.back {
  transition: box-shadow 0.4s, transform 0.4s;
  transform-origin: center bottom;
}

.back:hover {
  box-shadow: 0px 0px 40px 0px rgba(255, 255, 255, 0.25);
  transform: scale(1.03);
}
</style>