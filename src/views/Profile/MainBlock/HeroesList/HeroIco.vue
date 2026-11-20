<script setup>
import { goToHero } from '@/mixins/goToHero'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

    // Obtiene la ruta actual y el router para navegar al detalle del héroe.
    const route = useRoute()
    const router = useRouter()

    // Recibe los datos del héroe que se mostrará en la fila de la tabla.
    const props = defineProps({
        hero:{
            required: true,
            type: Object
        }
    })

    // Estas clases seleccionan en el sprite el retrato de clase y género correspondiente.
    const portraitClass = computed(() => {
        const heroClass = props.hero.class?.toLowerCase().replace(/_/g, '-')
        const gender = props.hero.gender === 0 || props.hero.gender === 'male'
            ? 'male'
            : 'female'

        return heroClass ? [`hero-${heroClass}`, gender] : []
    })
</script>

<template>
  <div class="hero-ico hover-cursor-pointer"
    @click="goToHero(hero.id, route, router)">
    <!-- El retrato se dibuja como fondo CSS; el texto alternativo lo hace accesible. -->
    <span
      class="hero-image border"
      :class="portraitClass"
      role="img"
      :aria-label="`${hero.class ?? 'Hero'} portrait`"
    />
    <!-- Los héroes hardcore se resaltan en rojo; los de temporada muestran la hoja. -->
    <span class="hero-name" :class="{ 'text-red-400': hero.hardcore }">
      {{ hero.name }}
      <img v-if="hero.seasonal" src="@/assets/img/leaf.png" width="12" class="seasonal-icon" alt="Seasonal">
    </span>
  </div>
</template>

<style scoped>
  /* Alinea el retrato y el nombre, manteniendo un pequeño espacio entre ambos. */
  .hero-ico {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  /* Mantiene el tamaño del retrato y evita que se comprima dentro de la fila. */
  .hero-image {
    width: 30px;
    height: 26px;
    background-size: 210%;
    flex: none;
  }

  .hero-name {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 700;
  }

  .seasonal-icon {
    display: inline-block;
  }
</style>