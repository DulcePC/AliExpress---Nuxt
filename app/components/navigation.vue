<template>
  <header>
    <UContainer>
    <nav class="top-nav ">
      <ul>
        <li>
          <NuxtLink to="/"><img src="/image/logo.png" alt="Logo" class="w-[156px]" /></NuxtLink>
        </li>
        <li class="flex-grow">
          <SearchBar  />
        </li>
        <div class="lg:flex items-center hidden">
          <!-- Download App-->
          <li class="pl-6">
            <div class="nav-item-top">
              <UIcon class="icon" name="teenyicons:qr-code-outline" />
              <span class="text">Descarga la app de AliExpress</span>
            </div>
          </li>
          <!--   Country-->
          <li>
            <div class="nav-item-top">
              <span class="text">ES/ <br> DOP</span>
            </div>
          </li>
          <!--  Log In / Register-->
          <li>
            <div class="nav-item-top">
              <UIcon class="icon"  name="ic:outline-person" />
              <span class="text">¡Bienvenido <br> <b>Identifícate / Regístrate</b></span>
            </div>
          </li>
          <li>
            <div class="nav-item-top">
              <UIcon class="icon"  name="teenyicons:cart-outline" />
              <div class="flex flex-col">
                <span>01</span>
                <span class="text"><b>Cesta</b></span>
              </div>
            </div>
          </li>
        </div>
      </ul>
    </nav>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
@reference "~/assets/css/main.css";

.top-nav {
  @apply w-full ;
  ul {
    @apply flex items-center lg:flex-row flex-col;
    li {
      @apply px-2 lg:w-auto w-full;
    }
    .nav-item-top {
      @apply flex items-center text-xs text-[#191919] font-semibold;
      .text {
        @apply xl:inline-block hidden;
      }
      .icon {
        @apply xl:mr-1 size-7;
      }
    }
  }
}

</style>