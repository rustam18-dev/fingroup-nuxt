<template>
  <div class="bg-[#242424] flex flex-col justify-center items-center w-full">

    <div
      class="flex flex-row flex-wrap md:flex-nowrap max-w-[1420px] w-full sm:p-8 p-2 sm:justify-between justify-start mb-6">
      <div class="flex flex-col gap-y-3 text-white sm:mb-0 mb-4 pl-[10px] pt-2">
        <finGroupIcon />
        <h2 class="text-[15px]">Таджикистан, г. Худжанд,
          улица М. Танбӯрӣ, 9</h2>
        <h3>info@fingroup.tj</h3>
        <p class="flex flex-col">
          <span>+992 92-555-63-63</span>
          <span>+992 92-555-64-64</span>
        </p>
        <div class="flex gap-4 mt-2 ">
          <nuxt-icon name="footer/insta"
            class="transition-all duration-300 text-[34px] fill-[#3D3D3D] hover:fill-mainB cursor-pointer" filled />
          <nuxt-icon name="footer/tg"
            class="transition-all duration-300 text-[34px] fill-[#3D3D3D] hover:fill-mainB cursor-pointer" filled />
          <nuxt-icon name="footer/facebook"
            class="transition-all duration-300 text-[34px] fill-[#3D3D3D] hover:fill-mainB cursor-pointer" filled />
        </div>
      </div>

      <div class="flex text-mainG">
        <div class="mt-2">
          <footerImgService />
        </div>
        <div class="flex flex-col gap-4 text-[12px] sm:text-[16px]">
          <h1 class="text-white sm:text-[24px] text-[18px]">Услуги</h1>
          <p class="md:w-full w-[160px]">Автоматизация бизнес процессов</p>
          <p>Консультация</p>
          <p>Продвижение сайтов</p>
          <p>Продвижение сайтов</p>
          <p>Бизнес аудит</p>
        </div>
      </div>

      <div class="flex text-mainG">
        <div class="mt-2">
          <footerImgProduct />
        </div>
        <div class="flex flex-col gap-4 text-[12px] sm:text-[16px]">
          <h1 class="text-white sm:text-[24px] text-[18px]">Продукты</h1>
          <p>1С:Бухгалтерия</p>
          <p>Мой склад</p>
          <p>1С:Бухгалтерия 8</p>
          <p>1С:Розница 8</p>
          <p>Мобильная торговля 1С</p>
        </div>
      </div>
    </div>

    <div class="max-w-[1420px] border-t-2 w-full py-6 sm:pl-0 pl-2">
      <h6 class="text-mainG md:text-base text-sm">
        ©2023 ООО «Fin Group»
      </h6>
    </div>
  </div>
</template>

<script setup>
import finGroupIcon from './Icons/finGroupIcon.vue'

import footerImgProduct from './Icons/footerImgProduct.vue';
import footerImgService from './Icons/footerImgService.vue';


</script>

<style scoped></style>