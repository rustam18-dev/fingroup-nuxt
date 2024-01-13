<template>
  <div class="relative z-10 lg:mt-[245px] mt-[100px]">
    <h2 data-aos="fade-up" class="main_title relative">
      Наши преимущества
      <div class="title_shadow absolute -top-10 -left-10 -z-10" />
    </h2>
    <div class="grid xl:grid-cols-2 justify-between">
      <div data-aos="zoom-in-down" v-for="item of block" :key="item" class=" mb-[10px] flex group cursor-pointer parent-hover">
        <div class="lg:mt-[130px] mt-[50px] h-[100px] lg:h-auto">
          <Advantages/>
        </div>
        <div class="lg:mt-[100px] mt-[40px]">
          <h3 class="h3">
            {{ item.title }}
          </h3>
          <p :id="'name_' + item.id" class="text-mainG text-[14px] sm:text-[18px] lg:text-[24px] font-normal leading-[24px] lg:leading-[35px] ml-[24px] ">
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Advantages from "./Icons/Advantages.vue";
import { ref } from "vue";

const block = ref([
  {
    id: 1,
    title: "Разноплановость",
    name: "Разработка любых сайтов — лэндинги, визитки, интернет-магазины, порталы, форумы, комплексные проекты",
  },
  {
    id: 2,
    title: "Многозадачность",
    name: "Мы оказываем полный спектр услуг — от создания сайтов и их продвижения до технической поддержки",
  },
  {
    id: 3,
    title: "Индивидуальный подход",
    name: "Максимальное внимание к деталям и пожеланиям клиента, изучение бизнес-контекста каждого конкретного проекта",
  },
  {
    id: 4,
    title: "Команда",
    name: "Над каждым проектом работает команда профессионалов различного профиля: копирайтеры, дизайнеры и др.",
  },
  {
    id: 5,
    title: "Доступность",
    name: "Гибкая ценовая политика компании предусматривает скидки, удобный вариант оплаты для каждого клиента",
  },
  {
    id: 6,
    title: "Результативность",
    name: "Мы всегда добиваемся полного решения поставленных задач. За нашими плечами большой опыт и настоящие профи",
  },
  {
    id: 7,
    title: "Эффективность",
    name: "Комплексное и только «белое» SEO-продвижение, SMM, рекламные кампании Яндекс Директ и Google Adwords",
  },
  {
    id: 8,
    title: "Профессионализм",
    name: "Мы создаем красивые сайты с современным дизайном и изящными анимациями, наполняем их качественным контентом",
  },
]);
</script>

<style>
#name_1,
#name_2,
#name_3,
#name_4,
#name_5,
#name_6,
#name_7 {
  width: auto;
}

#name_8 {
  width: auto;
}

.h3{
  @apply text-[#fff] font-bold lg:leading-[85px] ml-[24px] group-hover:text-[#168CE4];
  font-size: clamp(20px, 2vw + 1rem, 40px);
}

.title_shadow {
  border-radius: 3000px;
  opacity: 0.05;
  background: #168ce4;
  filter: blur(70px);
  width: 778px;
  height: 181px;
}
.parent-hover:hover .height_block {
  height: 30px;
  width: 2px;
  fill: #168CE4;
}

.height_block{
  width: 2px;
  
  fill: #D9D9D9;
  transition: height 400ms ease-in-out;
}
.animate{
  transition: transform ease-in-out 400ms;
}
.parent-hover:hover .animate{
  transform: rotate(-90deg);
}
</style>
