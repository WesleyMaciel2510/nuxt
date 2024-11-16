import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    order: {
      shippingAddress: {
        name: '',
        street: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
      },
      items: [],
      subtotal: 0,
      shippingCost: 0,
      tax: 0,
      total: 0,
      status: '',
      estimatedDeliveryDate: '',
      trackingLink: '',
    },
  }),
  actions: {
    updateOrder(newOrderData: {
      shippingAddress: {
        name: string;
        street: string;
        city: string;
        state: string;
        zip: string;
        phone: string;
      };
      items: never[];
      subtotal: number;
      shippingCost: number;
      tax: number;
      total: number;
      status: string;
      estimatedDeliveryDate: string;
      trackingLink: string;
    }) {
      this.order = newOrderData;
    },
    async fetchOrderData() {
      // Fetch order data and update
      const fetchedOrderData = {}; // Replace with actual fetch logic
      //this.updateOrder(fetchedOrderData);
    },
  },
  getters: {
    formattedShippingAddress(state) {
      return `${state.order.shippingAddress.name}\n${state.order.shippingAddress.street}\n${state.order.shippingAddress.city}, ${state.order.shippingAddress.state} ${state.order.shippingAddress.zip}\n${state.order.shippingAddress.phone}`;
    },
  },
});
