<template>
  <div  data-aos="fade-up" class="flex flex-col flex-wrap mt-[225px] relative z-10">
    <div>
      <h1 class="text-[40px] lg:text-[65px] text-mainB font-bold pl-[15px]">Наши партнеры</h1>
      <h3 class="text-mainG text-[20px] lg:text-[26px] font-normal mt-[40px] mb-[100px] pl-[20px]">Мы работаем только с известными проверенными
        брендами</h3>
    </div>
    <div data-aos="fade-up" class="h-auto flex flex-wrap justify-center gap-6 py-[50px] px-[20px] mx-[15px] bg-[#242424] rounded-[20px]">
      <img class="partners_img mx-auto md:ml-[20px] lg:max-w-[300px] lg:max-h-[300px]" src="../assets/img/img_partners/1c.png" alt="photo">
      <div class="lg:border-l-[1px] h-[200px] w-[250px] border-mainG">
        <img class="partners_img  lg:max-w-[300px] lg:max-h-[300px] mx-auto md:mr-[90px] lg:pt-[100xp]" src="../assets/img/img_partners/sklad.png" alt="photo">
      </div>
      <div class=" lg:border-x-[1px] h-[200px] border-mainG">
        <img class="partners_img lg:max-w-[235px] lg:pt-[30px] lg:max-h-[250px] mx-auto" src="../assets/img/img_partners/bitrix.png" alt="photo">
      </div>
      <img class="partners_img lg:max-w-[300px] lg:max-h-[300px] lg:px-[10px] mx-auto md:pt-[45px] pt-[50px] lg:-mt-[30px]" src="../assets/img/img_partners/mobic.png" alt="photo">
    </div>
  </div>
</template>
<script setup>

</script>

<style scoped>
.partners_img {
  @apply grayscale hover:grayscale-0 duration-300
}
</style>



