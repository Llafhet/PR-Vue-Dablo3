<script setup>
  import {onMounted} from 'vue'
  // Importa el store Pinia responsable de obtener el token OAuth.
  import { useOauthStore } from '@/store/modules/oauth.js'
  // Importa el store que contiene el estado global del indicador de carga.
  import { useLoadingStore } from '@/store/modules/loading.js'
  import BaseLoading from '@/components/BaseLoading.vue'
  import LoadLayout from './layouts/LoadLayout.vue'
  import MainLayout from './layouts/MainLayout.vue'

  // Obtiene una instancia del store para usar sus acciones y estado.
  const oauthStore = useOauthStore()
  // Permite leer loadingStore.isLoading desde este componente.
  const loadingStore = useLoadingStore()

  // Inicializa el flujo OAuth cuando el componente App se monta.
  function init(){
    console.log('App initialized')
    oauthStore.getToken()
  }

  // Ejecuta init una vez que App haya sido montado.
  onMounted(init)
</script>

<template>
  <div>
    <!-- Muestra el spinner solo cuando loadingStore.isLoading es true. -->
    <LoadLayout v-if="loadingStore.isLoading">
      <BaseLoading/>
    </LoadLayout>
    
    <div class="min-h-screen bg-[radial-gradient(circle_at_top,rgba(125,55,38,0.12),transparent_32rem)]">
      <nav class="sanctuary-nav border-b border-[#5f4930] bg-black/75 px-4 shadow-[0_12px_30px_rgba(0,0,0,0.65)] backdrop-blur-sm">
        <div class="mx-auto flex min-h-16 max-w-5xl items-center justify-center gap-8">
          <RouterLink
            to="/"
            class="rune-link border-b border-transparent px-3 py-2 text-sm font-bold uppercase tracking-[0.16em] text-[#a99a78] transition duration-200 hover:border-[#c9a25d] hover:text-[#f0d79a]"
          >
            Inicio
          </RouterLink>
          <RouterLink
            to="/about"
            class="rune-link border-b border-transparent px-3 py-2 text-sm font-bold uppercase tracking-[0.16em] text-[#a99a78] transition duration-200 hover:border-[#c9a25d] hover:text-[#f0d79a]"
          >
            Acerca de
          </RouterLink>
        </div>
      </nav>

      <header class="mx-auto flex max-w-5xl flex-col items-center px-5 pt-10 text-center">
        <div class="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#80613d] to-transparent" />
        <p class="mt-5 text-xs uppercase tracking-[0.35em] text-[#887354]">Reinos de Occidente</p>
        <h1 class="font-diablo mt-3 text-3xl font-bold tracking-[0.08em] text-[#d9c187] drop-shadow-[0_3px_3px_rgba(0,0,0,0.9)] sm:text-5xl">
          Diablo Vue Project
        </h1>
        <div class="mt-6 h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#80613d] to-transparent" />
      </header>

      <main class="mx-auto max-w-5xl px-5 py-10">
        <!-- Este es el unico punto donde se renderiza la ruta activa. -->
        <!--<RouterView />-->
        <MainLayout/>
      </main>
      
    </div>
  </div>
</template>

<style scoped>
.sanctuary-nav {
  position: relative;
}

.sanctuary-nav::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -2px;
  left: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 12%, #7d4b27 45%, #c69a55 50%, #7d4b27 55%, transparent 88%);
}

:deep(.rune-link.router-link-active) {
  border-color: #c9a25d;
  color: #f0d79a;
  text-shadow: 0 0 14px rgba(180, 47, 31, 0.75);
}
</style>
