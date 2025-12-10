export { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as Array<{ id: number; name: string; quantity: number }>,
    items: [] as Array<{ id: number; name: string; quantity: number }>,
    totalPrice: 0,
  }),
});