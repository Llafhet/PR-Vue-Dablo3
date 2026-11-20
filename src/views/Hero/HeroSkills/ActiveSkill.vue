<script setup>
import { computed } from 'vue'

const props = defineProps({
  skill: {
    type: Object,
    required: true
  },
  rune: {
    type: Object,
    default: null
  },
  slotNum: {
    type: [Number, String],
    required: true
  }
})

const skillUrl = computed(() => props.skill.iconUrl)

const slotClass = computed(() => `slot-${props.slotNum}`)
</script>

<template>
  <div class="mb-3 flex min-w-0 items-center gap-2">
    <div class="relative shrink-0">
      <span class="slot" :class="slotClass" aria-hidden="true"></span>
      <img :src="skillUrl" :alt="skill.name" width="42" height="42">
    </div>

    <div class="min-w-0">
      <p class="skill-name m-0" :title="skill.description">
        {{ skill.name }}
      </p>
      <small v-if="rune" class="rune-name text-gray-400" :title="rune.description">
        {{ rune.name }}
      </small>
    </div>
  </div>
</template>