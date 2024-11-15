<template>
  <div class="login-page">
    <UContainer class="form-container">
      <h1 class="title">Welcome Back</h1>
      <p class="subtitle">Log in to access your account</p>
      <UForm @submit="handleLogin" class="login-form" align="center" gap="md">
        <UFormItem label="Email" required class="form-item">
          <UInput
            v-model="email"
            placeholder="Enter your email"
            type="email"
            variant="outlined"
            required
            size="lg"
          />
        </UFormItem>
        <UFormItem label="Password" required class="form-item">
          <UInput
            v-model="password"
            placeholder="Enter your password"
            type="password"
            variant="outlined"
            required
            size="lg"
          />
        </UFormItem>
        <div class="form-actions">
          <UButton
            type="submit"
            class="login-button"
            size="lg"
            style="
              background: linear-gradient(135deg, #667eea, #764ba2);
              color: white;
              border: none;
              width: 100%;
              text-align: center;
              display: flex;
              justify-content: center;
              align-items: center;
            "
          >
            Log In
          </UButton>
        </div>
      </UForm>
      <div class="form-footer">
        <p class="forgot-password">
          <a href="/reset-password" class="link">Forgot your password?</a>
        </p>
        <p>
          Don’t have an account?
          <a href="/signup" class="link">Sign up now</a>
        </p>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  // State for form inputs
  const email = ref('');
  const password = ref('');

  // Handle form submission
  const handleLogin = (event: Event) => {
    event.preventDefault();
    // Perform login logic here (e.g., API call)
    console.log('Email:', email.value, 'Password:', password.value);
  };
</script>

<style scoped>
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea, #764ba2);
  }

  .form-container {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    max-width: 400px;
    width: 100%;
    text-align: center;
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .subtitle {
    font-size: 1rem;
    color: #666;
    margin-bottom: 1.5rem;
  }

  .login-form {
    display: flex;
    flex-direction: column;
  }

  .form-item {
    margin-bottom: 1rem;
  }

  .form-actions {
    margin-top: 1rem;
  }

  .login-button {
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    height: 48px;
  }

  .login-button:hover {
    opacity: 0.9;
  }

  .form-footer {
    margin-top: 1.5rem;
    color: #666;
  }

  .forgot-password {
    margin-bottom: 0.5rem;
  }

  .link {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>
