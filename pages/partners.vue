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
  title: 'Партнёры',
  meta: [
    {
      name: 'description',
      content: 'Крупные компании которые, доверили нам свой бизнес, молочная радость, банк эсхата, файзи расул, аслфарм, aslpharm, aslzar, аслзар'
    },
    {
      name: 'keywords',
      content: 'fingroup, FinGroup, фингруп, Фин груп, создание сайтов в Таджикистане, создание сайтов в Худжанде, создание и продвижение сайтов, автоматизация бизнес-процессов в Таджикистане, автоматизация бизнес-процессов в Худжанде, , молочная радость, банк эсхата, файзи расул, аслфарм, aslpharm, aslzar, аслзар'
    }
  ]
})
</script>

<template>
  <div class="container mx-auto 2xl:px-[70px] relative px-[20px]">

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