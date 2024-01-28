<template>
  <div class="flex flex-col">
    <div class="mt-[100px]">
      <h2    class="main_title lg:pt-[36px]">Наши проекты</h2>
    </div>
    <div class="bg-[#242424] mt-[125px] rounded-[20px] bottom-24 relative z-10">
      <div class="flex flex-wrap items-center justify-center">
  
        <div data-aos="fade-down" :class="item.classblock" v-for="item of block" :key="item" class="relative mb-[54px] w-[80%] lg:w-1/3 h-[409px]">
          <img :id="'img_' + item.id"
            class="absolute transition-all duration-300 linear w-[200px] group-hover:w-[200px] group-hover:opacity-0 lg:w-[300px]"
            :src="item.img" alt="photo">
            <div class="line"></div>
          <img :id="'photo_' + item.id"
            class="absolute object-contain transition duration-1000 w-[150px] lg:w-[190px] opacity-0 invisible group-hover:opacity-100 group-hover:visible"
            :src="item.photo" alt="photo">
          <p :id="'name_' + item.id"
            class="text-mainG duration-500 md:max-w-[350px] xl:text-[20px] 2xl:text-[24px] font-normal text-center xl:w-[400px] 2xl:w-[450px] mt-[240px] group-hover:mt-[190px] w-[300px]">
            {{ item.name }}</p>
          <div
            class="lg:w-[70%] w-[60%] h-[48px] text-[#fff] flex justify-center items-center lg:bottom-[10px] opacity-0 absolute group-hover:opacity-[1] bottom-[50px] duration-700">
            <custom-button>Подробнее</custom-button>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import img1 from '../assets/img/image 44.webp'
import img2 from '../assets/img/есхата.webp'
import img3 from '../assets/img/image 45.webp'
import img4 from '../assets/img/image 45 (1).webp'
import img5 from '../assets/img/Aslpharm.webp'
import img6 from '../assets/img/AslpharmColor.webp'
import { ref } from 'vue'

const block = ref([
  { id: 1, img: img1, photo: img2, name: 'Проект по автоматизации отчетов НБТ Банка Эсхата выполняют высококвалифицированные специалисты FIN Gruop.', classblock: 'duration-500 flex flex-col mt-[10px] items-center  group relative overflow-hidden' },
  { id: 2, img: img3, photo: img4, name: 'Успешно завершился проект по внедрению ПО в компанию "Молочная радость"', classblock: 'duration-500 flex flex-col mt-[10px] items-center  group lg:border-x-[1px] lg:border-mainG relative' },
  { id: 3, img: img5, photo: img6, name: 'Aslpharm.tj - сайт разработан на платформе 1С-Битрикс. Имеет интеграцию с учетной программой 1С-Розница', classblock: 'duration-500 flex flex-col items-center  group relative' }
])
</script>

<style scoped>
#img_1{
  margin-top: 25px;
}
#img_2{
  margin-top: 30px;
  border: 1px 0 1px 0 solid white;
}
#photo_2{
  margin-top: 30px;
}
#img_3 {
  margin-top: 100px;
}
#img_3:hover {
  width: 240px;
}

#photo_3 {
  margin-top: 80px;
  width: 200px;
}

#photo_3:hover {
  text-shadow: 10px 0 0 10px grey;
}

#photo_1{
  margin-top: 60px;
}
#name_1,#name_2,#name_3{
  font-size: 16px ;
  padding: 0 20px;
}
@media screen and (max-width: 1024px) {
  #img_1,#img_2 {
    max-width: 240px;
    margin-top: 50px;
  }
}
@media screen and (min-width: 375px) {
    #name_1,#name_2,#name_3{
      font-size: 17px;
      width: 370px;

    }
}
@media screen and (max-width: 320px) {
  #name_1,#name_2,#name_3{
      font-size: 15px;
      width: 300px;
    }
}

@media screen and (max-width: 1024px) {
  .line {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #fff; 
    transition: all 0.3s ease;
    margin-top: -40px;
  }

  .block:hover .line {
    background-color: #fff
  }
}
</style>

 
<!-- data-aos="fade-up" -->