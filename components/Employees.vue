<template>
  <div class="flex flex-col mt-[189px]">
    <div class="flex flex-col gap-[40px] mb-[64px]">
      <h2 class="main_title">Наши сотрудники</h2>
      <span class="text">Команда профессионалов</span>
    </div>
    <div class="grid grid-cols-2 gap-[40px]">
      <div v-for="info in employeesInfo" :key="info.id" class="w-full z-[50]">
        <CardEmployees :title="info.title" :img="info.img" :jobTitle="info.jobTitle"/>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center w-full mt-[50px]">
      <CustomButton class="w-full z-50" theme="light">Все сотрудники</CustomButton>
    </div>
  </div>
</template>

<script setup>
import img1 from '../assets/img/1.png'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/3.png'
import img4 from '../assets/img/4.png'

const employeesInfo = ref([
  {id: 1, img: img1, title: 'Ахмедов Маҳмудҷон', jobTitle: 'Основатель'},
  {id: 2, img: img2, title: 'Иномҷонов Муҳаммадҷон', jobTitle: 'Директор'},
  {id: 3, img: img3, title: 'Самебоев Қосимҷон', jobTitle: '1C разработчик'},
  {id: 4, img: img4, title: 'Давронзода Шероз', jobTitle: '1C разработчик'}
]);
</script>

<style scoped>
.text{
  @apply text-mainG text-[26px] leading-[40px] 
}
.title{
  @apply text-mainB font-bold text-[50px] leading-[60px]
}
</style>