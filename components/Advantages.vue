<template>
  <div class="relative z-10 mt-[245px]">
    <h3 data-aos="fade-up" class="text-mainB text-[60px] font-bold leading-[85px] relative">
      Наши преимущества
      <div class="title_shadow absolute -top-10 -left-10 -z-10" />
    </h3>
    <div class="flex flex-wrap justify-between">
      <div data-aos="zoom-in-down" v-for="item of block" :key="item" class="w-[48%] mb-[10px] flex group cursor-pointer parent-hover">
        <div class="mt-[130px]">
          <Advantages/>
        </div>
        <div class="mt-[100px]">
          <p class="text-[#fff] text-[40px] font-bold leading-[85px] ml-[24px] group-hover:text-[#168CE4]">
            {{ item.title }}
          </p>
          <p :id="'name_' + item.id" class="text-mainG text-[24px] font-normal leading-[35px] ml-[24px] w-[450px]">
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
  width: 550px;
}

#name_8 {
  width: 600px;
}

.title_shadow {
  border-radius: 3000px;
  opacity: 0.05;
  background: #168ce4;
  filter: blur(70.55000305175781px);
  width: 778px;
  height: 181px;
}
.parent-hover:hover .height_block {
  height: 50px;
  widows: 2px;
  fill: #168CE4;
}

.height_block{
  widows: 2px;
  height: 121px;
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
