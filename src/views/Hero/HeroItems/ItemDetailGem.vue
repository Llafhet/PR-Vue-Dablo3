<script setup>
import { computed } from 'vue';

    const props = defineProps({
        gem:{
            required: true,
            type: Object
        }
    })

    const gemUrl = computed(() => {
        //Cambio de 'large' por 'small'
        const host = 'http://media.blizzard.com/d3/icons/items/small/'
        return `${host}${this.gem.item.icon}.png`
    })
</script>

<template>
  <img :src="gemUrl" :alt="gem.item.name" :title="gem.item.name">
</template>