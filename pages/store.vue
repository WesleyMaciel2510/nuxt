<template>
  <Header />

  <div class="store-page">
    <!-- Store Section -->
    <section class="store-header">
      <div class="store-header-content">
        <!-- Store Image -->
        <div class="store-image">
          <img src="~/assets/store.jpg" alt="Store Image" />
        </div>
        <!-- Store Details -->
        <div class="store-details">
          <h1 class="store-name">{{ store.name }}</h1>
          <p class="store-description">{{ store.description }}</p>
          <p class="store-location">{{ store.location }}</p>
          <div class="store-rating">
            <span
              v-for="i in 5"
              :key="i"
              :class="['star', { active: i <= rating }]"
            >
              &#9733;
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="product-list">
      <h1>Main Products</h1>
      <div class="product-cards">
        <div
          v-for="product in store.products"
          :key="product.id"
          class="product-card"
        >
          <img src="~/assets/glasses.png" alt="Product Image" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p class="price">${{ product.price }}</p>
          <button class="btn add-to-cart">Add to Cart</button>
        </div>
      </div>
    </section>

    <!-- Contact Button -->
    <section class="contact-section">
      <button class="btn contact-us">Contact Us</button>
    </section>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const store = {
    id: 1,
    name: 'Awesome Store',
    description: 'A great place to find the best products.',
    location: '123 Market St, City, Country',
    products: [
      {
        id: 1,
        name: 'Glasses',
        description: 'Stylish glasses',
        price: 99.99,
        image: '~/assets/glasses.png',
      },
      {
        id: 2,
        name: 'Glasses',
        description: 'Stylish glasses',
        price: 99.99,
        image: '~/assets/glasses.png',
      },
      {
        id: 3,
        name: 'Glasses',
        description: 'Stylish glasses',
        price: 99.99,
        image: '~/assets/glasses.png',
      },
      {
        id: 4,
        name: 'Glasses',
        description: 'Stylish glasses',
        price: 99.99,
        image: '~/assets/glasses.png',
      },
    ],
  };

  const rating = 4;
</script>

<style scoped>
  .store-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #000;
  }

  .store-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  .store-header-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .store-image img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  }

  .store-details {
    max-width: 400px;
  }

  .store-name {
    font-size: 2rem;
    font-weight: bold;
  }

  .store-description {
    font-size: 1.2rem;
    color: #666;
  }

  .store-location {
    font-size: 1rem;
    color: #999;
  }

  .store-rating {
    display: flex;
    gap: 0.2rem;
    color: #ffd700;
  }

  .star {
    font-size: 1.5rem;
  }

  .star.active {
    color: #ffd700;
  }

  .product-list {
    width: 100%;
    max-width: 1200px;
    padding: 1rem;
  }

  .product-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }

  .product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  }

  .product-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  }

  .price {
    font-size: 1.2rem;
    color: #333;
    margin: 0.5rem 0;
  }

  .btn {
    padding: 0.6rem 1.2rem;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .add-to-cart {
    margin-top: 1rem;
  }

  .btn:hover {
    background-color: #007bff;
  }

  .contact-us {
    margin-top: 2rem;
    background-color: #007bff;
    transition: background-color 0.3s ease;
  }

  .contact-us:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    .store-header-content {
      flex-direction: column;
      align-items: center;
    }
  }
</style>
