<template>
  <Header />

  <div class="cart-container">
    <h1>Items in your Cart</h1>

    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>Your cart is empty!</p>
    </div>

    <div v-else>
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img
            src="~/assets/glasses.png"
            alt="Product Image"
            class="cart-item-image"
          />
          <div class="cart-item-details">
            <h3>{{ item.name }}</h3>
            <p>{{ item.description }}</p>
            <div class="item-actions">
              <button
                @click="updateQuantity(item.id, 'decrease')"
                class="quantity-btn"
              >
                -
              </button>
              <span class="quantity">{{ item.quantity }}</span>
              <button
                @click="updateQuantity(item.id, 'increase')"
                class="quantity-btn"
              >
                +
              </button>
              <p class="item-price">
                ${{ (item.price * item.quantity).toFixed(2) }}
              </p>
            </div>
            <div class="remove-action">
              <button
                v-if="item.quantity === 0"
                @click="removeFromCart(item.id)"
                class="remove-btn"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <div class="coupon-section">
          <input
            v-model="couponCode"
            type="text"
            placeholder="Enter coupon code"
            class="coupon-input"
            @keyup.enter="applyCoupon"
          />
          <button @click="applyCoupon" class="apply-coupon-btn">
            Apply Coupon
          </button>
          <p v-if="discountApplied" class="discount-message">
            Discount applied: ${{ discountAmount.toFixed(2) }}
          </p>
        </div>
        <p>
          <strong>Total:</strong>
          ${{ totalAmount.toFixed(2) }}
        </p>
        <button
          class="checkout-btn"
          @click="goToCheckout"
          :disabled="cartItems.length === 0"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
  import { ref, computed } from 'vue';
  const router = useRouter();

  // Cart data
  const cartItems = ref([
    {
      id: 1,
      name: 'Product 1',
      description: 'Stylish sunglasses with a modern design',
      quantity: 2,
      price: 19.99,
      image: 'glasses.png',
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Comfortable and durable sports watch',
      quantity: 1,
      price: 29.99,
      image: 'watch.png',
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'High-quality leather wallet for everyday use',
      quantity: 1,
      price: 49.99,
      image: 'wallet.png',
    },
    {
      id: 4,
      name: 'Product 4',
      description: 'Wireless noise-canceling headphones with a sleek design',
      quantity: 3,
      price: 89.99,
      image: 'headphones.png',
    },
    {
      id: 5,
      name: 'Product 5',
      description: 'Compact and efficient portable power bank',
      quantity: 1,
      price: 24.99,
      image: 'powerbank.png',
    },
  ]);

  // Coupon code and discount logic
  const couponCode = ref('');
  const discountApplied = ref(false);
  const discountAmount = ref(0);

  const applyCoupon = () => {
    if (couponCode.value === 'SAVE10') {
      discountApplied.value = true;
      discountAmount.value = totalAmount.value * 0.1;
    } else {
      discountApplied.value = false;
      discountAmount.value = 0;
    }
  };

  // Calculate total amount
  const totalAmount = computed(() => {
    let total = cartItems.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total - discountAmount.value;
  });

  // Update item quantity
  const updateQuantity = (id, action) => {
    const item = cartItems.value.find((item) => item.id === id);
    if (action === 'increase') {
      item.quantity += 1;
    } else if (action === 'decrease' && item.quantity > 0) {
      item.quantity -= 1;
    }
    // Remove item if quantity is 0
    if (item.quantity === 0) {
      removeFromCart(id);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== id);
  };

  // Checkout logic (this can be expanded for actual navigation)
  const goToCheckout = () => {
    console.log('Proceeding to checkout');
    router.push('/purchase');
  };

  // Dynamic image path resolution function
  const getImage = (imagePath) => {
    return new URL(`~/assets/${imagePath}`, import.meta.url).href;
  };
</script>

<style scoped>
  .cart-container {
    padding: 20px;
    margin: auto;
    font-family: Arial, sans-serif;
    background-color: #000;
    min-height: 600px;
  }

  h1 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
    color: #fff;
  }

  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .cart-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .cart-item:hover {
    transform: scale(1.02);
  }

  .cart-item-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 8px;
  }

  .cart-item-details {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .cart-item-details h3 {
    font-size: 18px;
    color: #333;
    margin-bottom: 8px;
  }

  .cart-item-details p {
    font-size: 14px;
    color: #666;
    margin-bottom: 10px;
  }

  .item-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
  }

  .quantity-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    font-size: 16px;
  }

  .quantity-btn:hover {
    background-color: #0056b3;
  }

  .quantity {
    font-size: 16px;
    color: #333;
  }

  .item-price {
    font-size: 16px;
    font-weight: bold;
    color: #007bff;
    margin-top: 10px;
  }

  .remove-btn {
    background-color: #ff4d4f;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }

  .remove-btn:hover {
    background-color: #ff2a2a;
  }

  .cart-summary {
    margin-top: 20px;
    text-align: right;
  }

  .coupon-section {
    margin-bottom: 20px;
  }

  .coupon-input {
    padding: 8px;
    margin-right: 10px;
    width: 200px;
    border-radius: 8px;
    border: 1px solid #ddd;
  }

  .apply-coupon-btn {
    padding: 8px 16px;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }

  .apply-coupon-btn:hover {
    background-color: #218838;
  }

  .discount-message {
    color: green;
    margin-top: 10px;
  }

  .checkout-btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }

  .checkout-btn:hover {
    background-color: #0056b3;
  }

  .empty-cart {
    text-align: center;
    font-size: 18px;
    color: #666;
  }
</style>
