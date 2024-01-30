<template>
  <div class="h-[90px] w-full bg-[#1A1A1A] pt-[20px] sticky top-0 z-50">
    <div class="flex justify-between items-center container mx-auto 2xl:px-[70px] px-[20px]">
      <div>
        <NuxtLink to="/">
          <img src="../assets/img/logo.webp" alt="photo">
        </NuxtLink>
      </div>
      <button @click="isSidebar = true" class="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(22,140,228,1)">
          <rect class="translate-x-[4px] translate-y-[4px]" width="18" height="2" />
          <rect class="" x="9" y="11" width="13" height="2" />
          <rect class="translate-x-[4px] translate-y-[17px] " width="18" height="2" />
        </svg>
      </button>
      <div class="lg:flex hidden">
        <ol class="flex items-center font-Montserrat xl:gap-x-[70px] gap-[30px]">
          <NuxtLink to="/">
            <li class="header_text" :style="{ color: isActive('') }">О компании</li>
          </NuxtLink>
          <NuxtLink to="/service">
            <li class="header_text" :style="{ color: isActive('service') }">Услуги</li>
          </NuxtLink>
          <NuxtLink to="/projects">
            <li class="header_text" :style="{ color: isActive('projects') }">Проекты</li>
          </NuxtLink>
          <NuxtLink to="/partners">
            <li class="header_text" :style="{ color: isActive('partners') }">Партнеры</li>
          </NuxtLink>
          <NuxtLink to="/contacts">
            <li class="header_text mr-[50px]" :style="{ color: isActive('contacts') }">Контакты</li>
          </NuxtLink>
        </ol>
        <button class="rounded-[50px] bg-[#168CE4] text-[#fff] text-[16px] font-semibold px-[24px] py-[11px] h-[48px]"
                @click="modalApplication.isOpenModalApplicationStore()">
          Оставить заявку
        </button>
      </div>
    </div>
    <Sidebar @isSidebar="isSidebar = false" v-if="isSidebar" />
  </div>
  <ModalApplication v-if="modalApplication.isModalApplication" data-aos="fade-up" data-aos-anchor-placement="top-center"
    @close="modalApplication.isOpenModalApplicationStore()" />
</template>

<script setup>
import { ref } from 'vue'
import {useModalApplication} from "~/store/ModalApplicationStore.js";
const isSidebar = ref(false)
const route = useRoute()
const modalApplication = useModalApplication()

const isActive = (item) => {
  if (route.path === '/' + item) return '#168CE4'
  return route.path === '/' + item ? '#168CE4' : ''
}


watch(() => modalApplication.isModalApplication, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});

</script>

<style scoped>
.header_text {
  @apply text-[18px] text-[#666] font-normal cursor-pointer hover:text-[#168CE4]
}
</style>
