<template>
  <div data-aos="fade-left" class="overlay" @click="closeModal($event)">
    <div class="bg-white w-[70%] h-screen absolute top-0 right-0 bottom-0">
      <div class="flex justify-between border-b border-[#D9D9D9] p-4">
        <img src="../assets/svg/logo_black.png" alt="photo">
        <button @click="$emit('isSidebar')" class="lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(22,140,228,1)">
            <rect class="translate-x-[4px] translate-y-[4px] rotate-45" width="18" height="2" />
            <rect class="translate-x-[3px] translate-y-[17px] -rotate-45" width="18" height="2" />
          </svg>
        </button>
      </div>
      <div class="p-4">
        <ol class="flex flex-col items-end font-Montserrat gap-y-[25px] pr-[20px]">
          <button class="sidebar_text">О компании</button>
          <button class="sidebar_text">Услуги</button>
          <button class="sidebar_text">Проекты</button>
          <button class="sidebar_text">Продукты</button>
          <button class="sidebar_text">Контакты</button>
          <button class="sidebar_text">Оставить заявку</button>
        </ol>
      </div>
    </div>

  </div>
</template>

<script setup>
const emit = defineEmits(['isSidebar']);

function closeModal(event) {
  if (event.target.classList.contains('overlay')) {
    emit('isSidebar');
  }
}
</script>


<style scoped>
.sidebar_text {
  @apply font-semibold text-[16px] md:text-[20px] active:text-mainB
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
}
</style>