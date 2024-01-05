<template>
  <div class="mt-[125px] relative z-10">
    <div>
      <h2 class="main_title">Отрасли и немного статистики</h2>
      <p class="text-mainG text-[26px] font-normal ml-[10px] mt-[40px]">Все сотрудники сертифицированные специалисты</p>
    </div>

    <div class="flex justify-center gap-[40px] mx-[10px] mt-[70px] cursor-pointer">

      <div v-for="statistic in statistics" :key="statistic.id" class="flex flex-col justify-center items-center w-[325px] h-[325px] rounded-[15px] bg-[#2C2C2C]">
        <p class="text-mainB text-[120px] font-semibold leading-[85px]">{{ statistic.value }} <span v-if="statistic.id === 1" class="text-mainG -ml-[40px]">+</span></p>
        <p class="text-mainG text-[40px] font-normal leading-[50px] text-center mt-[30px]">{{statistic.adjective}} <br><span class="text-mainB">{{ statistic.text }}</span></p>
      </div>

    </div>
  </div>
</template>

<script setup>


const statistics = ref([
  {id:1, value: 50, adjective: 'доверенных', text: 'клиентов'},
  {id:2, value: 5, adjective: 'надежной', text: 'работы'},
  {id:3, value: 15, adjective: 'наград и', text: 'премий'},
  {id:4, value: 250, adjective: 'успешных', text: 'проектов'},
])

</script>

<style>

</style>