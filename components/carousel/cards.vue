<script setup lang="ts">
  import { ref } from 'vue';
  import banner2 from '@/assets/banner/2.jpg';
  import banner3 from '@/assets/banner/3.jpg';
  import banner4 from '@/assets/banner/4.jpg';
  import banner5 from '@/assets/banner/5.jpg';
  import banner6 from '@/assets/banner/6.jpg';

  const items = [banner2, banner3, banner4, banner5, banner6];
  const carouselRef = ref();

  onMounted(() => {
    setInterval(() => {
      if (!carouselRef.value) return;

      if (carouselRef.value.page === carouselRef.value.pages) {
        return carouselRef.value.select(0);
      }

      carouselRef.value.next();
    }, 3000);
  });
</script>

<template>
  <UCarousel
    v-slot="{ item }"
    :items="items"
    :ui="{ item: 'basis-full md:basis-1/2 lg:basis-1/3' }"
    indicators
    class="rounded-lg overflow-hidden"
  >
    <img :src="item" class="w-full" draggable="false" />
  </UCarousel>
</template>
