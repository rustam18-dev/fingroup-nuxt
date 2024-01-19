<script setup>
import { ref, onMounted } from 'vue';
import { api } from "~/composable/useApi.js"
import Input from "~/components/Ui/Input.vue";

const countries = ref([]);
const selectedCountry = ref(null);
const isOpenSelect = ref(false)
const defaultCountry = ref(null)
const phone = ref(null)

onMounted(() => {
  getCountries();
})

const getCountries = async () => {
  try {
    const { data } = await api('https://restcountries.com/v3.1/independent?status=true&fields=fifa,flags,name,idd,area');
    const unSortedCountries = data.map(item => {
      if (item.idd.suffixes.length === 1) {
        item.idd.root += item.idd.suffixes[0];
      }
      return item;
    })

    countries.value = unSortedCountries.sort((a, b) => {
      const nameA = a.name.common.toUpperCase();
      const nameB = b.name.common.toUpperCase();
      if (nameB > nameA) return -1;
      if (nameB < nameA) return 1;
    })


    defaultCountry.value  = binarySearch(countries.value, 143100)


  } catch (e) {

  }

}

const binarySearch = (array, item) => {
  let s = 0;
  let h = array.length - 1;

  for (let i = 0; s <= h; i++) {
    let m = Math.floor((s + h) / 2);
    let guess = array[m].area;

    if (guess === item)  return array[m]
    if (guess > item) {
      h = m - 1;
    } else {
      s = m + 1;
    }
  }

  return false;
};


const selectCountry = country => {
  isOpenSelect.value = false
  selectedCountry.value = country;
  phone.value.focus()
}


</script>

<template>
  <div v-if="countries">
    <div  class="flex justify-center ">
      <div class="flex w-full">
        <div  class="flex justify-between cursor-pointer items-center w-[30%] py-[15px] text-sm px-[20px]  box-border rounded-l-[30px] border"  @click="isOpenSelect = !isOpenSelect">
          <div v-if="selectedCountry" class="flex justify-center items-center ml-1 gap-x-4">
            <img :src="selectedCountry.flags.svg" class="w-[35px]" :alt="selectedCountry.flags.alt">
            <p>{{ selectedCountry.idd.root }}</p>
          </div>
          <div v-if="!selectedCountry && defaultCountry" class="flex justify-center items-center ml-1 gap-x-4">
            <img :src="defaultCountry.flags.svg" class="w-[35px]" :alt="defaultCountry.name.common"/>
            <p>{{ defaultCountry.idd.root }}</p>
          </div>
        </div>
        <input ref="phone" type="text" class="w-full border border-l-0 rounded-r-[30px] py-2 pl-4 focus:outline-none">
      </div>
    </div>
    <ul v-if="isOpenSelect" class="w-full h-[300px] overflow-auto rounded-md mt-2">
      <li v-for="country in countries" :key="country.area" class="flex justify-start gap-x-4 pl-3 items-center w-full list-none overflow-hidden py-[15px]  box-border cursor-pointer hover:bg-black/5 rounded-[10px]" @click="selectCountry(country)">
        <p ref="selectText">{{ country.name.common }}</p>
        <img :src="country.flags.svg" class="w-[25px]" :alt="country.flags.alt">
        <p class="">{{ country.idd.root }}</p>
      </li>
    </ul>
  </div>
</template>

