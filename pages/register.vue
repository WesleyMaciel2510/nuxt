<template>
  <div class="register-page">
    <UContainer class="form-container">
      <h1 class="title">Create an Account</h1>
      <p class="subtitle">Sign up to start shopping</p>
      <UForm
        @submit="handleRegister"
        class="register-form"
        align="center"
        gap="md"
      >
        <UFormItem label="Username" required class="form-item">
          <UInput
            v-model="form.username"
            placeholder="Enter your username"
            type="text"
            variant="outlined"
            required
            size="lg"
          />
        </UFormItem>
        <UFormItem label="Full Name" required class="form-item">
          <UInput
            v-model="form.name"
            placeholder="Enter your full name"
            type="text"
            variant="outlined"
            required
            size="lg"
          />
        </UFormItem>
        <UFormItem label="Email" required class="form-item">
          <UInput
            v-model="form.email"
            placeholder="Enter your email"
            type="email"
            variant="outlined"
            required
            size="lg"
          />
        </UFormItem>
        <UFormItem label="Password" required class="form-item">
          <UInput
            v-model="form.password"
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
            class="register-button"
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
            Register
          </UButton>
        </div>
      </UForm>
      <div class="form-footer">
        <p>
          Already have an account?
          <a href="/login" class="link">Log in</a>
        </p>
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  interface Form {
    username: string;
    name: string;
    email: string;
    password: string;
  }

  // State for form inputs
  const form = ref<Form>({
    username: '',
    name: '',
    email: '',
    password: '',
  });

  // Handle form submission
  const handleRegister = (event: Event) => {
    event.preventDefault();
    // Perform registration logic here (e.g., API call)
    console.log('Form Data:', form.value);
  };
</script>

<style scoped>
  .register-page {
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

  .register-form {
    display: flex;
    flex-direction: column;
  }

  .form-item {
    margin-bottom: 1rem; /* Add vertical spacing between inputs */
  }

  .form-actions {
    margin-top: 1rem;
  }

  .register-button {
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.3s ease;
    height: 48px; /* Ensure consistent height */
  }

  .register-button:hover {
    opacity: 0.9;
  }

  .form-footer {
    margin-top: 1.5rem;
    color: #666;
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
