<script setup>
import { computed } from 'vue'
import { classToName } from '@/mixins/heroName'
import { HeroData } from '@/utils/typeValidation'
import TimePlayedHero from './TimePlayedHero.vue'

// Acepta los datos de tiempo como un objeto por clase o como una lista ya preparada.
const props = defineProps({
  timePlayed: {
    type: [Object, Array],
    default: () => ({})
  }
})

// Normaliza ambas formas de entrada a una lista de HeroData para las barras.
const playedHeroes = computed(() => {
  // Si llega una lista, descarta elementos sin identificador y normaliza sus campos.
  if (Array.isArray(props.timePlayed)) {
    return props.timePlayed
      .filter(hero => hero && typeof hero.classSlug === 'string')
      .map(hero => new HeroData(
        hero.hero ?? classToName(hero.classSlug),
        hero.time ?? hero.percentage,
        hero.classSlug
      ))
  }

  // Si el dato no es un objeto válido, no hay clases que mostrar.
  if (!props.timePlayed || typeof props.timePlayed !== 'object') {
    return []
  }

  // Convierte { barbarian: 0.4 } en datos legibles para TimePlayedHero.
  return Object.entries(props.timePlayed).map(([classSlug, time]) =>
    new HeroData(classToName(classSlug), time, classSlug)
  )
})
</script>

<template>
  <!-- Sección que presenta el resumen de tiempo jugado por clase. -->
  <section class="time-played mt-3">
    <hr class="my-5 border-stone-700">
    <h2 class="my-4 font-diablo">Time Played</h2>
    <div class="bg-stone-900 p-3">
      <!-- Renderiza una barra para cada clase normalizada. -->
      <TimePlayedHero
        v-for="hero in playedHeroes"
        :key="hero.classSlug"
        :hero-time="hero"
      />
      <!-- Informa cuando la respuesta no contiene datos de tiempo jugado. -->
      <p v-if="playedHeroes.length === 0" class="text-sm text-stone-400">
        No hay datos de tiempo jugado para mostrar.
      </p>
    </div>
  </section>
</template>
