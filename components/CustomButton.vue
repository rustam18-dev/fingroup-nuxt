<template>
  <button :class="classes" v-bind="$attrs" class="button z-[30]">
    <span class="btn1"></span>
    <span class="btn2"></span>
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps(['theme']);
const theme = ref(props.theme);

const classes = computed(() => ({
  [`button--${theme.value}`]: theme.value,
}));
</script>

<style scoped>
.button{
  overflow: hidden;
  @apply flex items-center justify-center hover:duration-1000 duration-500 px-[24px] py-[14px] relative uppercase text-white text-[12px] font-semibold w-[300px] max-h-[48px] min-h-[48px] text-center border border-mainB rounded-[10px]
}
.button--light{
  border-radius: 50px;
  border: 1.5px solid #168CE4; 
  width: auto;
  font-size: 14px;
}
.button:hover {
  background: rgba(22, 140, 228, 0.20);
  transition: opacity 380ms ease;
}

.btn1::before {
  content: url('../assets/svg/logo.svg');
  position: absolute;
  top: 0;
  left: 110%;
  height: 100%;
  width: 10px;
  transition: left 500ms ease;
}

.btn2::before {
  content: url('../assets/svg/logo.svg');
  position: absolute;
  top: 0;
  left: 102%;
  height: 100%;
  width: 10px;
  transition: left 500ms ease;
}

.button:hover .btn1::before {
  left: -62%; 
}
.button:hover .btn2::before{
  left: -70%; 
}
</style>