<template>
  <div class="flex flex-col mt-[189px]">
    <div data-aos="fade-up" class="flex flex-col sm:gap-y-[20px] lg:gap-y-[40px] mb-[30px] lg:mb-[64px]">
      <h2 class="main_title">Наши сотрудники</h2>
      <span class="text">Команда профессионалов</span>
    </div>
    <div class="grid lg:grid-cols-2 gap-[40px]">
      <div
        v-for="(info) in employeesInfo"
        :key="info.id"
        class="w-full z-[10] aos-item"
      >
        <CardEmployees :title="info.title" :img="info.img" :jobTitle="info.jobTitle" />
      </div>
    </div>
    <div class="flex flex-col justify-center items-center w-full mt-[50px]">
      <CustomButton class="w-full z-50" theme="light" data-aos="fade-up" data-aos-delay="200">Все сотрудники</CustomButton>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import img1 from '../assets/img/1.png'
import img2 from '../assets/img/2.png'
import img3 from '../assets/img/3.png'
import img4 from '../assets/img/4.png'

const employeesInfo = ref([
  { id: 1, img: img1, title: 'Ахмедов Маҳмудҷон', jobTitle: 'Основатель' },
  { id: 2, img: img2, title: 'Иномҷонов Муҳаммадҷон', jobTitle: 'Директор' },
  { id: 3, img: img3, title: 'Самебоев Қосимҷон', jobTitle: '1C разработчик' },
  { id: 4, img: img4, title: 'Давронзода Шероз', jobTitle: '1C разработчик' }
]);

onMounted(() => {
  const aosItems = document.querySelectorAll('.aos-item');
  aosItems.forEach((item, index) => {
    item.setAttribute('data-aos', 'fade-left');
    item.setAttribute('data-aos-delay', `${index * 200}`);
  });

});
</script>

<style scoped>
.text {
  @apply text-mainG leading-[40px] lg:text-[26px] md:text-[24px] text-[20px] ;
}
</style>