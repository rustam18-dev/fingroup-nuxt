<template>
  <div class="mt-[124px]">
    <div>
      <p class="text-mainB text-[60px] font-bold leading-[85px]">Услуги</p>
      <p class="text-mainG text-[26px] font-normal leading-[40px] mt-[40px]">Компания Fin Group оказывает услуги</p>
    </div>
    <div class="flex flex-wrap justify-between mx-auto items-start h-[740px] rounded-[20px] bg-[#242424] mt-[50px] relative">

      <div :class="item.classBlock" v-for="item of block" :key="item">
        <component :is="item.component"/>
        <p class="text-[26px] text-[#929292] font-normal text-center mx-auto w-[299px] group-hover:text-[22px] group-hover:mt-[20px] duration-500 group-hover:w-[260px] ">{{ item.name }}</p>
        <custom-button class="absolute -bottom-2 group-hover:-bottom-8 opacity-0 group-hover:opacity-[1] duration-500">Подробнее</custom-button>
      </div>

    </div>
  </div>
  
</template>

<script setup>
import AppBolt from '~/assets/img/ServicesIcons/AppBolt.vue';
import GameIconVue from '~/assets/img/ServicesIcons/GameIcon.vue';
import MeterialSymbolsVue from '~/assets/img/ServicesIcons/MeterialSymbols.vue';
import MaterialIconVue from '../assets/img/ServicesIcons/MaterialIcon.vue'
import HealthIconVue from '~/assets/img/ServicesIcons/HealthIcon.vue';
import {ref} from 'vue'

const block = ref([
  {id: 1, component: AppBolt, name: 'Автоматизация бизнес процессов', classBlock: 'w-[381px] ml-[80px] mt-[69px] h-[284px] group rounded-[10px] border border-mainG bg-[#242424] flex flex-col justify-center items-center relative'},
  {id: 2, component: GameIconVue, name: 'Стандартизация бизнес процессов', classBlock: 'w-[381px] h-[284px] mt-[69px] rounded-[10px] border border-mainG bg-[#242424] group flex flex-col justify-center items-center relative'},
  {id: 3, component: MeterialSymbolsVue, name: 'Финансовая диагностика и консультация', classBlock: 'w-[381px] mr-[80px] mt-[69px] h-[284px] rounded-[10px] border border-mainG bg-[#242424] group flex flex-col justify-center items-center relative'},
  {id: 4, component: MaterialIconVue, name: 'Создание сайтов по доступным ценам', classBlock: 'w-[381px] h-[284px] mb-0 ml-[21%] rounded-[10px] border border-mainG bg-[#242424] group flex flex-col justify-center items-center relative'},
  {id: 5, component: HealthIconVue, name: 'Проведение бизнес тренингов', classBlock: 'w-[381px] h-[284px] rounded-[10px] mr-[21%] border border-mainG bg-[#242424] group flex flex-col justify-center items-center relative'}
])
</script>

<style>

</style>