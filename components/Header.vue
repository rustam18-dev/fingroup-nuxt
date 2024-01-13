<template>
  <div class="h-[90px] w-full bg-[#1A1A1A] pt-[20px] sticky top-0 z-50">
    <div class="flex justify-between items-center container mx-auto 2xl:px-[70px] px-[20px]">
      <div>
        <img src="../assets/img/325359946.png" alt="photo">
      </div>
      <button @click="isSidebar = true" class="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(22,140,228,1)"><rect class="translate-x-[4px] translate-y-[4px]" width="18" height="2" /><rect class="" x="9" y="11" width="13" height="2" /><rect class="translate-x-[4px] translate-y-[17px] " width="18" height="2" /></svg>
      </button>
      <div class="lg:flex hidden" >
        <ol class="flex items-center font-Montserrat xl:gap-x-[70px] gap-[30px]">
          <li class="header_text">О компании</li>
          <li class="header_text">Услуги</li>
          <li class="header_text">Проекты</li>
          <li class="header_text">Продукты</li>
          <li class="header_text mr-[50px]">Контакты</li>
        </ol>
        <button
          class="rounded-[50px] bg-[#168CE4] text-[#fff] text-[16px] font-semibold px-[24px] py-[11px] h-[48px] ">Оставить
          заявку</button>
      </div>
    </div>
    <Sidebar @isSidebar="isSidebar = false" v-if="isSidebar"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isSidebar = ref(false)
</script>

<style scoped>
.header_text {
  @apply text-[18px] text-[#666] font-normal cursor-pointer hover:text-[#168CE4]
}
</style>
