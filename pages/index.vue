<script lang="ts" setup>
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
  <div class="container mx-auto px-[100px] relative">
      <Navbar/>

      <!-- Back_objects -->
      <div class="absolute top-20 -left-96 select-none">
        <img src="../assets/back_img/Cube.png" class="-z-[1] w-[800px] h-[750px] object-contain" alt="">
        <div class="cube_shadow absolute top-0 left-20 z-[1]" />
      </div>
      <div class="absolute top-0 -right-[480px] slider_shadow" />
      <div class="absolute top-[280px] -right-[600px] shape" />
      <div class="absolute top-[1280px] -left-52 star" />
      <div class="absolute top-[1780px] -right-[500px] abstrack_shape" />
      <div class="absolute top-[2000px] -right-[400px] abstrack_shape_shadow" />
      <!-- Back_objects -->

      <Service/>    
      <Employees/>
      <Industries/>
      <project/>
      <partners/>
      <advantages/>
      <OurAchievements/>
      <questions/>
  </div>
</template>

<script>
</script>

<style>
::-webkit-scrollbar{
  background: #000;
  width: 0.7vw;
}
::-webkit-scrollbar-thumb{
  background: #168CE4;
  border-radius: 50px;
}
.cube_shadow{
  width: 768px;
  height: 767px;
  border-radius: 3000px;
  opacity: 0.04;
  background: #168CE4;
  filter: blur(70.55000305175781px);
}
.slider_shadow{
  border-radius: 3000px;
  opacity: 0.05;
  background: #168CE4;
  width: 782px;
  height: 546px;
  filter: blur(50px);
}
.shape{
  width: 1229px;
  height: 1229px;
  background: url('../assets/back_img/Shape.png');
}
.star{
  width: 784.683px;
  height: 1039.507px; 
  opacity: 0.2;
  background: url('../assets/back_img/Star.png');
}
.abstrack_shape{
  width: 1468px;
  height: 1268px;
  background: url('../assets/back_img/abstract_shape.png');
}
.abstrack_shape_shadow{
  width: 643px;
  height: 643px;
  border-radius: 3000px;
  opacity: 0.07;
  background: #168CE4;
  filter: blur(50px);
}
img{
  user-select: none;
}
</style>