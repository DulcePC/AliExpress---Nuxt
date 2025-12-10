<template>
  <div class="relative flex items-center ">
    <UInput
      color="neutral"
      size="md"
      placeholder="zapatos"
      variant="outline"
      highlight
      loading
      :ui="{ base: ' w-full rounded-full h-[34px] px-6 ', root:'w-full' }"
    />
    <UButton trailing-icon="mingcute:search-line" :ui="{ base: 'absolute right-[3px] bg-black rounded-full text-white p-0 text-2xl  items-center px-4 h-7 -mt-[0.2px]'}"  />
  </div>
</template>

<script setup lang="ts">
</script>