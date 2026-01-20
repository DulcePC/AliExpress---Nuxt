<template>
  <main class="min-h-screen bg-gray-100 py-8">
    <div class="max-w-[1200px] mx-auto px-4">
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
          <!-- Selection Controls -->
          <UCard :ui="{
            body: '!p-4',
          }">
            <h1 class="text-2xl font-bold mb-6">Cesta ({{cart.length}})</h1>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <UCheckbox
                  size="xl"
                  v-model="selectAll"
                  @change="toggleSelectAll"
                />
                <span class="text-sm font-medium">
                  Seleccionar todos ({{ selectedItems.length }}/{{ cart.length }})
                </span>
              </div>
              <UButton
                v-if="selectedItems.length > 0"
                icon="i-lucide-trash-2"
                color="error"
                variant="soft"
                size="sm"
                :label="`Eliminar (${selectedItems.length})`"
                @click="removeSelectedItems"
              />
            </div>
          </UCard>

          <!-- Cart Items -->
          <UCard v-for="item in cart" :key="item.id" :ui="{ body: '!p-4' }">
            <!-- Store Name -->
            <div v-if="item.item.store" class="mb-4  flex items-center gap-4">
              <UCheckbox
                size="xl"
                :model-value="isSelected(item.id)"
                @change="toggleItemSelection(item.id)"
              />
              <h3 class="text-md font-semibold text-gray-800">
                {{ item.item.store.name}}
              </h3>
            </div>
            <!-- -->
            <div class="flex gap-4">
              <!-- Checkbox -->
              <div class="flex items-center">
                <UCheckbox
                  size="xl"
                  :model-value="isSelected(item.id)"
                  @change="toggleItemSelection(item.id)"
                />
              </div>

              <img
                :src="item.item.imageUrl || 'https://picsum.photos/120/120'"
                :alt="item.item.name"
                class="w-28 h-28 object-cover rounded-lg"
              />
              <div class="flex-1">
                <div class="flex justify-between items-start">
                  <div>
                    <NuxtLink :to="`/item/${item.item.id}`" class="font-medium text-[#222] hover:text-error text-sm text-ellipsis whitespace-nowrap">
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

                <div class="flex justify-between items-center mt-4">
                  <!-- Price -->
                  <div class="text-right">
                    <p class="text-lg font-bold text-gray-900">
                      DOP {{ formatNumber(item.item.price * item.item.quantity) }}
                    </p>
                    <p v-if="item.item.discount" class="text-sm text-gray-400 line-through">
                      DOP {{ formatNumber((item.item.price + item.item.discount) * item.item.quantity) }}
                    </p>
                  </div>

                  <!-- Quantity Controls -->
                  <div class="flex items-center gap-2 border border-gray-200 rounded-4xl px-1 w-[90px]">
                    <UButton
                      icon="i-lucide-minus"
                      size="xs"
                      color="neutral"
                      variant="ghost"
                      :disabled="item.item.quantity <= 1"
                      :ui="{
                        base: 'hover:bg-transparent hover:text-red-500'
                      }"
                      @click="decrementQuantity(item.id)"
                    />
                    <span class="w-8 text-center font-bold text-black">{{ item.item.quantity }}</span>
                    <UButton
                      icon="i-lucide-plus"
                      size="xs"
                      color="neutral"
                      variant="ghost"
                      :ui="{
                        base: 'hover:bg-transparent hover:text-red-500'
                      }"
                      @click="incrementQuantity(item.id)"
                    />
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
              :ui="{ base: 'bg-red-600 hover:bg-red-700 font-bold rounded-3xl' }"
            />

            <UButton
              class="w-full mt-3"
              to="/"
              color="neutral"
              variant="outline"
              size="lg"
              :ui="{ base: 'rounded-3xl' }"
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

// Selected items
const selectedItems = ref<number[]>([]);
const selectAll = ref(false);

// Check if item is selected
const isSelected = (itemId: number) => {
  return selectedItems.value.includes(itemId);
};

// Toggle single item selection
const toggleItemSelection = (itemId: number) => {
  const index = selectedItems.value.indexOf(itemId);
  if (index > -1) {
    selectedItems.value.splice(index, 1);
  } else {
    selectedItems.value.push(itemId);
  }
  // Update selectAll state
  selectAll.value = selectedItems.value.length === cart.value.length;
};

// Toggle select all
const toggleSelectAll = () => {
  if (selectAll.value) {
    selectedItems.value = cart.value.map(item => item.id);
  } else {
    selectedItems.value = [];
  }
};

// Remove selected items
const removeSelectedItems = () => {
  selectedItems.value.forEach(itemId => {
    const cartItem = cart.value.find(item => item.id === itemId);
    if (cartItem) {
      removeFromCart(cartItem.item.id);
    }
  });
  selectedItems.value = [];
  selectAll.value = false;
};

// Watch cart changes to update selection
watch(cart, () => {
  // Remove selected items that no longer exist in cart
  selectedItems.value = selectedItems.value.filter(id =>
    cart.value.some(item => item.id === id)
  );
  selectAll.value = selectedItems.value.length === cart.value.length && cart.value.length > 0;
}, { deep: true });

const totalDiscount = computed(() => {
  return cart.value.reduce((total, cartItem) => {
    return total + ((cartItem.item.discount || 0) * cartItem.item.quantity);
  }, 0);
});
</script>
