<script setup>
    import TopHeroes from './TopHeroes/Index.vue';
    import HeroesList from './HeroesList/Index.vue';
    import ProgressList from './ProgressList/Index.vue'
    import PlayerStats from './PlayerStats/Index.vue'
    import { computed } from 'vue';

    const props = defineProps({
        profileData: {
        type: Object,
        required: true
        }
    })
        // Comprobamos que hay héroes
    const hasHeroes = computed(() => {
        return Array.isArray(props.profileData.heroes) &&
        props.profileData.heroes.length > 0
    })
    // Devolvemos los 3 primeros
    const topHeroes = computed(() => {
        return props.profileData.heroes?.slice(0, 3) ?? []
    })
    // Convertimos a JSON para mostrarlo en el template
    const heroesJson = computed(() =>
        JSON.stringify(props.profileData.heroes ?? [], null, 2)
    )
    // ¿Hay más de tres elementos en el array?
    const hasHeroesList = computed(() =>{
      return Array.isArray(props.profileData.heroes) && props.profileData.heroes.length > 3
    })

    const heroesList = computed(() => {
      return hasHeroesList.value ? props.profileData.heroes.slice(3) : []
    })

    const statsData = computed(() => {
      const {paragonLevel, kills, timePlayed} = props.profileData
      return {paragonLevel, kills, timePlayed}
    })
    
</script>

<template>
  <div class="grid grid-cols-1 gap-4 min-[992px]:grid-cols-6">
    <div class="min-[992px]:col-span-4 rounded-lg border border-gray-200 p-4">
      <h1>Izquierda</h1>
      <h2>{{ props.profileData.heroes.name }}</h2>
      <TopHeroes v-if="hasHeroes" :heroes="topHeroes"/>
      <HeroesList v-if="hasHeroesList" :heroes="heroesList"/>
      <ProgressList :acts="profileData.progression"/>
    </div>
    <div class="min-[992px]:col-span-2 rounded-lg border border-gray-200 p-4">
      <h1>Derecha</h1>
      <PlayerStats :stats="statsData"/>
    </div>
  </div>
</template>