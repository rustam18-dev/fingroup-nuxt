<template>
  <div class="bg-[#242424] mt-[125px] mx-[20px] rounded-[20px] relative z-50">
    <h2 data-aos="fade-up" class="main_title">Наши проекты</h2>
    <div class="flex flex-wrap items-center justify-center  ">

      <div data-aos="fade-down" :class="item.classblock" v-for="item of block" :key="item" class="relative mb-[54px] w-[80%]  lg:w-1/3  h-[409px]">
        <img :id="'img_' + item.id"
          class="absolute transition-all duration-300 linear w-[300px] group-hover:w-[200px] group-hover:opacity-0"
          :src="item.img" alt="photo">
        <img :id="'photo_' + item.id"
          class="absolute object-contain transition duration-1000 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
          :src="item.photo" alt="photo">
        <p :id="'name_' + item.id"
          class="text-mainG duration-500 xl:text-[20px]  2xl:text-[24px] font-normal leading-[25px] text-center lg:group-hover:mt-[160px] lg:mt-[235px] lg:w-[300px] xl:w-[400px] 2xl:w-[450px] mt-[240px] group-hover:mt-[150px] w-[300px]">
          {{ item.name }}</p>
        <div
          class="lg:w-[70%] w-[60%] h-[48px] text-[#fff] flex justify-center items-center lg:bottom-[10px] opacity-0 absolute group-hover:opacity-[1] bottom-[50px] duration-700">
          <custom-button>Подробнее</custom-button>
        </div>
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
import { ref } from 'vue'

const block = ref([
  { id: 1, img: img1, photo: img2, name: 'Проект по автоматизации отчетов НБТ Банка Эсхата выполняют высококвалифицированные специалисты FIN Gruop.', classblock: 'duration-500 flex flex-col mt-[100px] items-center  group relative overflow-hidden' },
  { id: 2, img: img3, photo: img4, name: 'Успешно завершился проект по внедрению ПО в компанию "Молочная радость"', classblock: 'duration-500 flex flex-col mt-[10px] items-center  group lg:border-x-[1px] lg:border-mainG relative' },
  { id: 3, img: img5, photo: img6, name: 'Aslpharm.tj - сайт разработан на платформе 1С-Битрикс. Имеет интеграцию с учетной программой 1С-Розница', classblock: 'duration-500 flex flex-col items-center  group relative' }
])
</script>

<style scoped>
#img_2{
  margin-top: 30px;
}
#photo_2{
  margin-top: 30px;
}
#img_3 {
  /* width: 240px; */
  margin-top: 100px;
}
#img_3:hover {
  width: 240px;
  /* margin-top: 50px; */
}

#photo_3 {
  margin-top: 80px;
  width: 200px;
}

#photo_3:hover {
  text-shadow: 10px 0 0 10px grey;
}

#name_2{
  padding-top: 50px;
}
#name_3{
  padding-top: 60px;
}
</style>

 
