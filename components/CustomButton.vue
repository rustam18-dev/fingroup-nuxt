<template>
  <button :class="classes" class="button">
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
  @apply opacity-0 hover:duration-1000 duration-500 absolute bottom-10 uppercase text-white text-[12px] font-semibold w-[300px] h-[48px] text-center border border-mainB rounded-[10px]
}
.button--light{
  border-radius: 50px;
  border: 1.5px solid #168CE4; 
}
.button:hover {
  opacity: 0;
  background: rgba(22, 140, 228, 0.20);
  transition: opacity 280ms ease;
}

.btn1::before {
  content: url('../assets/svg/logo.svg');
  position: absolute;
  top: 0;
  left: 110%;
  height: 100%;
  width: 10px;
  transition: left 300ms ease;
}

.btn2::before {
  content: url('../assets/svg/logo.svg');
  position: absolute;
  top: 0;
  left: 102%;
  height: 100%;
  width: 10px;
  transition: left 300ms ease;
}

.button:hover {
  opacity: 1; 
}
.button:hover .btn1::before {
  left: -32%; 
}
.button:hover .btn2::before{
  left: -40%; 
}
</style>