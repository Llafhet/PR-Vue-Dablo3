<script setup>
import {
    resourceClassName,
    resourceDisplayName
} from '@/mixins/resources'
import { formatNumber } from '@/filters/numeral'
import { computed } from 'vue';

  const props = defineProps({
    resources: {
      required: true,
      type: Object
    }
  })

    const classResourceName = computed(() => {
      return `resource-${resourceClassName(props.resources.classSlug)}`
    })
    const displayResourceName = computed (() => {
      return resourceDisplayName(props.resources.classSlug)
    })
    // Solo demon-hunter tiene recurso secundario
    const hasSecondaryResource = computed (() => {
      return props.resources.classSlug === 'demon-hunter'
    })


</script>

<template>
  <div class="resource-wrapper">
    <div class="resource">
      <div class="flex items-center justify-start">
        <!-- Imagen Vida -->
        <div class="resource-icon resource-life"/>
        <!-- Nombre -->
        <div class="ml-3 uppercase name-text">
          <span>{{ resources.resources.life.name }}</span>
        </div>
        <!-- Valor -->
        <div class="ml-3">
          <span class="font-mono"> {{ formatNumber(resources.resources.life.val)}} </span>
        </div>
      </div>

    </div>

    <hr>

    <div class="resource">
      <div class="flex items-center justify-start">
        <!-- Imagen Recurso -->
        <div class="resource-icon" :class="classResourceName"/>
        <!-- Nombre -->
        <div class="ml-3 uppercase name-text" :class="'resource-name-' + resources.classSlug">
          <span>{{ displayResourceName }}</span>
        </div>
        <div class="ml-3">
          <!-- Valor -->
          <span class="font-mono">
            {{ formatNumber(resources.resources.primaryResource.val)}}
          <template v-if="hasSecondaryResource">
            <!-- Valor recurso secundario -->
            <span class="mx-0 text-gray-400">/</span>
            <span> {{ formatNumber(resources.resources.secondaryResource.val)}} </span>
          </template>
          </span>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
  .resource .name-text {
    color: #efb45d;
  }

  .resource .resource-name-demon-hunter {
    width: auto;
  }

  @media (min-width: 992px) {
    .resource .resource-name-demon-hunter {
      width: 100px;
    }
  }
</style>