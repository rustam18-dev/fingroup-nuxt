<template>
  <div class="flex flex-col flex-wrap mt-[125px]">
    <div>
      <h1 class="text-[65px] text-mainB font-bold ">Наши партнеры</h1>
      <h3 class="text-mainG text-[26px] font-normal">Мы работаем только с известными проверенными брендами</h3>
    </div>
    <div class="flex h-[353px] bg-[#242424] rounded-[20px] gap-10 justify-center items-center">
      <img class="partners_img" src="../assets/img/img_partners/1c.png" alt="photo">
      <div class="border-l-[1px] h-[200px] border-mainG">
        <img class="partners_img pl-[30px]" src="../assets/img/img_partners/sklad.png" alt="photo">
      </div>
      <div class=" border-x-[1px] h-[200px] border-mainG">
        <img class="partners_img" src="../assets/img/img_partners/bitrix.png" alt="photo">
      </div>
      <img class="partners_img" src="../assets/img/img_partners/mobic.png" alt="photo">
    </div>
  </div>
</template>
<script setup>

</script>

<style scoped>
  .partners_img{
    @apply max-w-[300px] max-h-[250px] grayscale hover:grayscale-0 duration-300
  }
</style>