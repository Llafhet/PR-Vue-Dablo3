<script setup>
    import TopHeroe from './TopHeroe.vue';

    // Recibe la lista de héroes que se mostrará en tarjetas.
    defineProps({
        heroes: {
            type: Array,
            required: true
        }
    })
</script>

<template>
  <div class="mt-4">
    <h2 class="mb-3 text-xl font-diablo text-[#d6c7a6]">Top heroes</h2>
    <!-- En móvil las tarjetas forman una fila desplazable; desde sm se usa una cuadrícula de tres columnas. -->
    <div class="flex gap-3 overflow-x-auto pb-3 sm:grid sm:grid-cols-3 sm:overflow-visible">
      <!-- Usa el id cuando existe y, si no, combina nombre e índice para identificar la tarjeta. -->
      <TopHeroe
        v-for="(hero, index) in heroes"
        :key="hero.id ?? `${hero.name}-${index}`"
        :hero="hero"
        class="w-36 shrink-0 sm:w-auto"
      />
    </div>
  </div>
</template>