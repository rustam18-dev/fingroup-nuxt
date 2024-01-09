<template>
  <div class="bg-[#242424]">
    <div class="flex justify-center">

      <div class="cursor-pointer">
        <img class="mt-[50px] " src="../assets/img/325359946.png" alt="photo">
        <h1 class="text-[#fff] text-[24px] font-medium leading-[35px] w-[300px] mt-[50px]">Таджикистан, г. Худжанд, улица
          М. Танбӯрӣ, 9</h1>
        <h2 class="text-[#fff] text-[24px] font-medium leading-[35px] mt-[25px]">info@fingroup.tj</h2>
        <h3 class="text-[#fff] text-[24px] font-medium leading-[35px] mt-[25px]">+992 92-555-63-63</h3>
        <h4 class="text-[#fff] text-[24px] font-medium leading-[35px]">+992 92-555-64-64</h4>
        <div class="flex gap-[40px] mt-[50px]">
          <img class="grayscale hover:grayscale-0 duration-300" src="./Icons/insta.png" alt="photo">
          <img class="grayscale hover:grayscale-0 duration-300" src="./Icons/tellegram.png" alt="photo">
          <img class="grayscale hover:grayscale-0 duration-300" src="./Icons/facebook.png" alt="photo">
        </div>
      </div>

      <div class="flex mt-[50px]">

        <div>
          <footerImgService :class="`transition-all ${heightServicesIcon}`" :isColor="isColor"/>
        </div>

        <div class="cursor-pointer">
          <h1 class="text-[#fff] text-[24px] font-medium leading-[19px] pl-[30px]">Услуги</h1>
          <ul class="text-mainG text-[20px] font-normal leading-[16px] pt-[40px] pl-[30px]">
            <li class="pb-[30px] hover:text-mainB" @mouseenter="heightServicesIcon = 'h-[75px] fill-[#168CE4]'; isColor = true"  @mouseleave="isColor = false"> Бизнес тренинг</li>
            <li class="pb-[30px] hover:text-mainB" @mouseenter="heightServicesIcon = 'h-[125px] fill-[#168CE4]'; isColor = true" @mouseleave="isColor = false">Автоматизация бизнес процессов</li>
            <li class="pb-[30px] hover:text-mainB" @mouseenter="heightServicesIcon = 'h-[170px] fill-[#168CE4]'; isColor = true" @mouseleave="isColor = false">Стратегическое и операционное консультирование</li>
            <li class="pb-[30px] hover:text-mainB" @mouseenter="heightServicesIcon = 'h-[215px] fill-[#168CE4]'; isColor = true" @mouseleave="isColor = false">Продвижение сайтов</li>
            <li class="pb-[30px] hover:text-mainB" @mouseenter="heightServicesIcon = 'h-[260px] fill-[#168CE4]'; isColor = true" @mouseleave="isColor = false">Бизнес аудит</li>
          </ul>
        </div>

      </div>

      <div>

        <div class="flex mt-[50px]">
          <div>
            <footerImgProduct :class="`transition-all ${heightServicesIcon}`" :isColor="isColor"/>
          </div>
          <div class="cursor-pointer">
            <h2 class="text-[#fff] text-[24px] font-medium leading-[19px] ml-[30px]">Продукты</h2>
            <ol class="text-mainG text-[20px] font-normal leading-[16px] pt-[40px] pl-[30px]  ">
              <li class="pb-[30px] hover:text-mainB">1С:Бухгалтерия</li>
              <li class="pb-[30px] hover:text-mainB">Мой склад</li>
              <li class="pb-[30px] hover:text-mainB">1С:Бухгалтерия 8</li>
              <li class="pb-[30px] hover:text-mainB">1С:Розница 8</li>
              <li class="pb-[30px] hover:text-mainB">Мобильная торговля 1С</li>
            </ol>
          </div>
        </div>

        <div class="flex mt-[60px]">
          <div>
            <fotericon />
          </div>
          <div class="cursor-pointer">
            <h1 class="text-[#fff] text-[24px] font-medium leading-[19px] ml-[30px]">Компания</h1>
            <h2 class="text-mainG text-[20px] font-normal leading-[16px] pt-[40px] pl-[30px] hover:text-mainB">Проекты
            </h2>
          </div>
        </div>

      </div>

    </div>
    <hr class="w-[1200px] mt-[60px] mx-auto">
    <div class="flex mx-auto w-[1200px]">
      <p class="text-mainG text-[20px] font-normal leading-[16px] mt-[60px] pb-[60px] cursor-pointer">©2023 ООО «Fin
        Group»</p>
    </div>
  </div>
</template>

<script setup>


import footerImgProduct from './Icons/footerImgProduct.vue';
import footerImgService from './Icons/footerImgService.vue';
import fotericon from './Icons/fotericon.vue'

const heightServicesIcon = ref('h-[75px]')
const isColor = ref(false)


</script>

<style scoped></style>