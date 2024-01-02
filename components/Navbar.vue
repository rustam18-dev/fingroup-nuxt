<template>
  <div class="text-white flex">
    <div class="w-[60%] min-h-[800px] px-[20px]">
      <div class="w-[570px] mt-[220px] linear-[85px] text-[60px]">
        <p><span class="text-mainB">Финансовая</span> диагностика и консультация</p>
      </div>
      <div class="w-full mt-[40px]">
        <p class="text-mainG text-[25px] text-left linear-[40px]">Определив основные объекты диагностики, связываем финансовую диагностику с общим диагностическим процессом.</p>
      </div>
    </div>
    <div class="w-[40%] max-h-[800px] overflow-hidden flex ">
      <div class="w-[50%] flex flex-col justify-center items-center  top-block">
        <img class="mb-6" src="../assets/img_navbar/3.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/1.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/2.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/3.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/3.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/3.png" alt="">
      </div>
      <div class="w-[50%] flex flex-col justify-center mt-24 items-center bottom-block">
        <img class="mb-6" src="../assets/img_navbar/1.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/4.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/5.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/6.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/6.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/6.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.top-block {
  transition: all 2s;
  animation: top-block 12s infinite forwards;
}

.bottom-block {
  transition: all 2s;
  animation: bottom-block 12s infinite forwards;
}

@keyframes top-block {
  0% {
    transform: translate3d(0px, -400px, 0px);
  }
  18% {
    transform: translate3d(0px, 200px, 0px);
  }
  30%, 50% {
    transform: translate3d(0px, -200px, 0px);
  }
  68% {
    transform: translate3d(0px, -600px, 0px);
  }
  90%, 100% {
    transform: translate3d(0, 200px, 0px);
  }
}

@keyframes bottom-block {
  0% {
    transform: translate3d(0px, 400px, 0px);
  }
  18% {
    transform: translate3d(0px, -200px, 0px);
  }
  30%, 50% {
    transform: translate3d(0px, 200px, 0px);
  }
  68% {
    transform: translate3d(0px, 600px, 0px);
  }
  90%, 100% {
    transform: translate3d(0, -200px, 0px);
  }
}

</style>
