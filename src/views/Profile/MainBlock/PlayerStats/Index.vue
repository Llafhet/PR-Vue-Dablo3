<script setup>
import SingleStat from './SingleStat.vue'
import TimePlayed from './TimePlayed.vue'

// Recibe del componente padre las estadísticas generales del perfil.
const props = defineProps({
    stats:{
        required: true,
        type: Object
    }
})

</script>

<template>
  <!-- Agrupa las estadísticas del jugador y el desglose de tiempo jugado. -->
  <div class="multi-stats pl-lg-4">
    <!-- Separador visible solo en pantallas pequeñas. -->
    <hr class="bg-white mt-5 d-lg-none">
    <h2 class="font-diablo my-4">Stats</h2>
    <!-- Muestra las estadísticas individuales con icono, valor y etiqueta. -->
    <div class="stats d-flex flex-column bg-dark p-3">
      <!-- Total de monstruos eliminados durante la vida de la cuenta. -->
      <SingleStat
        class="mb-3"
        ico-name="skull"
        ico-color="#9E9E9E"
        :info="{value: stats.kills.monsters, text:'Lifetime Kills'}" />

      <!-- Total de enemigos élite eliminados. -->
      <SingleStat
        class="mb-3"
        ico-name="crown"
        ico-color="#ffc107"
        :info="{value: stats.kills.elites, text:'Elite Kills'}"/>

      <!-- Nivel de leyenda (Paragon) del jugador. -->
      <SingleStat
        ico-name="dungeon"
        ico-color="#795548"
        :info="{value: stats.paragonLevel, text:'Paragon Level'}"/>
    </div>

    <!-- Pasa los porcentajes de tiempo jugado al componente que genera sus barras. -->
    <TimePlayed :timePlayed="stats.timePlayed"/>

  </div>
</template>