<template>
  <div class="text-white flex z-50">
    <div class="w-[60%] min-h-[800px] px-[20px]">
      <div class="w-[580px] mt-[220px] linear-[85px] text-[60px]">
        <div class="uppercase font-[700] h-[270px] overflow-hidden ">
          <p class="navbar_title"><span class="text-mainB">Финансовая</span> диагностика и консультация</p>
          <p class="navbar_title">Автоматизация <span class="text-mainB">бизнес - процессов</span></p>
          <p class="navbar_title">Создание <span class="text-mainB">креативных</span> сайтов</p>
        </div>
      </div>
      <div class="w-full mt-[40px] h-[70px] overflow-hidden">
        <p class="navbar_description text-mainG text-[25px] text-left linear-[40px]">Определив основные объекты диагностики, связываем финансовую диагностику с общим диагностическим процессом.</p>
        <p class="navbar_description text-mainG text-[25px] text-left linear-[40px]">Мы позволяем быстро и эффективно выполнять повторяющуюся работу и перейти на безбумажный документооборот.</p>
        <p class="navbar_description text-mainG text-[25px] text-left linear-[40px]">С грамотно разработанным сайтом от компанией FIN Group Вы сможете планомерно двигаться вперед.</p>
      </div>
      <custom-button theme="light" class="mt-[43px]"><span class="px-[24px]">Подробнее</span></custom-button>
    </div>
    <div class="w-[40%] max-h-[800px] overflow-hidden flex ">
      <div class="w-[50%] flex flex-col justify-center items-center top-block z-10">
        <img class="mb-6" src="../assets/img_navbar/3.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/1.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/2.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/3.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/3.png" alt="">
        <img class="mb-6" src="../assets/img_navbar/3.png" alt="">
      </div>

      <div class="w-[50%] flex flex-col justify-center mt-24 items-center bottom-block z-10">
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
.navbar_title {
  transition: all 2s 2s;
  animation: navbar_title 9s 2s infinite forwards;
}

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
@keyframes navbar_title {
  0%, 33% {
    animation-delay: 2s;
    transform: translate(0px, 0%);
  }

  33% {
    transform: translate(0px, -100%);
  }

  66% {
    transform: translate(0px, -200%);
  }

  100% {
    transform: translate(0px, 0%);
  }
}
@keyframes navbar_description {
  0%, 33% {
    animation-delay: 2s;
    transform: translate(0px, 0%);
  }

  33% {
    transform: translate(0px, -100%);
  }

  66% {
    transform: translate(0px, -200%);
  }

  100% {
    transform: translate(0px, 0%);
  }
}


.navbar_description {
  transition: all 2s 2s;
  animation: navbar_description 9s 2s infinite forwards;
}
</style>
