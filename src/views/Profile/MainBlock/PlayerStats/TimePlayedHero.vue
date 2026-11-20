<script setup>
import { HeroData } from '@/utils/typeValidation'
import { computed } from 'vue'

// Recibe los datos preparados para una clase: nombre, proporción de tiempo e identificador.
const props = defineProps({
  heroTime: {
    type: HeroData,
    required: true
  }
})

// Convierte el tiempo a un número entre 0 y 1 para usarlo como porcentaje de la barra.
const progress = computed(() => {
  const time = Number(props.heroTime.time)
  return Number.isFinite(time) ? Math.min(Math.max(time, 0), 1) : 0
})

// Asigna un color Tailwind según la clase; usa gris si el identificador no es reconocido.
const classHeroBg = computed(() => ({
  'bg-red-700': props.heroTime.classSlug === 'barbarian',
  'bg-green-700': props.heroTime.classSlug === 'witch-doctor',
  'bg-yellow-600': props.heroTime.classSlug === 'demon-hunter',
  'bg-blue-700': props.heroTime.classSlug === 'wizard',
  'bg-orange-700': props.heroTime.classSlug === 'monk',
  'bg-purple-700': props.heroTime.classSlug === 'necromancer',
  'bg-amber-700': props.heroTime.classSlug === 'crusader',
  'bg-stone-500': ![
    'barbarian',
    'witch-doctor',
    'demon-hunter',
    'wizard',
    'monk',
    'necromancer',
    'crusader'
  ].includes(props.heroTime.classSlug)
}))
</script>

<template>
  <!-- Muestra el nombre y el porcentaje de tiempo jugado para esta clase. -->
  <div class="mb-3">
    <div class="mb-1 flex items-center justify-between gap-3">
      <h5 class="font-light">{{ heroTime.hero }}</h5>
      <span class="rounded bg-stone-700 px-2 py-0.5 text-sm tabular-nums text-stone-100">
        {{ (progress * 100).toFixed(2) }}%
      </span>
    </div>
    <!-- El contenedor es la pista; el ancho de la parte interior representa el progreso. -->
    <div
      class="h-3.5 overflow-hidden rounded-sm bg-stone-800"
      role="progressbar"
      :aria-label="`${heroTime.hero} time played`"
      :aria-valuenow="progress * 100"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        class="h-full transition-[width] duration-300"
        :class="classHeroBg"
        :style="{ width: `${progress * 100}%` }"
      />
    </div>
  </div>
</template>
