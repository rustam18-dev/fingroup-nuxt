<template>
  <div class="mt-[125px] relative z-10">
    <div>
      <h2 class="text-mainB text-[30px] lg:text-[45px]">Отрасли и немного статистики</h2>
      <p class="text-mainG text-[18px] font-normal lg:text-[26px] mt-[20px]">Все сотрудники сертифицированные специалисты
      </p>
    </div>

    <div class="flex flex-wrap gap-4 xl:justify-between justify-center lg:justify-center mt-[20px] cursor-pointer">

      <div v-for="statistic in statistics" :key="statistic.id"
        class="block-width flex flex-col justify-center items-center w-[179px] sm:w-[290px] md:w-[300px] h-[245px] rounded-[15px] bg-[#2C2C2C] lg:w-[325px] lg:h-[300px] xl:w-[295px] 2xl:w-[330px]"
        :ref="`statistic-${statistic.id}`" :data-statistic-id="statistic.id">
        <p class="text-mainB text-[60px] md:text-[80px] md:pt-[20px] font-semibold leading-[85px]"
          :style="{ transition: `all ${statistic.duration || 1}s ease` }">{{ animatedValue(statistic.id) }} <span
            v-if="statistic.id === 1" class="text-mainG -ml-[23px]">+</span></p>
        <p
          class="text-mainG text-[20px] md:text-[35px] font-normal leading-[25px] md:leading-[50px] text-center mt-[30px]">
          {{ statistic.adjective }} <br><span class="text-mainB">{{ statistic.text }}</span></p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const statistics = ref([
  { id: 1, value: 50, adjective: 'доверенных', text: 'клиентов', duration: 2 },
  { id: 2, value: 5, adjective: 'надежной', text: 'работы', duration: 1 },
  { id: 3, value: 15, adjective: 'наград и', text: 'премий', duration: 2 },
  { id: 4, value: 250, adjective: 'успешных', text: 'проектов', duration: 2 },
]);

const animatedValues = ref({});
const animatedValue = (statistic) => animatedValues.value[statistic] || 0;


onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
};

const handleScroll = () => {
  for (const stat of statistics.value) {
    const el = document.querySelector(`[data-statistic-id="${stat.id}"]`);
    if (el && isElementInViewport(el)) {
      if (!animatedValues.value[stat.id]) {
        animateStatistic(stat.id, stat.duration || 1);
      }
    }
  }
};


const animateStatistic = (id, duration) => {
  animatedValues.value[id] = 0;
  const targetValue = statistics.value.find((statistic) => statistic.id === id).value;

  if (animatedValues.value[id] >= targetValue) {
    return;
  }

  const intervalId = setInterval(() => {
    animatedValues.value[id] += 1;


    if (animatedValues.value[id] >= targetValue) {
      animatedValues.value[id] = targetValue;
      clearInterval(intervalId);
    }
  }, (duration * 1000) / targetValue);
};


</script>

<style scoped>
[data-statistic-id] p {
  transition: all 1s ease;
}

@media screen and (max-width: 413px) {

  @media screen and (min-width: 325px) {
    .block-width {
      width: 132px;
      height: 230px;
    }
  }

  @media screen and (min-width: 375px) {
    .block-width {
      width: 159px;
      height: 230px;
    }
  }
}</style>


<!-- data-aos="fade-up" -->
<!-- data-aos="fade-right" -->