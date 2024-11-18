<template>
  <Header />

  <div class="order">
    <h1 class="text-4xl font-semibold mb-6 text-center">Order Confirmation</h1>

    <div class="mb-10 p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Shipping Address</h2>
      <p>
        <strong>Name:</strong>
        {{ order.shippingAddress.name }}
      </p>
      <p>
        <strong>Address:</strong>
        {{ order.shippingAddress.street }}
      </p>
      <p>
        <strong>City, State, ZIP:</strong>
        {{ order.shippingAddress.city }}, {{ order.shippingAddress.state }}
        {{ order.shippingAddress.zip }}
      </p>
      <p>
        <strong>Phone:</strong>
        {{ order.shippingAddress.phone }}
      </p>
    </div>

    <div class="mb-10 p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Order Summary</h2>
      <ul class="space-y-2">
        <li
          v-for="item in order.items"
          :key="item.id"
          class="flex justify-between"
        >
          <span>{{ item.name }} x {{ item.quantity }}</span>
          <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
        </li>
      </ul>
      <div class="mt-4">
        <p class="font-semibold">Subtotal: ${{ order.subtotal.toFixed(2) }}</p>
        <p class="font-semibold">
          Shipping: ${{ order.shippingCost.toFixed(2) }}
        </p>
        <p class="font-semibold">Tax: ${{ order.tax.toFixed(2) }}</p>
        <p class="font-bold text-2xl mt-2">
          Total: ${{ order.total.toFixed(2) }}
        </p>
      </div>
    </div>

    <div class="mb-10 p-6 bg-gray-800 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4">Order Status</h2>
      <p>
        <strong>Status:</strong>
        {{ order.status }}
      </p>
      <p>
        <strong>Estimated Delivery:</strong>
        {{ order.estimatedDeliveryDate }}
      </p>
    </div>
  </div>
</template>

<script setup>
  const order = {
    shippingAddress: {
      name: 'Wesley Maciel',
      street: '123 Main St',
      city: 'Springfield',
      state: 'IL',
      zip: '62701',
      phone: '+1 (555) 123-4567',
    },
    items: [
      { id: 1, name: 'Laptop', quantity: 1, price: 999.99 },
      { id: 2, name: 'Mouse', quantity: 2, price: 25.5 },
      { id: 3, name: 'Keyboard', quantity: 1, price: 75.0 },
    ],
    subtotal: 1125.99,
    shippingCost: 15.0,
    tax: 72.6,
    total: 1213.59,
    status: 'Shipped',
    estimatedDeliveryDate: '2024-11-25',
  };
</script>

<style scoped>
  .order {
    margin: 0 auto;
    padding: 2.5rem 1.5rem;
    background-color: #000;
    color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .p-6 {
    padding: 1.5rem;
  }

  .bg-gray-800 {
    background-color: #2d2d2d;
  }

  h1,
  h2 {
    color: #ffffff;
  }

  p {
    color: #f1f1f1;
  }

  .space-y-2 > li {
    padding: 0.5rem 0;
  }

  .rounded-lg {
    border-radius: 0.5rem;
  }

  .shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .text-center {
    text-align: center;
  }

  .font-semibold {
    font-weight: 600;
  }

  .font-bold {
    font-weight: 700;
  }

  .font-extrabold {
    font-weight: 800;
  }

  .text-2xl {
    font-size: 1.5rem;
  }

  .text-4xl {
    font-size: 2.25rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 1rem;
    }
  }
</style>
