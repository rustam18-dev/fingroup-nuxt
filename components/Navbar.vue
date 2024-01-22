<template>
  <div class="text-white flex z-50 border-t-2">
    <div class="w-[60%] min-h-[800px] z-10">
      <div class="xl:w-[580px] md:w-[400px] sm:w-[320px] w-[440px] mt-[220px] linear-[85px] xl:text-[60px] md:text-[40px] sm:text-[30px] text-[44px] ">
        <div class="uppercase font-[700] xl:h-[270px] md:h-[180px] sm:h-[135px] h-[210px] overflow-hidden title_block">
          <p class="navbar_title"><span class="text-mainB">Финансовая</span> диагностика и консультация</p>
          <p class="navbar_title">Автоматизация <span class="text-mainB">бизнес - процессов</span></p>
          <p class="navbar_title">Создание <span class="text-mainB">креативных</span> сайтов</p>
        </div>
      </div>
      <div class="sm:w-full w-[450px] mt-[40px] h-[80px]  overflow-hidden z-10 text-mainG lg:text-[22px] md:text-[16px] sm:text-[13px] text-[17px]">
        <span ref="description" class="max-w-[200px] w-full"></span>
      </div>

      <custom-button theme="light" class="mt-[43px]"><span class="px-[24px]">Подробнее</span></custom-button>
    </div>
    <div class="w-[40%] max-h-[800px] overflow-hidden sm:flex hidden justify-between">
      <div class="w-[48%] flex flex-col justify-center items-end top-block z-10">
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/3.png" alt="office" />
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/1.png" alt="office" />
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/2.png" alt="office" />
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/3.png" alt="office" />
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/3.png" alt="office" />
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/3.png" alt="office" />
      </div>

      <div class="w-[48%] flex flex-col justify-center mt-24 items-end bottom-block z-10">
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/1.png" alt="office" />
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/4.png" alt="office" />
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/5.png" alt="office" />
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/6.png" alt="office" />
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/6.png" alt="office" />
        <nuxt-img class="mb-6 w-full" src="../assets/img_navbar/6.png" alt="office" />
      </div>
    </div>
  </div>
</template>

<script setup>
import typer from '../composable/typer.js'

const description = ref(null)

onMounted(() => {
  const words = [
    "Определив основные объекты диагностики, связываем финансовую диагностику.",
    "Мы позволяем эффективно выполнять работу и перейти на безбумажный документооборот.",
    "С грамотно разработанным сайтом от компанией FIN Group Вы сможете двигаться вперед.",
  ]

  typer(description.value, words)
})

</script>

<style scoped>
.navbar_title {
  transition: all 2.5s;
  animation-duration: 2.5s;
  animation: navbar_title 20s infinite ease-in-out;
}

.title_block:hover .navbar_title {
  animation-play-state: paused;
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

  30%,
  50% {
    transform: translate3d(0px, -200px, 0px);
  }

  68% {
    transform: translate3d(0px, -600px, 0px);
  }

  90%,
  100% {
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

  30%,
  50% {
    transform: translate3d(0px, 200px, 0px);
  }

  68% {
    transform: translate3d(0px, 600px, 0px);
  }

  90%,
  100% {
    transform: translate3d(0, -200px, 0px);
  }
}

@keyframes navbar_title {

  0%,
  33% {
    transform: translate(0px, 0%);
  }

  33% {
    animation-delay: 5s;
    transform: translate(0px, -100%);
  }

  66% {
    transform: translate(0px, -200%);
  }

  100% {
    animation-delay: 5s;
    transform: translate(0px, 0%);
  }
}

</style>