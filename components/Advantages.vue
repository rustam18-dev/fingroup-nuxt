<template>
  <div class="relative z-10 mt-[245px]">
    <h3 class="text-mainB text-[60px] font-bold leading-[85px] relative">
      Наши преимущества
      <div class="title_shadow absolute -top-10 -left-10 -z-10" />
    </h3>
    <div class="flex flex-wrap justify-between ">

      <div  v-for="item of block" :key="item" class="w-[48%] mb-[10px] flex group cursor-pointer">
        <div class="mt-[100px]">
          <component :is="item.component"/>
        </div>
        <div class="mt-[100px]">
          <p class="text-[#fff] text-[40px] font-bold leading-[85px] ml-[24px]">{{ item.title }}</p>
          <p :id="'name_' + item.id" class="text-mainG text-[24px] font-normal leading-[35px] ml-[24px] w-[450px]">{{ item.name }}</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import Advantages from './Icons/Advantages.vue'
import {ref} from 'vue'

const block = ref([
  {id: 1, component: Advantages, title: 'Разноплановость', name: 'Разработка любых сайтов — лэндинги, визитки, интернет-магазины, порталы, форумы, комплексные проекты', },
  {id: 2, component: Advantages, title: 'Многозадачность', name: 'Мы оказываем полный спектр услуг — от создания сайтов и их продвижения до технической поддержки'},
  {id: 3, component: Advantages, title: 'Индивидуальный подход', name: 'Максимальное внимание к деталям и пожеланиям клиента, изучение бизнес-контекста каждого конкретного проекта'},
  {id: 4, component: Advantages, title: 'Команда', name: 'Над каждым проектом работает команда профессионалов различного профиля: копирайтеры, дизайнеры и др.'},
  {id: 5, component: Advantages, title: 'Доступность', name: 'Гибкая ценовая политика компании предусматривает скидки, удобный вариант оплаты для каждого клиента'},
  {id: 6, component: Advantages, title: 'Результативность', name: 'Мы всегда добиваемся полного решения поставленных задач. За нашими плечами большой опыт и настоящие профи'},
  {id: 7, component: Advantages, title: 'Эффективность', name: 'Комплексное и только «белое» SEO-продвижение, SMM, рекламные кампании Яндекс Директ и Google Adwords'},
  {id: 8, component: Advantages, title: 'Профессионализм', name: 'Мы создаем красивые сайты с современным дизайном и изящными анимациями, наполняем их качественным контентом'}
])
</script>

<style scoped>
  #name_1,#name_2,#name_3,#name_4,#name_5,#name_6,#name_7{
    width: 550px;
  }
  #name_8{
    width: 600px;
  }
  .title_shadow{
    border-radius: 3000px;
    opacity: 0.05;
    background: #168CE4;
    filter: blur(70.55000305175781px);
    width: 778px;
    height: 181px;
  }
</style>