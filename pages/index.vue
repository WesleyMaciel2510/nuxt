<script setup>
import { useAuth } from '~/store/auth';
import { navigateTo } from 'nuxt/app';

const { isAuthenticated } = useAuth();

// Redirect based on authentication state
if (isAuthenticated.value) {
  navigateTo('/dashboard');
} else {
  navigateTo('/login');
}
</script>

<template>
  <div>Loading...</div>
</template>
