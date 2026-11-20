<script setup>
  import { goToHero } from '@/mixins/goToHero'
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'

    // Obtiene la ruta actual y el router para navegar al detalle del héroe.
    const route = useRoute()
    const router = useRouter()

    // Cada tarjeta recibe los datos de un héroe.
    const props = defineProps({
        hero: {
            type: Object,
            required: true
        }
    })

    // Adapta clase y género al nombre de las clases CSS del sprite de retratos.
    const portraitClass = computed(() => {
        const heroClass = props.hero.class?.toLowerCase().replace(/_/g, '-')
        const gender = props.hero.gender === 0 || props.hero.gender === 'male'
            ? 'male'
            : 'female'

        return heroClass ? [`hero-${heroClass}`, gender] : []
    })
</script>

<template>
  <article class="overflow-hidden rounded border border-[#573b2b] bg-[#171312]">
    <div class="flex justify-center bg-[#211b18] hover-cursor-pointer"
      @click="goToHero(hero.id, route, router)">
      <div
        :class="portraitClass"
        role="img"
        :aria-label="`${hero.class ?? 'Hero'} portrait`"
      ></div>
    </div>
    <div class="p-3">
      <h3 class="truncate text-center font-diablo text-[#e2c47a]" :class="{ 'text-red-400': hero.hardcore }">
        {{ hero.name }}
        <img v-if="hero.seasonal" src="@/assets/img/leaf.png" width="12" alt="Seasonal">
      </h3>
      <p class="mt-1 text-center text-sm text-[#b8a78d]">
        Level {{ hero.level }}
        <span v-if="hero.dead" class="text-red-400"> · Dead</span>
      </p>
      <div class="mt-3 space-y-2 border-t border-[#573b2b] pt-3 text-sm">
        <p class="flex justify-between gap-2">
          <span class="text-[#b8a78d]">Damage</span>
          <!-- El encadenamiento opcional evita errores si faltan estadísticas; el guion indica que no hay dato. -->
          <span class="font-semibold text-[#f0dfc2]">{{ hero.stats?.damage?.toLocaleString() ?? '—' }}</span>
        </p>
        <p class="flex justify-between gap-2">
          <span class="text-[#b8a78d]">Kills</span>
          <span class="font-semibold text-[#f0dfc2]">{{ hero.kills?.monsters?.toLocaleString() ?? '—' }}</span>
        </p>
        <p class="flex justify-between gap-2">
          <span class="text-[#b8a78d]">Elite kills</span>
          <span class="font-semibold text-[#f0dfc2]">{{ hero.kills?.elites?.toLocaleString() ?? '—' }}</span>
        </p>
      </div>
    </div>
  </article>
</template>