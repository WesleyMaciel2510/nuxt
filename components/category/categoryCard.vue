<template>
  <div class="category-card">
    <img :src="image" :alt="name" class="category-image" />
    <h4 class="category-name">{{ name }}</h4>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    image: String,
    name: String,
  });
</script>

<style scoped>
  .category-card {
    text-align: center;
    padding: 15px;
    border-radius: 10px;
    background-color: #ffffff;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .category-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .category-image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .category-name {
    font-size: 1rem;
    color: #333;
    font-weight: bold;
  }
</style>
