<script setup >
const flag = ref(null)

onMounted(() => {
  flag.value.style.backgroundImage = "url(https://flagcdn.com/w320/ad.png)";
})
</script>


<template>
  <div class="relative flex items-center after:w-[10px] after:h-[10px] after:border-black/70 after:border-b after:border-r after:transform after:rotate-45 after:absolute after:right-5">
    <select class="text-black/70 bg-white px-3 py-4 transition-all cursor-pointer hover:border-blue-600/30 border border-gray-200 rounded-[30px] outline-blue-600/50 appearance-none invalid:text-black/30 w-full">
      <option value="" disabled selected>Select an option</option>
      <option value="option-2">Option 2</option>
      <option value="option-3">Option 3</option>
      <option ref="flag" class="flag" value="option-1"></option>
    </select>
  </div>
</template>

<style scoped>

</style>
