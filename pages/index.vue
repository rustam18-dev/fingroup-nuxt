<script lang="ts" setup>
useHead({
  title: 'FinGroup - автоматизация бизнес процессов!',
  meta: [
    {
      name: 'description',
      content: 'Автоматизация бизнес процессов в Таджикистане, Создание сайтов, Консультация бизнес процессов В Таджикистане!'
    },
    {
      name: 'keywords',
      content: 'fingroup, FinGroup, фингруп, Фин груп, создание сайтов в Таджикистане, создание сайтов в Худжанде, автоматизация бизнес-процессов в Таджикистане, автоматизация бизнес-процессов в Худжанде '
    }
  ]
})
</script>

<template>
  <div>
    <Navbar/>
    <Service/>

    <div class="relative">
      <Employees/>
    </div>
    <Industries/>
    <project/>
    <partners/>
    <advantages/>
    <OurAchievements/>
    <questions/>
    <Footer/>
  </div>
</template>

<script>
</script>

<style>
::-webkit-scrollbar{
  background: #000;
}
::-webkit-scrollbar-thumb{
  background: #168CE4;
  border-radius: 50px;
}
</style>