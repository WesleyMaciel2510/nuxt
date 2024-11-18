<script setup>
  import { useAuth } from '~/store/auth';
  import { navigateTo } from 'nuxt/app';

  const { isAuthenticated } = useAuth();

  if (isAuthenticated.value) {
    navigateTo('/dashboard');
  } else {
    navigateTo('/login');
  }
</script>

<template>
  <div>Loading...</div>
</template>
