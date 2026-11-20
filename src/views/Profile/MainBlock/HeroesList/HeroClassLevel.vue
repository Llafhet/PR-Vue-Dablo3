<script setup>
    import {classToName} from '@/mixins/heroName'

    defineProps({
        hero: {
            required: true,
            type: Object
        }
    })
</script>

<template>
  <div class="hero-name-level">
    <span> {{ classToName(hero.classSlug) }} </span>
    <span>·</span>
    <span class="text-monospace font-weight-bold"> {{ hero.level }} </span>
  </div>
</template>