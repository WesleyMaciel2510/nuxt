<script setup lang="ts">
  import { ref } from 'vue';

  // Form data
  const form = ref({
    address: '',
    city: '',
    postalCode: '',
    country: '',
    paymentMethod: '',
  });

  // Country and Payment Methods
  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia'];
  const paymentMethods = ['Credit Card', 'PayPal', 'Apple Pay'];

  // Selected payment method
  const selectedPaymentMethod = ref(paymentMethods[0]);

  const submitForm = () => {
    // Add logic for form submission (e.g., API call)
    console.log('Form submitted:', form.value);
  };
</script>

<template>
  <div class="purchase-container">
    <h2>Confirm Your Purchase</h2>

    <!-- Delivery Address Section -->
    <div class="section">
      <h2>Delivery Address</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="address">Street Address</label>
          <input
            v-model="form.address"
            type="text"
            id="address"
            placeholder="Enter your street address"
            required
          />
        </div>

        <div class="form-group">
          <label for="city">City</label>
          <input
            v-model="form.city"
            type="text"
            id="city"
            placeholder="Enter your city"
            required
          />
        </div>

        <div class="form-group">
          <label for="postalCode">Postal Code</label>
          <input
            v-model="form.postalCode"
            type="text"
            id="postalCode"
            placeholder="Enter your postal code"
            required
          />
        </div>

        <div class="form-group">
          <label for="country">Country</label>
          <select v-model="form.country" id="country" required>
            <option value="" disabled>Select your country</option>
            <option
              v-for="country in countries"
              :key="country"
              :value="country"
            >
              {{ country }}
            </option>
          </select>
        </div>
      </form>
    </div>

    <!-- Payment Method Section with Dropdown -->
    <div class="section">
      <h2>Payment Method</h2>
      <div class="form-group">
        <label for="paymentMethod">Select Payment Method</label>
        <UInputMenu v-model="selectedPaymentMethod" :options="paymentMethods" />
      </div>
    </div>

    <!-- Confirmation Section -->
    <div class="confirmation">
      <button @click="submitForm" class="submit-btn">Confirm Purchase</button>
    </div>
  </div>
</template>

<style scoped>
  .purchase-container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }

  .section {
    margin-bottom: 30px;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #444;
  }

  .form-group {
    margin-bottom: 15px;
  }

  label {
    font-weight: bold;
    color: #444;
  }

  input,
  select,
  .UInputMenu {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 5px;
  }

  select {
    padding: 8px;
  }

  .UInputMenu {
    padding: 8px;
  }

  .confirmation {
    text-align: center;
  }

  .submit-btn {
    width: 100%;
    padding: 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1.1rem;
  }

  .submit-btn:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    .purchase-container {
      padding: 15px;
    }

    h1 {
      font-size: 1.3rem;
    }

    .section h2 {
      font-size: 1.2rem;
    }

    .form-group input,
    .form-group select {
      padding: 8px;
    }

    .submit-btn {
      font-size: 1rem;
    }
  }
</style>
