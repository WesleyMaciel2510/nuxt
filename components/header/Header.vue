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
            d="m3 12l2-2m0 0l7-7l7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 1-1h2a1 1 0 1 1v4a1 1 0 0 0 1 1m-6 0h6"
          />
        </svg>
        <li><a href="/dashboard">Home</a></li>
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
              d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0"
            />
            <path d="M15 11a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
          </g>
        </svg>
        <li><a href="/store">Stores</a></li>
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
            d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4"
          />
        </svg>
        <li><a href="#">Near You</a></li>
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
            d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 13a2 2 0 0 1-2-2V7m2 13a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7z"
          />
        </svg>
        <li><a href="/order">Orders</a></li>
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
            d="M5.121 17.804A13.94 13.94 0 0 1 12 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0m6 2a9 9 0 1 1-18 0a9 9 0 0 1 18 0"
          />
        </svg>
        <li><a href="#">Profile</a></li>
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
      <router-link to="/cart">
        <button class="icon" aria-label="Cart">
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-8 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
            />
          </svg>
        </button>
      </router-link>

      <button
        class="icon sign-out"
        aria-label="Sign Out"
        @click="toggleVerticalNav"
        @click.stop
      >
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
            d="m17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1"
          />
        </svg>
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
    gap: 15px;
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
    background-color: #2596be;
    border-radius: 10%;
    padding: 10px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
