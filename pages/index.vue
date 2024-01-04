<template>
  <div class="container mx-auto px-[40px] relative">
      <Navbar/>
      <div class="absolute top-20 -left-96 select-none">
        <img src="../assets/back_img/Cube.png" class="-z-[1] w-[800px] h-[750px] object-contain" alt="">
        <div class="cube_shadow absolute top-0 left-20 z-[1]" />
      </div>
      <div class="absolute top-0 -right-[480px] slider_shadow" />
      <div class="absolute top-[400px] -right-[700px] shape">
        <img src="../assets/back_img/Shape.png" alt="">
      </div>
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
}
img{
  user-select: none;
}
</style>