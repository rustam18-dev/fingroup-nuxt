<template>
  <div class="back flex items-end max-w-[690px] w-auto max-h-[350px] h-full rounded-[20px] z-[50] cursor-pointer">
    <div
      class="flex flex-col max-w-[55%] h-full items-start justify-between p-[15px] sm:p-[20px] xl:pt-[50px] lg:pb-[30px] lg:pl-[30px] relative">
      <h1 class="title">{{ title }}</h1>
      <span class="text xl:pb-0 sm:pb-[60px] pb-[45px]">{{ jobTitle }}</span>
      <div class="absolute bottom-6 xl:opacity-0 button  duration-500 xl:w-[300px] lg:w-[220px] md:w-[300px] sm:w-[220px] w-[35vw] ">
        <CustomButton class="text-[12px]">Подробнее</CustomButton>
      </div>
      <div class="round duration-700" />
      <div class="round2 duration-700" />
    </div>
    <div class="flex items-end img_scale h-[90%]">
      <img :src="img" alt="">
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['jobTitle', 'title', 'img']);

</script>

<style scoped>
.title {
  @apply text-mainB font-bold 2xl:leading-[60px] 2xl:w-[300px];
  font-size: clamp(24px, 1.7vw + 1rem, 50px);
  
}

@media screen and (max-width: 1024px) {
  .title {
    font-size: clamp(24px, 3vw + 1rem, 50px);
  }
}

.text {
  @apply text-mainG leading-[40px] duration-500 lg:text-[26px] sm:text-[20px] text-[16px]
}

.back {
  overflow: hidden;
  background: linear-gradient(180deg, #343434 0%, #4B4B4B 100%);
}

.back:hover .img_scale {
  transform: scale(1.05);
}

.img_scale {
  transition-duration: 500ms;
}

.back:hover .text {
  padding-bottom: 60px;
}

.back:hover .button {
  opacity: 1;
}

.round {
  position: absolute;
  bottom: -300px;
  left: 400px;
  width: 509px;
  height: 509px;
  flex-shrink: 0;
  border-radius: 3000px;
  opacity: 0.1;
  background: #FFF;
  filter: blur(70.55000305175781px);
}

.back:hover .round {
  bottom: 20px;
  left: 500px;
}

.round2 {
  position: absolute;
  top: 500px;
  right: 100px;
  width: 509px;
  height: 509px;
  flex-shrink: 0;
  border-radius: 3000px;
  opacity: 0.1;
  background: #FFF;
  filter: blur(70.55000305175781px);
}

.back:hover .round2 {
  top: 20px;
  right: 300px;
}
</style>