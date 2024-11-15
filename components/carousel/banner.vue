<script setup lang="ts">
  import { ref } from 'vue';
  import start from '@/assets/banner/start.png';
  import banner1 from '@/assets/banner/1.jpg';

  const items = [start, banner1];
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
    :ui="{ item: 'basis-full' }"
    class="rounded-lg overflow-hidden"
    arrows
    indicators
  >
    <img
      :src="item"
      class="w-full box-border p-15 rounded-lg"
      draggable="true"
    />
  </UCarousel>
</template>
