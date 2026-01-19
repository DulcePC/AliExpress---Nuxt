import type { ItemCart } from "~~/types/cart";

export const useCart = () => {
  const cart = useState<ItemCart[]>('cart', () => []);

  const totalPrice = computed(() => {
    return cart.value.reduce((total, cartItem) => {
      return total + (cartItem.item.price * cartItem.item.quantity);
    }, 0);
  });

  const quantity = computed(() => {
    return cart.value.reduce((total, cartItem) => {
      return total + cartItem.item.quantity;
    }, 0);
  });

  const addToCart = (item: ItemCart) => {
    const existingCart = cart.value.find(cartItem => cartItem.item.id === item.item.id);
    if (existingCart) {
      existingCart.item.quantity += item.item.quantity;
    } else {
      cart.value.push(item);
    }
  };

  const removeFromCart = (itemId: number | string) => {
    cart.value = cart.value.filter(cartItem => cartItem.item.id !== itemId);
  };

  const incrementQuantity = (cartId: number) => {
    const item = cart.value.find(cartItem => cartItem.id === cartId);
    if (item) {
      item.item.quantity++;
    }
  };

  const decrementQuantity = (cartId: number) => {
    const item = cart.value.find(cartItem => cartItem.id === cartId);
    if (item && item.item.quantity > 1) {
      item.item.quantity--;
    }
  };

  const clearCart = () => {
    cart.value = [];
  };

  return {
    cart,
    totalPrice,
    quantity,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
  };
};

