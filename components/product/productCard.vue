<template>
  <div class="product-card">
    <img :src="image" :alt="name" class="product-image" />
    <h5 class="product-name">{{ name }}</h5>
    <p class="product-price">
      ${{ price ? price : 'Confirme o valor com a loja.' }}
    </p>
    <button class="add-to-cart" @click="addToCart">Add to Cart</button>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    image: String,
    name: String,
    price: String,
  });

  const addToCart = () => {
    console.log(`${name} added to cart!`);
  };
</script>

<style scoped>
  .product-card {
    padding: 15px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }

  .product-card:hover {
    transform: translateY(-5px);
  }

  .product-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .product-name {
    font-size: 1rem;
    font-weight: bold;
    margin: 10px 0;
  }

  .product-price {
    color: #666;
    margin-bottom: 10px;
  }

  .add-to-cart {
    padding: 10px 15px;
    border: none;
    background-color: #2596be;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .add-to-cart:hover {
    background-color: #1d7fa5;
  }
</style>
