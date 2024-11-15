<template>
  <div class="image-container">
    <img src="~/assets/AirPod.jpeg" alt="AirPod" class="w-full rounded-lg" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
  .image-container {
    margin-top: 20px; /* Optional: Add some space between CarouselCard and image */
  }
  img {
    max-width: 100%; /* Ensures the image scales well */
    height: auto;
  }
</style>
