<script lang="ts" setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
const close = () => {

}
onMounted(() =>
  AOS.init()
);
useHead({
  title: 'FinGroup - создание и продвижение сайтов!',
  meta: [
    {
      name: 'description',
      content: 'Мы предлагаем полный пакет услуг, начиная с создания сайта в Худжанд и заканчивая ведением веб-ресурса. Для нас важен долгосрочный результат и постоянный рост.'
    },
    {
      name: 'keywords',
      content: 'fingroup, FinGroup, фингруп, Фин груп, создание сайтов в Таджикистане, создание сайтов в Худжанде, создание и продвижение сайтов, автоматизация бизнес-процессов в Таджикистане, автоматизация бизнес-процессов в Худжанде '
    }
  ]
})
</script>

<template>
  <div class="container mx-auto 2xl:px-[70px] relative px-[20px]">
    <div class="absolute top-[365px] -left-[400px] star" />

    <Service />

    <div class="relative">
      <Industries />
      <img src="../assets/back_img/tn-atom.webp" width="580px" height="580px" class="absolute atom -top-10 -right-64"
        alt="">
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
      <img src="../assets/back_img/tn-atom.webp" class="absolute -bottom-40 right-20 atom" alt="">
      <div class="atom_shadow absolute -bottom-20 right-40" />
    </div>

    <div class="relative">
      <questions />
      <img src="../assets/back_img/dot.webp" class="absolute -bottom-[380px] -left-[420px] opacity-[0.2] atom" />
    </div>
  </div>
</template>