<template>
  <VmHero />
  <div class="dashboard">
    <!-- Main Content Section with Flex Layout -->
    <div class="main-content">
      <!-- Left Column for Links -->
      <div class="left-column">
        <h3>Product Categories</h3>
        <ul>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 18h.01M7 21h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2"
                />
              </svg>
              Smartphones
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2"
                />
              </svg>
              Screens
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path
                    d="M3 9a2 2 0 0 1 2-2h.93a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 10.07 4h3.86a2 2 0 0 1 1.664.89l.812 1.22A2 2 0 0 0 18.07 7H19a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  />
                  <path d="M15 13a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                </g>
              </svg>
              Cameras
            </a>
          </li>
          <li>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"
                />
              </svg>
              Games
            </a>
          </li>
          <li>
            <a href="#">
              <i class="icon-camera" />
              Cameras
            </a>
          </li>
        </ul>
      </div>

      <!-- Right Column for Image -->
      <div class="right-column">
        <img
          src="/assets/Hero-Dashboard.jpg"
          alt="Hero Dashboard"
          class="hero-image"
        />
      </div>
    </div>

    <!-- Featured Products Section -->
    <section class="carousel-section">
      <h2>Featured Products</h2>
      <CarouselCard
        image="https://via.placeholder.com/300"
        title="Amazing Product"
        description="This is an amazing product."
      />
    </section>

    <!-- Shop by Categories Section -->
    <section class="categories-section">
      <h2>Shop by Categories</h2>
      <div class="categories-container">
        <CategoryCard :image="EletronicsIcon" name="Electronics" />
        <CategoryCard :image="fashionIcon" name="Fashion" />
        <CategoryCard :image="HouseIcon" name="Home" />
        <CategoryCard :image="KidsIcon" name="Sports" />
        <CategoryCard :image="PetFoodIcon" name="Kids" />
        <CategoryCard :image="SportIcon" name="Pets" />
      </div>
    </section>

    <!-- Popular Products Section -->
    <section class="products-section">
      <h2>Popular Products</h2>
      <div class="products-container">
        <ProductCard :image="Dress" name="Dress" price="699.99" />
        <ProductCard :image="Earphone" name="Earphone" price="299.99" />
        <ProductCard :image="Glasses" name="Glasses" price="999.99" />
        <ProductCard :image="PC" name="PC" price="999.99" />
        <ProductCard :image="Ring" name="Laptop" price="999.99" />
        <ProductCard :image="Tissue" name="Laptop" price="999.99" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import Header from '~/components/header/Header.vue';
  import VmHero from '~/components/hero/Hero.vue';
  import Footer from '~/components/footer/Footer.vue';
  import CarouselCard from '~/components/carousel/cards.vue';
  import CategoryCard from '~/components/category/categoryCard.vue';
  import ProductCard from '~/components/product/productCard.vue';
  import EletronicsIcon from '~/assets/icon/electronics.png';
  import fashionIcon from '~/assets/icon/fashion.png';
  import HouseIcon from '~/assets/icon/house.png';
  import KidsIcon from '~/assets/icon/kids.png';
  import PetFoodIcon from '~/assets/icon/pet-food.png';
  import SportIcon from '~/assets/icon/sport.png';
  import Dress from '~/assets/products/dress.png';
  import Earphone from '~/assets/products/earphone.png';
  import Glasses from '~/assets/products/glasses.png';
  import PC from '~/assets/products/pc.png';
  import Ring from '~/assets/products/ring.png';
  import Tissue from '~/assets/products/tissue.png';

  const categories = [
    { id: 1, name: 'Electronics', icon: 'i-heroicons-light-chip' },
    { id: 2, name: 'Clothing', icon: 'i-heroicons-light-tshirt' },
    { id: 3, name: 'Home Appliances', icon: 'i-heroicons-light-home' },
    { id: 4, name: 'Books', icon: 'i-heroicons-light-book' },
  ];

  const trendingProducts = [
    { id: 1, name: '4K Smart TV', price: '$899', image: '/images/tv.jpg' },
    {
      id: 2,
      name: 'Wireless Noise-Canceling Headphones',
      price: '$299',
      image: '/images/headphones.jpg',
    },
    {
      id: 3,
      name: 'Gaming Laptop - Intel i7',
      price: '$1,199',
      image: '/images/laptop.jpg',
    },
    {
      id: 4,
      name: 'Smartphone - 128GB',
      price: '$699',
      image: '/images/smartphone.jpg',
    },
    {
      id: 5,
      name: 'Bluetooth Speakers',
      price: '$149',
      image: '/images/speakers.jpg',
    },
    {
      id: 6,
      name: '4K Ultra HD Webcam',
      price: '$120',
      image: '/images/webcam.jpg',
    },
    {
      id: 7,
      name: 'Digital Camera with 50mm Lens',
      price: '$799',
      image: '/images/camera.jpg',
    },
    {
      id: 8,
      name: 'Smart Fitness Tracker',
      price: '$99',
      image: '/images/fitness_tracker.jpg',
    },
    {
      id: 9,
      name: 'Portable Power Bank',
      price: '$45',
      image: '/images/powerbank.jpg',
    },
    {
      id: 10,
      name: 'Smart Home Security Camera',
      price: '$149',
      image: '/images/security_camera.jpg',
    },
    {
      id: 11,
      name: 'Laptop Backpack',
      price: '$49',
      image: '/images/backpack.jpg',
    },
    {
      id: 12,
      name: 'Noise-Canceling Earbuds',
      price: '$129',
      image: '/images/earbuds.jpg',
    },
  ];
</script>

<style scoped>
  .dashboard {
    padding: 20px;
    background-color: #000;
  }

  .main-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
  }

  /* Left Column Design */
  .left-column {
    width: 30%;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    height: fit-content;
  }

  .left-column h3 {
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: bold;
    color: #333;
    text-align: left;
  }

  .left-column ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .left-column ul li {
    margin-bottom: 15px;
  }

  .left-column ul li a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    transition: color 0.3s ease;
    padding: 8px;
    border-radius: 4px;
    text-decoration: none;
  }

  .left-column ul li a:hover {
    color: #0066cc;
    background-color: #f0f8ff;
  }

  .left-column ul li a i {
    margin-right: 12px;
    font-size: 18px;
    color: #333;
    transition: color 0.3s ease;
  }

  .left-column ul li a:hover i {
    color: #0066cc;
  }

  .left-column a svg {
    margin-left: 10px;
    margin-right: 8px;
  }

  /* Right Column for Image */
  .right-column {
    width: 65%;
    padding-left: 15px;
  }

  .hero-image {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  /* Icons for Links */
  .icon-phone::before {
    content: '\f10b';
    font-family: 'FontAwesome';
  }

  .icon-headphones::before {
    content: '\f025';
  }

  .icon-laptop::before {
    content: '\f109';
  }

  .icon-tv::before {
    content: '\f26c';
  }

  .icon-camera::before {
    content: '\f030';
  }
  .hero-image {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  /* Sections Titles */
  section h2 {
    font-size: 28px;
    font-weight: 600;
    color: #0066cc;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  /* Featured Products Section */
  .carousel-section {
    background-color: #f0f8ff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Categories Section */
  .categories-container {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    gap: 20px;
    flex-wrap: wrap;
    background-color: #f0f8ff;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  /* Popular Products Section */
  .products-container {
    display: flex;
    margin-left: 20px;
    gap: 30px;
    flex-wrap: wrap;
  }

  /* Product Card Styling */
  .product-card {
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.3s,
      box-shadow 0.3s;
  }

  .product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  /* Responsiveness */
  @media (max-width: 768px) {
    .main-content {
      flex-direction: column;
      align-items: center;
    }

    .left-column {
      width: 100%;
      margin-bottom: 20px;
    }

    .right-column {
      width: 100%;
    }

    .hero-image {
      max-width: 100%;
    }
  }
</style>
