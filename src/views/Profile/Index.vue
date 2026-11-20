<script setup>
  import { getApiAccount } from '@/api/search';
  import { useSetError } from '@/mixins/setError';
  import { computed, onMounted, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useLoadingStore } from '@/store/modules/loading.js';
  import MainBlock from '@/views/Profile/MainBlock/Index.vue';
  import ArtisansBlock from './ArtisansBlock/Index.vue'

  const route = useRoute()
  const router = useRouter()
  const profileData = ref(null)
  const { setApiErr } = useSetError()
  const loadingStore = useLoadingStore()

  async function fetchData(){
      const { region, battleTag: account } = route.params
      if (!region || !account) return

      loadingStore.SET_LOADING(true)
      // Llamada a la API con los datos necesarios
      try {
        const { data } = await getApiAccount({ region, account })
        profileData.value = data
      } catch (err) {
        profileData.value = null
        const errObj = {
          routeParams: route.params,
          message: err.message
        }
        if (err.response) {
          errObj.data = err.response.data
          errObj.status = err.response.status
        }
        setApiErr(errObj)
        router.push({ name: 'error' })
      } finally {
        loadingStore.SET_LOADING(false)
      }
  }

  const artisansData = computed(() =>{
    const data = profileData.value

    if (!data) return null

    return {
      blacksmith: data.blacksmith,
      blacksmithHardcore: data.blacksmithHardcore,
      jeweler: data.jeweler,
      jewelerHardcore: data.jewelerHardcore,
      mystic: data.mystic,
      mysticHardcore: data.mysticHardcore
    }
  })

  onMounted(fetchData)
</script>

<template>
  <div>
    <div class="text-center">
      <h1>Profile View</h1>
      <h2 v-diablo:white.bottom="2" v-if="profileData">{{ profileData.battleTag }}</h2>
      <img
        v-if="profileData && profileData.avatar"
        :src="profileData.avatar"
        alt="Avatar"
        class="mx-auto h-24 w-24 rounded-full object-cover"
      >
    </div>
     <!--<pre v-if="profileData">{{ profileData}}</pre>-->
     <MainBlock v-if="profileData" :profileData="profileData"/>
     <ArtisansBlock
        v-if="profileData"
        :artisans-data="artisansData" />
  </div>
</template>