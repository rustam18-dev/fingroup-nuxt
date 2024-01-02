<template>
  <div class="bg-[#242424] mt-[125px] mx-[10px] rounded-[20px] h-[663px]">
    <p class="text-mainB text-[60px] font-bold leading-[85px] pt-[56px] pl-[82px]">Наши проекты</p>
    <div class="flex">

      <div :class="item.classblock" v-for="item of block" :key="item">
        <img :id="'img_' + item.id" class="absolute transition duration-1000 ease-in-out group-hover:opacity-0 group-hover:invisible" :src="item.img" alt="photo">
        <img :id="'photo_' + item.id" class="absolute object-cover transition duration-1000 opacity-0 invisible group-hover:opacity-100 group-hover:visible" :src="item.photo" alt="photo">
        <p class="text-mainG duration-500 text-[24px] font-normal leading-[40px] text-center w-[400px] group-hover:mt-[150px] mt-[235px]">{{ item.name }}</p>
        <button class="rounded-[10px] border-[1.5px] border-mainB w-[70%] h-[48px] text-[#fff] bottom-4 opacity-0 absolute group-hover:opacity-[1] group-hover:block duration-700">Подробнее</button>
      </div>

    </div>
  </div>
</template>

<script setup>
import img1 from '../assets/img/image 44.png'
import img2 from '../assets/img/есхата.png'
import img3 from '../assets/img/image 45.png'
import img4 from '../assets/img/image 45 (1).png'
import img5 from '../assets/img/Aslpharm.png'
import img6 from '../assets/img/AslpharmColor.png'
import {ref} from 'vue'
const block = ref([
  { id: 1, img: img1, photo: img2, name: 'Проект по автоматизации отчетов НБТ Банка Эсхата выполняют высококвалифицированные специалисты FIN Gruop.', classblock: 'w-[473px] h-[409px] duration-500 flex flex-col mt-[100px] items-center  group relative overflow-hidden'},
  { id: 2, img: img3, photo: img4 , name: 'Успешно завершился проект по внедрению ПО в компанию "Молочная радость"', classblock: 'w-[473px] h-[409px] duration-500 flex flex-col mt-[100px] items-center  group border-x-[1px] border-mainG relative'},
  { id: 3, img: img5, photo: img6, name: 'Aslpharm.tj - сайт разработан на платформе 1С-Битрикс. Имеет интеграцию с учетной программой 1С-Розница', classblock: 'w-[473px] h-[409px] duration-500 flex flex-col mt-[100px] items-center  group relative'}

])
</script>

<style scoped>
 #img_3{
  width: 300px;
  margin-top: 50px;
 }
 #photo_3{
  margin-top: 50px;
  width: 280px;
 }
 #photo_3:hover{
  text-shadow: 10px 0 0 10px grey;
 }

</style>