<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-4">Order Confirmation</h1>

    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-2">Shipping Address</h2>
      <p>{{ order.shippingAddress.name }}</p>
      <p>{{ order.shippingAddress.street }}</p>
      <p>
        {{ order.shippingAddress.city }}, {{ order.shippingAddress.state }}
        {{ order.shippingAddress.zip }}
      </p>
      <p>{{ order.shippingAddress.phone }}</p>
    </div>

    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-2">Order Summary</h2>
      <ul>
        <li v-for="item in order.items" :key="item.id">
          {{ item.name }} x {{ item.quantity }} - ${{
            item.price * item.quantity
          }}
        </li>
      </ul>
      <p class="font-bold">Subtotal: ${{ order.subtotal }}</p>
      <p class="font-bold">Shipping: ${{ order.shippingCost }}</p>
      <p class="font-bold">Tax: ${{ order.tax }}</p>
      <p class="font-bold text-2xl">Total: ${{ order.total }}</p>
    </div>

    <div class="mb-8">
      <h2 class="text-2xl font-bold mb-2">Order Status</h2>
      <p>Your order is currently: {{ order.status }}</p>
      <p>Estimated delivery date: {{ order.estimatedDeliveryDate }}</p>
    </div>

    <div>
      <h2 class="text-2xl font-bold mb-2">Order Tracking</h2>
      <p>
        Track your order here:
        <a :href="order.trackingLink" target="_blank">Tracking Link</a>
      </p>
    </div>
  </div>
</template>

<script setup>
  /* import { useOrderStore } from '@/store/orderStore';

  const store = useOrderStore();
  const order = store.order; */
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
    trackingLink: 'https://tracking.example.com/12345',
  };
</script>
