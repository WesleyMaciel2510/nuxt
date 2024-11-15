<template>
  <Header />

  <section class="carousel-section">
    <h2>Featured Products</h2>
    <CarouselCard
      image="https://via.placeholder.com/300"
      title="Amazing Product"
      description="This is an amazing product."
    />
  </section>

  <section class="categories-section">
    <h2>Shop by Categories</h2>
    <div class="categories-container">
      <CategoryCard image="https://via.placeholder.com/80" name="Electronics" />
      <CategoryCard image="https://via.placeholder.com/80" name="Fashion" />
      <CategoryCard image="https://via.placeholder.com/80" name="Home" />
    </div>
  </section>

  <section class="products-section">
    <h2>Popular Products</h2>
    <div class="products-container">
      <ProductCard
        image="https://via.placeholder.com/300"
        name="Smartphone"
        :price="699.99"
      />
      <ProductCard
        image="https://via.placeholder.com/300"
        name="Headphones"
        :price="299.99"
      />
      <ProductCard
        image="https://via.placeholder.com/300"
        name="Laptop"
        :price="999.99"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
  import Header from '~/components/header/Header.vue';
  import Footer from '~/components/footer/Footer.vue';
  import CarouselCard from '~/components/carousel/cards.vue';
  import CategoryCard from '~/components/category/categoryCard.vue';
  import ProductCard from '~/components/product/productCard.vue';
  import AirPodImage from '~/components/image-row/airpod.vue';

  const categories = [
    { id: 1, name: 'Electronics', icon: 'i-heroicons-light-chip' },
    { id: 2, name: 'Clothing', icon: 'i-heroicons-light-tshirt' },
    { id: 3, name: 'Home Appliances', icon: 'i-heroicons-light-home' },
    { id: 4, name: 'Books', icon: 'i-heroicons-light-book' },
  ];

  const trendingProducts = [
    {
      id: 1,
      name: 'Smartphone X',
      price: '$999',
      image: '/images/smartphone.jpg',
    },
    {
      id: 2,
      name: 'Noise-canceling Headphones',
      price: '$299',
      image: '/images/headphones.jpg',
    },
    { id: 3, name: '4K Smart TV', price: '$899', image: '/images/tv.jpg' },
  ];
</script>

<style scoped>
  .dashboard {
    padding: 20px;
    background-color: #f8f9fa;
  }

  .hero {
    margin-bottom: 30px;
  }

  .categories,
  .trending {
    margin-bottom: 40px;
  }

  .categories h2,
  .trending h2 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
  }

  .category-list,
  .product-list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }

  .category-list {
    justify-content: space-between;
  }

  .product-list {
    justify-content: flex-start;
  }
</style>
