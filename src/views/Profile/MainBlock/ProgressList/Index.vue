<script setup>
import { computed } from 'vue';
import ProgressItem from './ProgressItem.vue'

  const props = defineProps ({
    acts: {
      required: true,
      type: Object
    }
  })
       /* Order acts from 1 to 5
       * @returns {Object} Ordered acts
       */
    const sortedActs = computed(() =>{
        return Object.keys(props.acts)
        .sort()
        .reduce((a, c) => {
            a[c] = props.acts[c]
            return a
        }, {})
    })
</script>
    


<template>
  <section class="progression-bosses mt-5 border-t pt-4">
  <h2 class="mb-4 font-diablo">Progression</h2>

  <ul class="grid grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-5">
    <li v-for="(val, key) in sortedActs" :key="key" class="rounded bg-gray-900">
      <ProgressItem :act="{ actNum: key, value: val }" />
    </li>
  </ul>
</section>
</template>

<style>
  .progression-bosses .boss-img {
    display: block;
  }

  .progression-bosses .boss-img .act {
    margin: 0 auto;
    width: 50px;
    height: 55px;
  }
</style>