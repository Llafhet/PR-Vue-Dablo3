<script setup>
import { formatNumber } from '@/filters/numeral'


  defineProps({
    attributes: {
      type: Array,
      required: true
    }
  })

</script>

<template>
  <ul class="m-0 list-none p-0">
    <!-- Itera -->
    <li v-for="attr in attributes" :key="attr.name" class="mb-1">
      <div class="flex justify-between">
        <!-- Nombre atributo -->
        <div class="px-2 capitalize name-text">{{ attr.name }}</div>
        <!-- Valor formateado -->
        <div class="px-2 font-mono">{{ formatNumber(attr.val) }}</div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.name-text {
  color: #efb45d;
  font-weight: 600;
}
</style>