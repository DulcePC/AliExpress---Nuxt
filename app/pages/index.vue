<template>
  <main class="lg:min-h-screen min-h-dvh bg-gray-100 dark:bg-gray-900 py-6">
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { Product } from '~~/types/product';
import productsData from '~/data/products.json';

const products = ref<Product[]>(productsData);
</script>
