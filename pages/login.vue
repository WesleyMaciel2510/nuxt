<script setup lang="ts">
  import { reactive } from 'vue';

  const state = reactive({
    email: '',
    password: '',
  });

  const handleLogin = (event: Event) => {
    event.preventDefault();
    console.log('Email:', state.email, 'Password:', state.password);
  };
</script>

<template>
  <div class="login-page">
    <UContainer class="form-container">
      <h1 class="title">Welcome Back</h1>
      <p class="subtitle">Log in to access your account</p>
      <UForm :state="state" @submit="handleLogin" class="login-form">
        <UFormGroup label="Email" class="form-item">
          <UInput
            v-model="state.email"
            placeholder="Enter your email"
            type="email"
            required
            size="lg"
            class="input-field"
          />
        </UFormGroup>
        <UFormGroup label="Password" class="form-item">
          <UInput
            v-model="state.password"
            placeholder="Enter your password"
            type="password"
            required
            size="lg"
            class="input-field"
          />
        </UFormGroup>
        <div class="form-actions">
          <UButton type="submit" class="login-button">Log In</UButton>
        </div>
      </UForm>
      <div class="form-footer">
        <p class="forgot-password">
          <a href="/reset-password" class="link">Forgot your password?</a>
        </p>
        <p>
          Don't have an account?
          <a href="/register" class="link">Sign up now</a>
        </p>
      </div>
    </UContainer>
  </div>
</template>

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
    gap: 1rem;
  }

  .form-actions {
    margin-top: 1rem;
  }

  .login-button {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: opacity 0.3s ease;
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

  .input-field {
    background-color: white !important;
    color: #333;
    border: 1px solid #ccc;
  }

  .input-field::placeholder {
    color: black !important;
  }

  .form-item label {
    color: black !important;
    font-weight: normal;
  }

  .input-field:focus {
    border-color: #667eea;
    outline: none;
  }
</style>
