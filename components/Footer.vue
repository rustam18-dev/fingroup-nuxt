<template>
  <div class="bg-[#242424] flex justify-center h-screen">

    <div class="flex max-w-[1420px] w-full p-8 justify-between">
      <div class="text-white">
        <finGroupIcon />
        <h2>Таджикистан, г. Худжанд,
          улица М. Танбӯрӣ, 9</h2>
        <h3>info@fingroup.tj</h3>
        <p class="flex flex-col">
          <span>+992 92-555-63-63</span>
          <span>+992 92-555-64-64</span>
        </p>
        <div class="flex gap-4 mt-2 ">
          <nuxt-icon name="footer/insta" class="transition-all duration-300 text-[34px] fill-[#3D3D3D] hover:fill-mainB cursor-pointer" filled/>
          <nuxt-icon name="footer/tg" class="transition-all duration-300 text-[34px] fill-[#3D3D3D] hover:fill-mainB cursor-pointer" filled/>
          <nuxt-icon name="footer/facebook" class="transition-all duration-300 text-[34px] fill-[#3D3D3D] hover:fill-mainB cursor-pointer" filled/>
        </div>
      </div>

      <div class="flex text-mainG">
        <div class="mt-2">
          <footerImgService />
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="text-white text-[24px]">Услуги</h1>
          <p>Автоматизация бизнес процессов</p>
          <p>Консультация</p>
          <p>Продвижение сайтов</p>
          <p>Продвижение сайтов</p>
          <p>Бизнес аудит</p>
        </div>
      </div>

      <div class="flex text-mainG">
        <div class="mt-2">
          <footerImgService />
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="text-white text-[24px]">Продукты</h1>
          <p>1С:Бухгалтерия</p>
          <p>Мой склад</p>
          <p>1С:Бухгалтерия 8</p>
          <p>1С:Розница 8</p>
          <p>Мобильная торговля 1С</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import finGroupIcon from './Icons/finGroupIcon.vue'

import footerImgProduct from './Icons/footerImgProduct.vue';
import footerImgService from './Icons/footerImgService.vue';

const heightServicesIcon = ref('h-[260px]')
const heightProductIcon = ref('h-[260px]')
const isColorService = ref(false)
const isColorProduct = ref(false)


</script>

<style scoped></style>