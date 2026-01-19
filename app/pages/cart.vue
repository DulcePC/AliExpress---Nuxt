<template>
  <main class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-[1200px] mx-auto px-4">
      <h1 class="text-2xl font-bold mb-6">Carrito de Compras</h1>

      <!-- Empty State -->
      <div v-if="cart.length === 0" class="flex flex-col items-center justify-center py-20 bg-white rounded-lg">
        <UIcon name="ph:shopping-cart-simple-light" class="size-24 text-gray-300 mb-4" />
        <h2 class="text-xl font-semibold text-gray-700">Tu carrito está vacío</h2>
        <p class="text-gray-500 mt-2 mb-6">Agrega productos para comenzar a comprar</p>
        <UButton to="/" color="primary" size="lg" label="Ver productos" />
      </div>

      <!-- Cart Content -->
      <div v-else class="grid lg:grid-cols-3 gap-6">
        <!-- Items List -->
        <div class="lg:col-span-2 space-y-4">
          <UCard v-for="item in cart" :key="item.id" :ui="{ body: 'p-4' }">
            <div class="flex gap-4">
              <img
                :src="item.item.imageUrl || 'https://picsum.photos/120/120'"
                :alt="item.item.name"
                class="w-28 h-28 object-cover rounded-lg"
              />
              <div class="flex-1">
                <div class="flex justify-between items-start">
                  <div>
                    <NuxtLink :to="`/item/${item.item.id}`" class="font-semibold text-gray-900 hover:text-primary">
                      {{ item.item.name }}
                    </NuxtLink>
                    <p class="text-sm text-gray-500 mt-1">{{ item.item.description }}</p>
                  </div>
                  <UButton
                    icon="i-lucide-trash-2"
                    color="error"
                    variant="ghost"
                    size="sm"
                    @click="removeFromCart(item.item.id)"
                  />
                </div>

                <div class="flex justify-between items-end mt-4">
                  <!-- Quantity Controls -->
                  <div class="flex items-center gap-2">
                    <UButton
                      icon="i-lucide-minus"
                      size="xs"
                      color="neutral"
                      variant="outline"
                      :disabled="item.item.quantity <= 1"
                      :ui="{ base: 'rounded-full' }"
                      @click="decrementQuantity(item.id)"
                    />
                    <span class="w-8 text-center font-medium">{{ item.item.quantity }}</span>
                    <UButton
                      icon="i-lucide-plus"
                      size="xs"
                      color="neutral"
                      variant="outline"
                      :ui="{ base: 'rounded-full' }"
                      @click="incrementQuantity(item.id)"
                    />
                  </div>

                  <!-- Price -->
                  <div class="text-right">
                    <p class="text-lg font-bold text-gray-900">
                      DOP {{ formatNumber(item.item.price * item.item.quantity) }}
                    </p>
                    <p v-if="item.item.discount" class="text-sm text-gray-400 line-through">
                      DOP {{ formatNumber((item.item.price + item.item.discount) * item.item.quantity) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <UCard :ui="{ body: 'p-6' }">
            <h2 class="text-lg font-bold mb-4">Resumen del pedido</h2>

            <div class="space-y-3 text-sm">
              <div class="flex justify-between">
                <span class="text-gray-600">Subtotal ({{ quantity }} productos)</span>
                <span class="font-medium">DOP {{ formatNumber(totalPrice) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Envío</span>
                <span class="font-medium text-green-600">Gratis</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Descuento</span>
                <span class="font-medium text-red-600">-DOP {{ formatNumber(totalDiscount) }}</span>
              </div>
            </div>

            <USeparator class="my-4" />

            <div class="flex justify-between items-center mb-6">
              <span class="text-lg font-bold">Total</span>
              <span class="text-xl font-bold text-primary">DOP {{ formatNumber(totalPrice) }}</span>
            </div>

            <UButton
              class="w-full"
              color="error"
              size="xl"
              label="Proceder al pago"
              :ui="{ base: 'bg-red-600 hover:bg-red-700 font-bold' }"
            />

            <UButton
              class="w-full mt-3"
              to="/"
              color="neutral"
              variant="outline"
              size="lg"
              label="Continuar comprando"
            />
          </UCard>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const { cart, quantity, totalPrice, removeFromCart, incrementQuantity, decrementQuantity } = useCart();

const totalDiscount = computed(() => {
  return cart.value.reduce((total, cartItem) => {
    return total + ((cartItem.item.discount || 0) * cartItem.item.quantity);
  }, 0);
});
</script>
