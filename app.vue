<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/iconFinGroup.png' },
  ],
})
</script>

<template>
  <div>
   <Header />
    <div class="bg-[#1A1A1A] overflow-hidden">
      <div>
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
    <Footer />
  </div>
</template>
