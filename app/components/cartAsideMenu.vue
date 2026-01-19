<template>
  <USlideover title="Carrito de compras" :ui="{ footer: 'justify-end' }">
    <div class="nav-item-top cursor-pointer">
      <UIcon class="icon"  name="ph:shopping-cart-simple-light" />
      <div class="flex flex-col">
        <span class="bg-black rounded-4xl text-white text-center font-bold px-1">{{ quantity.toString().padStart(2, '0') }}</span>
        <span class="text"><b>Cesta</b></span>
      </div>
    </div>

    <template #body>
      <div class="p-4">
        <!-- Empty State -->
        <div v-if="cart.length === 0" class="flex flex-col items-center justify-center py-12">
          <UIcon name="ph:shopping-cart-simple-light" class="size-20 text-gray-300 mb-4" />
          <h3 class="text-lg font-semibold text-gray-700">Tu carrito está vacío</h3>
          <p class="text-sm text-gray-500 mt-1">Agrega productos para comenzar a comprar</p>
        </div>

        <!-- Cart Items -->
        <div v-else class="space-y-4">
          <UCard v-for="item in cart" :key="item.id" :ui="{ body: 'p-3' }">
            <div class="flex gap-3">
              <img
                :src="item.item.imageUrl || 'https://picsum.photos/80/80'"
                :alt="item.item.name"
                class="w-20 h-20 object-cover rounded-md"
              />
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-medium text-gray-900 truncate">{{ item.item.name }}</h4>
                <div class="flex items-center gap-2 mt-2">
                  <UButton
                    icon="i-lucide-minus"
                    size="xs"
                    color="neutral"
                    variant="outline"
                    :disabled="item.item.quantity <= 1"
                    :ui="{ base: 'rounded-full' }"
                    @click="decrementQuantity(item.id)"
                  />
                  <span class="text-sm font-medium w-6 text-center">{{ item.item.quantity }}</span>
                  <UButton
                    icon="i-lucide-plus"
                    size="xs"
                    color="neutral"
                    variant="outline"
                    :ui="{ base: 'rounded-full' }"
                    @click="incrementQuantity(item.id)"
                  />
                </div>
                <p class="text-sm font-bold text-black mt-2">
                  DOP {{ formatNumber(item.item.price * item.item.quantity) }}
                </p>
              </div>
              <UButton
                icon="i-lucide-trash-2"
                color="error"
                variant="ghost"
                size="xs"
                @click="removeFromCart(item.item.id)"
              />
            </div>
          </UCard>
        </div>
      </div>
    </template>

    <template v-if="cart.length != 0" #footer>
      <div class="w-full">
        <div class="flex justify-between items-center">
          <span class="text-base font-semibold">Total:</span>
          <span class="text-lg font-bold">DOP {{ formatNumber(totalPrice) }}</span>
        </div>
        <UButton
          class="w-full mt-4"
          color="error"
          size="xl"
          label="Proceder al pago"
          :ui="{ base: 'bg-red-600 hover:bg-red-700' }"
        />
        <UButton
          class="w-full mt-4"
          variant="outline"
          color="neutral"
          size="xl"
          label="Ir al carrito"
          as="NuxtLink"
          to="/cart"
        />
      </div>
    </template>
  </USlideover>
</template>

<script setup lang="ts">
const { cart, quantity, totalPrice, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
</script>

<style scoped>
.nav-item-top {
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #191919;
  font-weight: 600;
}

.nav-item-top .text {
  display: none;
}

.nav-item-top .icon {
  width: 1.75rem;
  height: 1.75rem;
}

@media (min-width: 1280px) {
  .nav-item-top .text {
    display: inline-block;
  }
  .nav-item-top .icon {
    margin-right: 0.375rem;
  }
}
</style>