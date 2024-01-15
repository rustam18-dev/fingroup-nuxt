<template>
  <div  data-aos="fade-up" class="flex flex-col flex-wrap mt-[225px] relative z-10">
    <div>
      <h1 class="text-[40px] lg:text-[65px] text-mainB font-bold pl-[15px]">Наши партнеры</h1>
      <h3 class="text-mainG text-[20px] lg:text-[26px] font-normal mt-[40px] pl-[20px]">Мы работаем только с известными проверенными
        брендами</h3>
    </div>
    <div data-aos="fade-up" class="h-[350px] flex justify-center gap-6 py-[50px] px-[20px] bg-[#242424] rounded-[20px] overflow-hidden w-[380px] lg:w-[1400px] -mt-[70px] lg:mt-[100px]">
    <div class="carousel-inner flex justify-center items-center">
      <img class="partners_img max-w-[220px] max-h-[220px] md:ml-[20px] lg:max-w-[300px] lg:max-h-[300px] lg:-ml-[20px] " src="../assets/img/img_partners/1c.png" alt="photo">
      <div class="lg:border-l-[1px] h-[200px] w-[250px] border-mainG">
        <img class="partners_img max-w-[160px] max-h-[160px] lg:max-w-[300px] lg:max-h-[300px] md:mr-[90px] lg:pt-[100xp] lg:ml-[50px]" src="../assets/img/img_partners/sklad.png" alt="photo">
      </div>
      <div class=" lg:border-x-[1px] h-[200px] lg:ml-[100px] border-mainG">
      <img class="partners_img max-w-[250px] max-h-[250px] lg:max-w-[235px] lg:pt-[30px] lg:max-h-[250px] lg:mx-[30px]" src="../assets/img/img_partners/bitrix.png" alt="photo">
      </div>
      <img class="partners_img max-w-[180px] max-h-[180px] -mt-[80px] lg:max-w-[300px] lg:max-h-[300px] lg:px-[10px] md:pt-[45px] pt-[50px] lg:-mt-[30px] lg:ml-[50px]" src="../assets/img/img_partners/mobic.png" alt="photo">
    </div>
    <div class="carousel-inner lg:hidden flex justify-center items-center">
      <img class="partners_img max-w-[220px] max-h-[220px] md:ml-[20px] lg:max-w-[300px] lg:max-h-[300px]" src="../assets/img/img_partners/1c.png" alt="photo">
      <div class="lg:border-l-[1px] h-[200px] w-[250px] border-mainG">
        <img class="partners_img max-w-[160px] max-h-[160px] lg:max-w-[300px] lg:max-h-[300px] md:mr-[90px] lg:pt-[100xp]" src="../assets/img/img_partners/sklad.png" alt="photo">
      </div>
      <div class=" lg:border-x-[1px] h-[200px] border-mainG">
        <img class="partners_img max-w-[250px] max-h-[250px] lg:max-w-[235px] lg:pt-[30px] lg:max-h-[250px] -ml-[100px]" src="../assets/img/img_partners/bitrix.png" alt="photo">
      </div>
      <img class="partners_img max-w-[180px] max-h-[180px] -mt-[80px] lg:max-w-[300px] lg:max-h-[300px] lg:px-[10px] md:pt-[45px] pt-[50px] lg:-mt-[30px]" src="../assets/img/img_partners/mobic.png" alt="photo">
    </div>
    
    </div>
  </div>
</template>
<script setup>

</script>

<style scoped>
.partners_img {
  @apply grayscale hover:grayscale-0 duration-300
}



@keyframes scroll {
  0% {
    transform: translateX(135%);
  }
  100% {
    transform: translateX(-125%);
  }
}

@media screen and (max-width:780px) {
  .carousel-inner {
  animation: scroll 10s linear infinite;
  align-items: center;
  object-fit: contain;
  gap: 5px;
}
}
</style>



