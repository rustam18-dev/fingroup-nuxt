<template>
  <div  data-aos="fade-up" class="flex flex-col flex-wrap mt-[225px] relative z-10">
    <div>
      <h1 class="text-[31px] lg:text-[65px] text-mainB font-bold">Наши партнеры</h1>
      <h3 class="text-mainG text-[18px] lg:text-[26px] font-normal mt-[40px]">Мы работаем только с известными проверенными
        брендами</h3>
    </div>
    <div data-aos="fade-up" class="h-[350px] flex justify-center items-center gap-6 bg-[#242424] rounded-[20px] overflow-hidden w-full lg:w-[980px] xl:w-[1250px] lg:mt-[100px] sm:w-[730px] 2xl:w-[1400px] xl:-mx-[5px]">
    <div class="carousel-inner flex justify-center items-center mt-[30px]">
      <img class="partners_img max-w-[220px] -mt-[50px] max-h-[220px] lg:max-w-[200px] lg:max-h-[200px] md:ml-[20px] xl:max-w-[300px] xl:max-h-[300px] xl:-ml-[20px] lg:-mt-[10px]" src="../assets/img/img_partners/1c.png" alt="photo">
      <div class="lg:border-l-[1px] h-[200px] w-[250px] border-mainG">
        <img class="partners_img max-w-[160px] max-h-[160px] lg:ml-[40px] lg:mt-[20px] xl:max-w-[300px] xl:max-h-[300px] md:mr-[90px] xl:-mt-[20px] xl:ml-[50px]" src="../assets/img/img_partners/sklad.png" alt="photo">
       </div>
      <div class=" lg:border-x-[1px] h-[200px] xl:ml-[100px] border-mainG">
      <img class="partners_img max-w-[250px] -ml-[90px] lg:ml-[20px] max-h-[250px] lg:mt-[25px] xl:max-w-[235px] xl:pt-[30px] xl:max-h-[250px] xl:mx-[30px]" src="../assets/img/img_partners/bitrix.png" alt="photo">
      </div>
      <img class="partners_img max-w-[180px] max-h-[180px] -mt-[35px] xl:max-w-[300px] xl:max-h-[300px] xl:px-[10px] md:pt-[45px]  lg:-mt-[30px] lg:ml-[50px] mr-[30px]" src="../assets/img/img_partners/mobic.png" alt="photo">
    </div>
    <div class="carousel-inner lg:hidden flex justify-center items-center mt-[30px]">
      <img class="partners_img -mt-[50px] max-w-[220px] max-h-[220px] md:ml-[20px] lg:max-w-[300px] lg:max-h-[300px]" src="../assets/img/img_partners/1c.png" alt="photo">
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

@media screen and (max-width:768px) {
  .carousel-inner {
  animation: scroll 10s linear infinite;
  align-items: center;
  object-fit: contain;
  gap: 5px;
}
}
</style>



