<template>
  <div class="">
    <div class="flex flex-col gap-[40px] mb-[64px]">
      <h2 class="main_title">Наши сотрудники</h2>
      <span class="text">Команда профессионалов</span>
    </div>
    <div class="grid grid-cols-2 gap-[40px]">
      <div v-for="info in employeesInfo" :key="info.id" class="w-full z-[50]">
        <CardEmployees :title="info.title" :img="info.img" :jobTitle="info.jobTitle"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import img1 from '../assets/img/1.png'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/3.png'
import img4 from '../assets/img/4.png'
import CardEmployees from './CardEmployees.vue';
import { ref } from 'vue'

const employeesInfo = ref([
  {id: 1, img: img1, title: 'Ахмедов Маҳмудҷон', jobTitle: 'Основатель FinGroup'},
  {id: 2, img: img2, title: 'Иномҷонов Муҳаммадҷон', jobTitle: 'Директор FinGroup'},
  {id: 3, img: img3, title: 'Самебоев Қосимҷон', jobTitle: '1C разработчик'},
  {id: 4, img: img4, title: 'Давронзода Шероз', jobTitle: '1C разработчик'}
]);
</script>

<style scoped>
.main_title{
  @apply text-mainB font-bold text-[60px] leading-[85px]
}
.text{
  @apply text-mainG text-[26px] leading-[40px] 
}
.title{
  @apply text-mainB font-bold text-[50px] leading-[60px]
}
</style>