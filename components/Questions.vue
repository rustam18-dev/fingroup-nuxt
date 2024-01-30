<template>
  <div data-aos="fade-up" class="flex justify-between items-center lg:my-[125px] mb-[100px] py-[20px] h-auto max-h-[410px] bg-[#242424] rounded-[20px] relative z-[10]">
    <div class="md:ml-[60px] ml-[20px]">
      <h1 class="main_title">У вас остались <br class="hidden xl:block"> вопросы?</h1>
      <h2 class="text-[#fff] font-semibold lg:leading-[70px] connect">Мы обязательно свяжемся с вами!</h2>
      <custom-button class="mt-4 md:mt-0" theme="light" @click="modalApplication.isOpenModalApplicationStore()"><span class="px-[40px] py-[20px]">НАПИШИТЕ НАМ</span></custom-button>
    </div>
    <div class="mr-[60px] hidden md:block">
      <img src="./Icons/Questions.webp" alt="photo">
    </div>
  </div>
</template>

<script setup>
import {useModalApplication} from "~/store/ModalApplicationStore.js";

const modalApplication = useModalApplication()
</script>

<style scoped>
.connect{
  font-size: clamp(20px, 2vw + 1rem, 40px);
}
</style>