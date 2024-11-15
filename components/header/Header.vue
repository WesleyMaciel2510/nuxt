<template>
  <header class="header">
    <div class="logo">
      <button class="menu-icon">
        <UIcon name="i-heroicons-light-bulb" class="w-5 h-5 text-white" />
      </button>
      <h1>My-commerce</h1>
    </div>

    <nav class="navigation">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Stores</a></li>
        <li><a href="#">Near You</a></li>
        <li><a href="#">Orders</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>

    <div class="search-box">
      <input type="text" placeholder="Search" class="search-input" />
      <button class="search-icon">
        <!-- <Icon name="" class="w-5 h-5 text-white" /> -->
      </button>
    </div>

    <div class="icons">
      <button class="icon" aria-label="Favorites">
        <UIcon name="i-heroicons-light-heart" class="w-5 h-5 text-white" />
      </button>
      <button class="icon" aria-label="Cart">
        <UIcon
          name="i-heroicons-light-shopping-cart"
          class="w-5 h-5 text-white"
        />
      </button>

      <button
        class="icon sign-out"
        aria-label="Sign Out"
        @click="toggleVerticalNav"
        @click.stop
      >
        <a>Sign out</a>
        <UIcon name="i-heroicons-light-exit" class="w-5 h-5 text-white" />
      </button>

      <!-- Vertical Navigation component -->
      <UVerticalNavigation
        :links="links"
        v-if="isVerticalNavVisible"
        id="vertical-nav"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';

  const links = [
    [
      {
        label: 'Profile',
        avatar: {
          src: 'https://avatars.githubusercontent.com/u/739984?v=4',
        },
        badge: 100,
      },
      {
        label: 'Installation',
        icon: 'i-heroicons-home',
        to: '/getting-started/installation',
      },
      {
        label: 'Vertical Navigation',
        icon: 'i-heroicons-chart-bar',
        to: '/components/vertical-navigation',
      },
      {
        label: 'Command Palette',
        icon: 'i-heroicons-command-line',
        to: '/components/command-palette',
      },
    ],
    [
      {
        label: 'Examples',
        icon: 'i-heroicons-light-bulb',
      },
      {
        label: 'Help',
        icon: 'i-heroicons-question-mark-circle',
      },
    ],
  ];

  // State to manage visibility of the vertical navigation
  const isVerticalNavVisible = ref(false);

  // Handle clicks outside the component to close the navigation
  const closeVerticalNav = (event: MouseEvent) => {
    const navElement = document.getElementById('vertical-nav');
    if (navElement && !navElement.contains(event.target as Node)) {
      isVerticalNavVisible.value = false;
    }
  };

  // Add event listener when component is mounted
  onMounted(() => {
    document.addEventListener('click', closeVerticalNav);
  });

  // Remove event listener when component is unmounted
  onUnmounted(() => {
    document.removeEventListener('click', closeVerticalNav);
  });

  // Function to toggle visibility of the vertical navigation
  const toggleVerticalNav = () => {
    //isVerticalNavVisible.value = !isVerticalNavVisible.value;
  };
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #2596be;
  }

  .logo {
    display: flex;
    align-items: center;
  }

  .menu-icon {
    background: none;
    border: none;
    font-size: 24px;
    margin-right: 10px;
  }

  .navigation ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .navigation li {
    margin: 0 15px;
  }

  .search-box {
    display: flex;
    align-items: center;
  }

  .search-input {
    padding: 8px;
    margin-right: 5px;
    border-radius: 15px;
  }

  .search-icon {
    background: none;
    border: none;
    font-size: 18px;
  }

  .icons {
    display: flex;
    align-items: center;
  }

  .icon {
    background: none;
    border: none;
    font-size: 22px;
    margin-left: 20px;
    cursor: pointer;
  }

  /* Circular Sign-Out Icon */
  .sign-out {
    background-color: #000;
    border-radius: 10%;
    padding: 10px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sign-out:hover {
    background-color: #e0e0e0;
  }
</style>
