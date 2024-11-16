<template>
  <div class="product-container">
    <div class="product-header">
      <h1>{{ product.name }}</h1>
      <div class="rating">
        <span
          v-for="star in 5"
          :key="star"
          :class="['star', { filled: star <= product.rating }]"
        >
          ★
        </span>
      </div>
    </div>

    <div class="product-body">
      <div class="image-container">
        <img :src="`/assets/${product.imageUrl}`" alt="Product Image" />
      </div>

      <div class="details">
        <p class="description">{{ product.description }}</p>
        <p class="price">Price: ${{ product.price.toFixed(2) }}</p>

        <div class="quantity">
          <label for="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            v-model="quantity"
            :max="product.quantityInStock"
            min="1"
          />
          <p v-if="quantity > product.quantityInStock" class="stock-warning">
            Not enough stock!
          </p>
        </div>

        <div class="actions">
          <button
            @click="addToCart"
            :disabled="quantity <= 0 || quantity > product.quantityInStock"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const product = ref({
    id: 1,
    name: 'Stylish Sunglasses',
    description: 'A trendy pair of sunglasses perfect for sunny days.',
    price: 49.99,
    quantityInStock: 50,
    rating: 4, // Rating out of 5
    imageUrl: 'glasses.png', // Image path
  });

  const quantity = ref(1);

  const addToCart = () => {
    // Implement logic for adding the product to the cart
    console.log(`Added ${quantity.value} of ${product.value.name} to cart.`);
  };
</script>

<style scoped>
  .product-container {
    max-width: 1200px;
    margin: 20px auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .product-header {
    text-align: center;
  }

  .product-header h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .rating {
    font-size: 1.5rem;
    color: #ffd700;
  }

  .star {
    margin: 0 2px;
  }

  .star.filled {
    color: #ffd700;
  }

  .product-body {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    width: 100%;
  }

  .image-container {
    flex: 1;
    max-width: 400px;
  }

  .image-container img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .details {
    flex: 2;
    margin-left: 20px;
  }

  .description {
    font-size: 1rem;
    margin-bottom: 20px;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .quantity {
    margin-bottom: 20px;
  }

  .quantity input {
    width: 60px;
    padding: 5px;
    margin-left: 10px;
    font-size: 1rem;
  }

  .stock-warning {
    color: red;
    font-size: 0.9rem;
  }

  .actions button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .actions button:disabled {
    background-color: #ddd;
  }

  .actions button:hover {
    background-color: #218838;
  }

  @media (max-width: 768px) {
    .product-body {
      flex-direction: column;
      align-items: center;
    }

    .image-container {
      margin-bottom: 20px;
    }

    .details {
      margin-left: 0;
      text-align: center;
    }
  }
</style>
