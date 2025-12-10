export { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [] as Array<{ id: number; name: string; quantity: number }>,
    checkout: [] as Array<{ id: number; name: string; quantity: number }>,
    persist: true
  }),
});