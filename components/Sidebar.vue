<template>
  <div data-aos="fade-left" class="overlay" @click="closeModal($event)">
    <div class="bg-white w-[70%] h-screen absolute top-0 right-0 bottom-0">
      <div class="flex justify-between border-b border-[#D9D9D9] p-4">
        <img src="../assets/svg/logo_black.webp" alt="photo">
        <button @click="$emit('isSidebar')" class="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(22,140,228,1)">
            <rect class="translate-x-[4px] translate-y-[4px] rotate-45" width="18" height="2" />
            <rect class="translate-x-[3px] translate-y-[17px] -rotate-45" width="18" height="2" />
          </svg>
        </button>
      </div>
      <div class="p-4">
        <ol class="flex flex-col items-end font-Montserrat gap-y-[25px] pr-[20px]">
          <NuxtLink to="/">
            <li @click="$emit('isSidebar');" class="header_text">О компании</li>
          </NuxtLink>
          <NuxtLink to="/service">
            <li @click="$emit('isSidebar');" class="header_text">Услуги</li>
          </NuxtLink>
          <NuxtLink to="/projects">
            <li @click="$emit('isSidebar');" class="header_text">Проекты</li>
          </NuxtLink>
          <NuxtLink to="/partners">
            <li @click="$emit('isSidebar');" class="header_text">Партнеры</li>
          </NuxtLink>
          <NuxtLink to="/contacts">
            <li @click="$emit('isSidebar');" class="header_text">Контакты</li>
          </NuxtLink>
          <button class="rounded-[50px] bg-[#168CE4] text-[#fff] text-[16px] font-semibold px-[24px] py-[11px] h-[48px]"
            @click="modalApplication.isOpenModalApplicationStore()">
            Оставить заявку
          </button>
        </ol>
      </div>
    </div>
    <ModalApplication v-if="modalApplication.isModalApplication" data-aos="fade-up" data-aos-anchor-placement="top-center"
    @click="modalApplication.isCloseModalApplicationStore()" />
  </div>
  
</template>

<script setup>
import {useModalApplication} from "~/store/ModalApplicationStore";
defineEmits(['isSidebar']);

const modalApplication = useModalApplication()

</script>


<style scoped>
.sidebar_text {
  @apply font-semibold text-[16px] md:text-[20px] active:text-mainB
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
}
</style>