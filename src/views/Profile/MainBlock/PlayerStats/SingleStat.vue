<script setup>
import { formatNumber } from '@/filters/numeral'

// Recibe el icono, su color y los datos de la estadística que se va a mostrar.
  const props= defineProps({
    icoName: {
      required: true,
      type: String
    },
    icoColor: {
      required: true,
      type: String
    },
    info: {
      required: true,
      type: Object
    }
  })
</script>

<template>
  <!-- Tarjeta individual para presentar una estadística del jugador. -->
  <div class="single-stat w-full">
    <div class="rounded border border-[#573b2b] bg-[#171312] p-3 text-[#f0dfc2]">
      <div class="flex items-center">
        <!-- Muestra el icono usando el nombre y color recibidos por props. -->
        <div class="ico-cont shrink-0">
          <div class="text-center">
            <font-awesome-icon :icon="icoName" class="text-3xl" :style="{ color: icoColor }" />
          </div>
        </div>
        <!-- Formatea el valor numérico y coloca debajo su descripción. -->
        <div class="min-w-0 flex-1">
          <h4 class="mb-0 font-bold">{{ formatNumber(info.value) }}</h4>
          <span class="mb-0 font-light text-[#b8a78d]">{{ info.text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Reserva espacio constante para alinear los valores de las tarjetas. */
  .single-stat .ico-cont {
    width: 80px;
  }
</style>