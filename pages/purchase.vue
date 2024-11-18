<template>
  <Header />

  <div class="purchase-container">
    <h2 class="main-heading">Confirm Your Purchase</h2>

    <!-- Delivery Address Section -->
    <div class="section">
      <h2>Delivery Address</h2>
      <form @submit.prevent="submitForm">
        <div class="form-row">
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
        </div>

        <div class="form-row">
          <div class="form-group half-width">
            <label for="city">City</label>
            <input
              v-model="form.city"
              type="text"
              id="city"
              placeholder="Enter your city"
              required
            />
          </div>
          <div class="form-group half-width">
            <label for="postalCode">Postal Code</label>
            <input
              v-model="form.postalCode"
              type="text"
              id="postalCode"
              placeholder="Enter your postal code"
              required
            />
          </div>
        </div>
      </form>
    </div>

    <!-- Payment Method Section -->
    <div class="section">
      <h2>Payment Method</h2>
      <div class="form-group payment-method">
        <label for="paymentMethod">Select Payment Method</label>
        <UInputMenu v-model="selectedPaymentMethod" :options="paymentMethods" />
      </div>
    </div>

    <!-- Confirmation Section -->
    <div class="confirmation">
      <button @click="submitForm" class="submit-btn">Confirm Purchase</button>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  // Form data
  const form = ref({
    address: '',
    city: '',
    postalCode: '',
  });

  // Country and Payment Methods
  const countries = ['United States', 'Canada', 'United Kingdom', 'Australia'];
  const paymentMethods = ['Credit Card', 'PayPal', 'Pix', 'Debit Card', 'Cash'];

  // Selected payment method
  const selectedPaymentMethod = ref(paymentMethods[0]);

  const submitForm = () => {
    console.log('Form submitted:', form.value);
  };
</script>

<style scoped>
  .purchase-container {
    margin: auto;
    padding: 20px;
    background-color: #000;
    color: #000;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
  }

  .main-heading {
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
    font-weight: bold;
  }

  .section {
    margin-bottom: 30px;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #fff;
    font-weight: bold;
  }

  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 15px;
  }

  .form-group {
    flex: 1;
    min-width: 100%;
  }

  .form-group.half-width {
    flex: 0 0 calc(50% - 10px);
  }

  label {
    display: block;
    font-weight: 500;
    margin-bottom: 5px;
    color: #ddd;
  }

  input,
  select,
  .UInputMenu {
    width: 100%;
    padding: 12px;
    border: 1px solid #333;
    border-radius: 6px;
    background-color: #1a1a1a;
    color: #1a1a1a;
    transition:
      border-color 0.2s,
      box-shadow 0.2s;
  }

  input:focus,
  select:focus,
  .UInputMenu:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.6);
    outline: none;
  }

  .form-group.payment-method {
    max-width: 300px;
  }

  .submit-btn {
    padding: 15px;
    background-color: #3b82f6;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    transition:
      background-color 0.2s,
      box-shadow 0.2s;
  }

  .submit-btn:hover {
    background-color: #2563eb;
    box-shadow: 0 4px 8px rgba(37, 99, 235, 0.6);
  }

  @media (max-width: 768px) {
    .purchase-container {
      padding: 15px;
    }

    .main-heading {
      font-size: 1.5rem;
    }

    .section h2 {
      font-size: 1.3rem;
    }

    input,
    select {
      padding: 10px;
    }

    .submit-btn {
      font-size: 1rem;
    }
  }
</style>
