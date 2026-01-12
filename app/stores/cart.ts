import type {ItemCart} from "~~/types/cart";

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as ItemCart[],
    totalPrice: 0,
    quantity: 0,
  }),
  actions: {
    addToCart(item: ItemCart) {
      const existingCart = this.cart.find(cartItem => cartItem.item.id === item.item.id);
      if (existingCart) {
        existingCart.item.quantity += item.item.quantity;
      } else {
        this.cart.push(item);
      }
      this.updateTotals();
    },
    removeFromCart(itemId: number | string) {
      this.cart = this.cart.filter(cartItem => cartItem.item.id !== itemId);
      this.updateTotals();
    },
    updateTotals() {
      this.totalPrice = this.cart.reduce((total, cartItem) => {
        return total + (cartItem.item.price * cartItem.item.quantity);
      }, 0);
      this.quantity = this.cart.reduce((total, cartItem) => {
        return total + cartItem.item.quantity;
      }, 0);
    },
    clearCart() {
      this.cart = [];
      this.totalPrice = 0;
      this.quantity = 0;
    }
  },
  
});