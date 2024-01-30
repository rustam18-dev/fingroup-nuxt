<template>
  <div class="fixed inset-0 z-50 bg-black bg-opacity-60" @click.self="modalApplication.isCloseModalApplicationStore()">
    <div class="flex flex-col bg-white mx-auto mt-[80px] rounded-2xl max-w-[500px]">
      <div class="p-6 flex justify-center items-center flex-col w-full gap-y-2">
        <h1 class="text-[30px] font-bold text-center">Оставить заявку</h1>
        <p class="text-center opacity-70 font-[200]">Укажите ваши данные и мы свяжемся с Вами в ближайшее время.</p>
        <div class="flex flex-col w-full gap-y-4 mt-2">
          <UiInput />
          <UiSelect />
          <UiFormButton>Отправить заявку</UiFormButton>
        </div>
        <div class="py-2">
          <p class="text-center text-[12px]">
            Нажимая на кнопку, Вы даете согласие на обработку персональных данных и соглашаетесь c <span class="text-mainB cursor-pointer" @click="$router.push('/confidence')">политикой конфиденциальности</span>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useModalApplication} from "~/store/ModalApplicationStore";

const modalApplication = useModalApplication()
</script>