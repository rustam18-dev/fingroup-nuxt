<template>
  <div class="mt-[125px] relative z-10">
    <div>
      <h2 class="main_title">Отрасли и немного статистики</h2>
      <p class="text-mainG text-[26px] font-normal ml-[10px] mt-[40px]">Все сотрудники сертифицированные специалисты</p>
    </div>

    <div class="flex justify-center gap-[40px] mx-[10px] mt-[70px] cursor-pointer">

      <div v-for="statistic in statistics" :key="statistic.id" class="flex flex-col justify-center items-center w-[325px] h-[350px] rounded-[15px] bg-[#2C2C2C]" :ref="`statistic-${statistic.id}`" :data-statistic-id="statistic.id">
        <p class="text-mainB text-[95px] font-semibold leading-[85px]">{{ animatedValue(statistic) }} <span v-if="statistic.id === 1" class="text-mainG -ml-[30px]">+</span></p>
        <p class="text-mainG text-[35px] font-normal leading-[50px] text-center mt-[30px]">{{statistic.adjective}} <br><span class="text-mainB">{{ statistic.text }}</span></p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const statistics = ref([
  {id:1, value: 50, adjective: 'доверенных', text: 'клиентов'},
  {id:2, value: 5, adjective: 'надежной', text: 'работы'},
  {id:3, value: 15, adjective: 'наград и', text: 'премий'},
  {id:4, value: 250, adjective: 'успешных', text: 'проектов'},
]);

const animatedValues = ref({});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  for (const stat of statistics.value) {
    const el = document.querySelector(`[data-statistic-id="${stat.id}"]`);
    if (el && isElementInViewport(el)) {
      if (!animatedValues.value[stat.id]) {
        animateStatistic(stat.id);
      }
    }
  }
};

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const animateStatistic = (id) => {
  animatedValues.value[id] = 0;
  const intervalId = setInterval(() => {
    animatedValues.value[id] += 1;
    if (animatedValues.value[id] >= statistics.value.find(statistic => statistic.id === id).value) {
      clearInterval(intervalId);
    }
  }, 10);
};

const animatedValue = (statistic) => animatedValues.value[statistic.id] || 0;

</script>

<style>
[data-statistic-id] p {
  transition: all 1s ease;
}
</style>
