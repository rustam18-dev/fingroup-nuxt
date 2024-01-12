<script lang="ts" setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
onMounted(() => AOS.init());
useHead({
  title: 'FinGroup - автоматизация бизнес процессов!',
  meta: [
    {
      name: 'description',
      content: 'Автоматизация бизнес процессов в Таджикистане, Создание сайтов, Консультация бизнес процессов В Таджикистане!'
    },
    {
      name: 'keywords',
      content: 'fingroup, FinGroup, фингруп, Фин груп, создание сайтов в Таджикистане, создание сайтов в Худжанде, автоматизация бизнес-процессов в Таджикистане, автоматизация бизнес-процессов в Худжанде '
    }
  ]
})
</script>

<template>
  <div class="container mx-auto 2xl:px-[70px] px-[20px] relative">
    
    <!-- <Navbar data-aos="fade-down" /> -->

    <!-- <div class="absolute top-20 -left-96 select-none">
      <img src="../assets/back_img/Cube.webp" class="-z-[1] w-[800px] h-[750px] object-contain" alt="">
      <div class="cube_shadow absolute top-0 left-20 z-[1]" />
    </div>
    <div class="absolute top-0 -right-[480px] slider_shadow" />
    <div class="absolute top-[280px] -right-[600px] shape" />
    <div class="absolute top-[1265px] -left-[400px] star" />

    <Service />

    <div class="relative">
      <Employees />
      <div class="absolute -top-72 -right-[500px] abstrack_shape" />
      <div class="absolute -top-32 -right-[500px] abstrack_shape_shadow" />
      <div class="absolute -bottom-32  -left-[400px]  abstrack_shape_shadow2" />
    </div>

    <div class="relative">
      <Industries />
      <NuxtImg format="webp" :src="'/back_img/tn-atom.png'" width="580px" height="580px"
        class="absolute atom -top-10 -right-64" alt=""></NuxtImg>
      <div class="absolute atom_shadow top-16 -right-[155px]" />
    </div>

    <div class="relative">
      <project />
      <div class="absolute -bottom-44 -left-[1070px] Cube_effect" />
      <div class="absolute bottom-16 -left-[570px] Cube_effect_shadow" />
    </div>

    <div class="relative">
      <partners />
      <div data-aos="fade-left" class="arrow absolute" />
      <div data-aos="fade-right" class="noroot absolute -left-[600px] -bottom-72" />
      <div class="absolute -bottom-64 -left-[400px]  abstrack_shape_shadow2" />
      <div class="absolute -bottom-80 -right-[400px]  abstrack_shape_shadow2" />

    </div>

    <div class="relative">
      <advantages />
      <div class="gray_shadow absolute -bottom-60 -left-[500px]" />
      <img src="../assets/back_img/round_shape.webp" class="absolute -bottom-32 -left-[320px]" />
      <div class="gray_shadow absolute -bottom-60 -left-[500px]" />
      <div class="abstract absolute bottom-0 -right-[450px]" />
      <div class="abstrack_shadow absolute bottom-20 -right-[400px]" />
      <div class="abstrack_shadow absolute -bottom-[600px] -right-[400px]" />
    </div>

    <div class="relative">
      <OurAchievements />
      <img src="../assets/back_img/tn-atom.png" class="absolute -bottom-40 right-20 atom" alt="">
      <div class="atom_shadow absolute -bottom-20 right-40" />
    </div>

    <div class="relative">
      <questions />
      <img src="../assets/back_img/dot.webp" class="absolute -bottom-[380px] -left-[420px] opacity-[0.2] atom" />
    </div> -->
  </div>
</template>

<script>
</script>

<style>
::-webkit-scrollbar {
  background: #000;
  width: 0.7vw;
}

::-webkit-scrollbar-thumb {
  background: #168CE4;
  border-radius: 50px;
}

.cube_shadow {
  width: 768px;
  height: 767px;
  border-radius: 3000px;
  opacity: 0.04;
  background: #168CE4;
  filter: blur(70px);
}

.slider_shadow {
  border-radius: 3000px;
  opacity: 0.05;
  background: #168CE4;
  width: 782px;
  height: 546px;
  filter: blur(50px);
}

.shape {
  width: 1229px;
  height: 1229px;
  background: url('../assets/back_img/Shape.webp');
}

.star {
  width: 784.683px;
  height: 1039.507px;
  transition: transform;
  transition-duration: 700ms;
  background: url('../assets/back_img/star.webp');
}

/* .star:hover{
  transform: rotate(90deg), translateY(100px);
  transform: translateY(50px);
} */
.abstrack_shape {
  width: 1468px;
  height: 1268px;
  background: url('../assets/back_img/abstract_shape.webp');
}

.abstrack_shape_shadow {
  width: 643px;
  height: 643px;
  border-radius: 50%;
  opacity: 0.19;
  background: #168CE4;
  filter: blur(70px);
}

.abstrack_shape_shadow2 {
  width: 643px;
  height: 643px;
  border-radius: 3000px;
  opacity: 0.04;
  background: #168CE4;
  filter: blur(70px);
}

.atom {
  animation: rotate infinite linear 20s
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.atom_shadow {
  width: 386px;
  height: 386px;
  flex-shrink: 0;
  border-radius: 3000px;
  opacity: 0.05;
  background: #168CE4;
  filter: blur(70px);
}

.Cube_effect {
  width: 1277.385px;
  height: 1277.385px;
  background: url('../assets/back_img/Cube_effect.webp');
}

.Cube_effect_shadow {
  width: 643px;
  height: 643px;
  border-radius: 3000px;
  opacity: 0.05;
  background: #168CE4;
  filter: blur(70px);
}

.arrow {
  width: 368px;
  height: 450px;
  background: url('../assets/back_img/arrow.webp');
  animation: arrow linear 2.5s infinite;
}

@keyframes arrow {
  0% {
    bottom: 460px;
    right: -180px;
  }

  50% {
    bottom: 400px;
    right: -100px;
  }

  100% {
    bottom: 460px;
    right: -180px;
  }
}

.noroot {
  width: 1071px;
  height: 387px;
  background: url('../assets/back_img/noroot.webp');
}

.abstract {
  width: 765px;
  height: 849px;
  background: url('../assets/back_img/abstract.webp') no-repeat;
}

.abstrack_shadow {
  width: 643px;
  height: 643px;
  border-radius: 3000px;
  opacity: 0.03;
  background: #168CE4;
  filter: blur(70px);
}

.gray_shadow {
  width: 653.106px;
  height: 472.849px;
  transform: rotate(135deg);
  border-radius: 3000px;
  opacity: 0.03;
  background: #FFF;
  filter: blur(70px);
}

img {
  user-select: none;
}
</style>