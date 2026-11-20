<script setup>
  import { useSetError } from '@/mixins/setError';
  import { getApiHero, getApiDetailedHeroItems } from '@/api/search';
  import { ref, onMounted, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';

  import HeroDetailHeader from './HeroDetailHeader.vue';
  import BaseLoading from '@/components/BaseLoading.vue';
  import HeroAttributes from './HeroAtributes/Index.vue';
  import HeroSkills from './HeroSkills/Index.vue'
  import HeroItems from './HeroItems/Index.vue'

  const route = useRoute()
  const router = useRouter()
  const { setApiErr } = useSetError()

  const isLoadingHero = ref(false)
  const isLoadingItems = ref(false)
  const hero = ref(null)
  const items = ref(null)

  async function loadHero(){
    isLoadingHero.value = true
    isLoadingItems.value = true
    const { region, battleTag: account, heroId } = route.params

    getApiHero({ region, account, heroId })
      .then(({ data }) => {
        hero.value = data
      })
      .catch((err) => {
        hero.value = null
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
      })
      .finally(() => {
        isLoadingHero.value = false
      })

    getApiDetailedHeroItems({ region, account, heroId })
      .then(({ data }) => {
        items.value = data
      })
      .catch((err) => {
        items.value = null
        console.log(err)
      })
      .finally(() => {
        isLoadingItems.value = false
      })
  }

  const detailHeader = computed(() => {
    const {
      name,
      // valor: alias
      class: classSlug,
      gender,
      level,
      hardcore,
      seasonal,
      paragonLevel,
      alive,
      seasonCreated
    } = hero.value

    return {
      name,
      classSlug,
      gender,
      level,
      hardcore,
      seasonal,
      paragonLevel,
      alive,
      seasonCreated
    }
  })

  const detailStats = computed(() => {
    // Devuelve el contenido de stats y agrega classSlug
    return { ...hero.value.stats, classSlug: hero.value.class }
  })
  onMounted(loadHero)
</script>

<template>
  <div>
    <!--<h1>Hero View</h1>-->
    <div class="hero-view">
    <BaseLoading v-if="isLoadingHero"/>
    <HeroDetailHeader v-if="hero" :detail="detailHeader"/>

    <div class="grid grid-cols-1 gap-4 min-[992px]:grid-cols-3">
      <section class="min-[992px]:order-2 min-[992px]:col-span-2">
        <BaseLoading v-if="isLoadingItems"/>
        <HeroItems v-if="items" :items="items"/>
      </section>

      <section class="min-[992px]:order-1 min-[992px]:col-span-1">
        <template v-if="hero">
          <HeroAttributes :attributes="detailStats"/>
          <HeroSkills :skills="hero.skills"/>
        </template>
      </section>
    </div>
  </div>
  </div>
</template>