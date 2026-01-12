<template>
  <section>
    <div class="grid grid-cols-12 gap-8">
      <div class="col-span-9 flex gap-4">
        <!--Thumbnail-->
        <div class="flex flex-col gap-1 justify-between">
          <div
            v-for="(item, index) in items"
            :key="index"
            class="size-12 opacity-25 hover:opacity-100 transition-opacity"
            :class="{ 'ring-2 ring-black border-black': activeIndex === index }"
            @click="select(index)"
          >
            <NuxtImg :src="item" width="48" height="48" />
          </div>
        </div>
        <!--Main Carousel-->
        <UCarousel
          ref="carousel"
          v-slot="{ item }"
          arrows
          :items="items"
          :ui="carouselUi"
          :prev="{ onClick: onClickPrev }"
          :next="{ onClick: onClickNext }"
          @select="onSelect"
        >
          <div
            class="relative w-full h-full overflow-hidden cursor-zoom-in"
            @mousemove="handleZoom"
            @mouseleave="resetZoom"
          >
            <NuxtImg
              ref="zoomImage"
              :src="item"
              class="w-full h-full object-cover transition-transform duration-200 ease-out"
              :style="zoomStyle"
            />
          </div>
        </UCarousel>
        <!-- Content-->
        <div>
          <h1 class="text-black font-bold text-base">4 unids/set moda Casual hombres estilo deportivo tendencia reloj de pulsera de cuarzo y pulsera de cuentas conjunto regalo para hombres novios reloj Masculino</h1>
          <div class="flex items-center mt-1">
            <div class="flex items-center">
              <UIcon name="material-symbols-light:kid-star" />
              <UIcon name="material-symbols-light:kid-star" />
              <UIcon name="material-symbols-light:kid-star" />
              <UIcon name="material-symbols-light:kid-star-outline" />
              <UIcon name="material-symbols-light:kid-star-outline" />
            </div>
            <p class="ml-2 text-sm"><b>4.2</b> 91 valoraciones ౹ 248 vendido(s)</p>
          </div>
          <div class="flex items-center mt-1 gap-2">
            <p class="text-4xl font-bold mt-4">DOP799.00</p>
            <!--   Discounts available-->
            <div>
              <UBadge label="-DOP175.26 · Nuevo comprador" color="error" size="sm" variant="soft" />
              <p class="text-xs text-gray-600 mt-1 line-through font-regular">DOP237.87</p>
            </div>
          </div>
          <USeparator class="my-2" />
          <p>variaciones</p>
        </div>
      </div>
      <div class="col-span-3">
        <div class="border border-gray-300 p-2">
          <p class="text-sm">Envío gratis a República Dominicana</p>
          <p class="text-sm mt-1">Entrega estimada: 27 jun - 3 jul</p>
          <UButton
            class="w-full mt-4"
            color="error"
            size="xl"
            label="Comprar"
            :ui="{
              base: 'bg-red-600 hover:bg-red-700 text-white items-center justify-center',
            }"
          />
          <div class="flex items-center justify-center gap-2">
            <UButton
              class="w-full mt-4"
              color="neutral"
              size="xl"
              label="Compartir"
              :ui="{
                base: 'bg-[#f5f5f5] text-black !font-regular items-center justify-center',
              }"
            />
            <UButton
              class="w-full mt-4"
              color="neutral"
              size="xl"
              label="10.9k"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'product-detail'
})

const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]

const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)

function onClickPrev() {
  activeIndex.value--
}
function onClickNext() {
  activeIndex.value++
}

function onSelect(index: number) {
  activeIndex.value = index
}

function select(index: number) {
  activeIndex.value = index

  carousel.value?.emblaApi?.scrollTo(index)
}

const carouselUi = {
  root: 'max-w-[400px] !mx-0 !size-[400px]',
  container: '!size-[400px]',
  viewport: '!size-[400px]',
  item: '!size-[400px]',
  prev: '!translate-0 !start-0 rounded-none size-12 justify-center !ring-0 bg-black/25 disabled:!bg-black/25 disabled:border-0 disabled:ring-0 text-white hover:bg-black/40',
  nextIcon: 'text-red-500',
  next: '!translate-0 !end-4 rounded-none size-12 justify-center !ring-0 bg-black/25 disabled:!bg-black/25 disabled:border-0 disabled:ring-0 text-white hover:bg-black/40',
}


const zoomStyle = ref({})
function handleZoom(event: MouseEvent) {
  const element = event.currentTarget as HTMLElement
  const rect = element.getBoundingClientRect()

  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100

  zoomStyle.value = {
    transform: 'scale(2)',
    transformOrigin: `${x}% ${y}%`
  }
}

function resetZoom() {
  zoomStyle.value = {
    transform: 'scale(1)',
    transformOrigin: 'center'
  }
}

</script>