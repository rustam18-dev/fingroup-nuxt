<template>
  <div class="h-[90px] w-full bg-[#1A1A1A] xl:px-[100px] pt-[10px]">
    <div class="flex justify-between items-center container mx-auto">
      <div>
        <img class="ml-[10px]" src="../assets/img/325359946.png" alt="photo">
      </div>
      <div class="flex">
        <ol class="flex items-center font-Montserrat xl:gap-x-[70px] gap-[30px]">
          <li class="header_text">О компании</li>
          <li class="header_text">Услуги</li>
          <li class="header_text">Проекты</li>
          <li class="header_text">Продукты</li>
          <li class="header_text mr-[50px]">Контакты</li>
        </ol>
        <button class="rounded-[50px] bg-[#168CE4] text-[#fff] text-[16px] font-semibold px-[24px] py-[11px] h-[48px] mr-[10px] ">Оставить заявку</button>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "AppHeader.vue"
}
</script>

<style scoped>
.header_text {
    @apply text-[18px] text-[#666] font-normal cursor-pointer hover:text-[#168CE4]
}
</style>
