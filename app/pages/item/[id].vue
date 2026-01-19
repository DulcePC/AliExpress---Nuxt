<template>
  <section>
    <div class="grid xl:grid-cols-12 lg:grid-cols-1 gap-8">
      <div class="xl:col-span-9">
       <div class="flex gap-4">
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
             <p class="ml-2 text-sm text-black"><b>4.2</b> 91 valoraciones ౹ 248 vendido(s)</p>
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
           <div id="variations">
             <div  class="variations-block">
               <h6 class="text-black font-bold">Tamaño: Gris</h6>
               <div class="flex items-center gap-2 mt-3">
                 <div  class="size-box active">
                   <p>S</p>
                 </div>
                 <div  class="size-box">
                   <p>M</p>
                 </div>
                 <div  class="size-box">
                   <p>LG</p>
                 </div>
               </div>
             </div>
             <div  class="variations-block">
               <h6 class="text-black font-bold">Color: Gris</h6>
               <div class="flex items-center gap-2 mt-3">
                 <div  class="color-box active">
                   <NuxtImg src="https://picsum.photos/32/32?random=7"   />
                 </div>
                 <div  class="color-box">
                   <NuxtImg src="https://picsum.photos/32/32?random=7"   />
                 </div>
                 <div  class="color-box">
                   <NuxtImg src="https://picsum.photos/32/32?random=7"  />
                 </div>
               </div>
             </div>
           </div>
           <USeparator class="my-2" />
           <!--  Descriptions-->
         </div>
       </div>
        <!-- Articulos similares -->
        <div>
          <h2>Artículos similares</h2>
          <ProductCard />
        </div>
        <USeparator class="my-2" />
        <!-- Navegacion de descripción del producto -->
        <nav>
          <UButton color="neutral" variant="link">Valoraciones</UButton>
          <UButton color="neutral" variant="link">Detalles</UButton>
          <UButton color="neutral" variant="link">Descripción</UButton>
          <UButton color="neutral" variant="link">Tienda</UButton>
          <UButton color="neutral" variant="link">Te podría interesar</UButton>
        </nav>
      </div>
      <!-- Aside -->
      <div class="xl:col-span-3">
        <div class="border border-gray-300 p-3">
          <div class="flex items-center justify-between gap-2">
            <p class="text-black text-sm font-bold">Vendido por:</p>
            <p  class="text-black text-sm">Vivian Store</p>
          </div>
          <USeparator class="my-2" />
          <div class="flex items-center justify-between gap-2">
            <p class="text-black font-bold text-sm">Envío a:</p>
            <p  class="text-black text-sm">Dominican Republic</p>
          </div>
          <USeparator class="my-2" />
          <div class="flex items-center mb-3">
            <div>
              <div class="flex items-center gap-1">
                <UIcon name="icon-park-outline:transporter" class="w-5 block"  />
                <p class="font-bold text-black">Envío: DOP343.55 </p>
              </div>
              <p class="text-sm text-gray-600 pl-6 font-semibold"> Entrega: <span class="text-black font-black">17  de <span class="uppercase">jun</span></span></p>
            </div>
          </div>
          <div class="flex items-center mb-3">
            <UIcon name="icon-park-outline:transporter" class="w-5 block"  />
            <p class="font-bold text-black text-sm">Política de devoluciones y reembolsos</p>
          </div>
          <div class="flex items-center mb-3">
            <div>
              <div  class="flex items-center gap-1">
                <UIcon name="icon-park-outline:transporter" class="w-5 block"  />
                <p class="font-bold text-black text-sm">Seguridad & Privacidad</p>
              </div>
              <p class="text-xs text-gray-600 mt-1 font-semibold pl-6">Pagos seguros: No compartiremos tus dat....
                Datos personales seguros: Protegemos tu priva...</p>
            </div>
          </div>
          <USeparator class="my-2" />
          <div>
            <h6 class="text-black font-bold text-base mb-2">Cantidad</h6>
            <div class="flex items-center gap-1">
              <UButton :disabled="quantity <= 1" icon="i-lucide-minus" size="xs" color="primary" variant="solid" :ui="{ base: 'rounded-full' }" @click="decrementQuantity(product.id)" />
              <input type="number" min="1" v-model="quantity" />
              <UButton icon="i-lucide-plus" size="xs" color="primary" variant="solid" :ui="{ base: 'rounded-full' }" @click="incrementQuantity(product.id)" />
            </div>
          </div>
          <UButton
            class="w-full mt-4"
            color="error"
            size="xl"
            label="Comprar"
            :ui="{
              base: 'bg-red-600 hover:bg-red-700 text-white text-sm font-bold',
            }"
          />
          <UButton
            class="w-full mt-4"
            variant="outline"
            color="neutral"
            size="xl"
            label="Agregar al carrito"
            :ui="{
              base: ' ring-black text-black text-sm font-bold',
            }"
            @click="handleAddToCart"
          />
          <!-- -->
          <div class="flex items-center justify-center gap-2">
            <UButton
              class="w-full mt-4"
              color="neutral"
              size="xl"
              label="Compartir"
              :ui="{
                base: 'bg-[#f5f5f5] text-black font-regular',
              }"
            />
            <UButton
              class="w-full mt-4"
              color="neutral"
              size="xl"
              label="10.9k"
              :ui="{
                base: 'bg-[#f5f5f5] text-black font-regular',
              }"
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

const { addToCart, incrementQuantity, decrementQuantity } = useCart();
const quantity = ref(1);

// Producto de ejemplo (esto debería venir de una API)
const product = ref({
  id: 1,
  name: '4 unids/set moda Casual hombres estilo deportivo tendencia reloj de pulsera de cuarzo',
  description: 'Reloj de pulsera de cuarzo y pulsera de cuentas conjunto regalo para hombres',
  price: 799,
  inStock: true,
  imageUrl: 'https://picsum.photos/640/640?random=1',
  categories: ['relojes', 'accesorios'],
  discount: 175.26,
  topSeller: true,
  slug: 'reloj-pulsera-hombres'
});

const handleAddToCart = () => {
  addToCart({
    id: Date.now(),
    item: {
      ...product.value,
      quantity: quantity.value
    }
  });
};

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

<style scoped>
@reference "~/assets/css/main.css";

.variations-block {
  &:not(:first-child) {
    @apply mt-4;
  }
}

.size-box {
  @apply h-10 min-w-16 border-2 border-gray-300 cursor-pointer flex items-center justify-center mb-2;
  p { @apply font-semibold text-base; }

  &.active {
    @apply border-black;
  }
}

.color-box {
  @apply !size-16 border border-gray-300 cursor-pointer flex-none block mb-2;
  img { @apply object-cover w-full; }

  &.active {
    @apply ring-2 ring-black ;
  }
}

input {
  appearance: none !important;
  @apply !w-4 !inline-block font-semibold text-black text-center;
}
</style>