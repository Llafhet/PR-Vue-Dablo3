<script setup>
import { classToName } from '@/mixins/heroName'
import { computed } from 'vue';


    const props = defineProps({
        detail:{
            type: Object,
            required: true
        }
    })

    const heroClass = computed(() => {
        const gender = props.detail.gender === 0 ? 'male' : 'female'
        return `hero-${props.detail.classSlug} ${gender}`
    })
</script>

<template>
  <section class="hero-detail-header my-12">
      <!-- Avatar -->
      <div class="mb-3 flex justify-center">
        <div
          class="hero-detail-avatar !h-[100px] !w-[100px] shrink-0 !bg-[length:300px_auto]"
          :class="heroClass"
          aria-hidden="true"
        ></div>
      </div>

      <div class="text-center">

        <!-- Nombre -->
        <h1 class="font-diablo truncate text-[#e8dcc2]">{{ detail.name }}</h1>

        <div class="font-mono">
          <div class="text-sm">
            <!-- Nivel -->
            <span>{{ detail.level }}</span>
            <!-- Nivel de Leyenda -->
            <span v-if="detail.paragonLevel" class="text-cyan-400">
              <span class="text-white"> · </span>
              ({{ detail.paragonLevel }})
            </span>
            <!-- Clase (A través del Mixin) -->
            <span> · {{ classToName(detail.classSlug) }}</span>
            <!-- ¿Es de temporada? -->
            <span v-if="detail.seasonal" class="text-emerald-400"> · Seasonal </span>
            <!-- ¿Es hardcore? -->
            <span v-if="detail.hardcore" class="text-red-400"> · Hardcore </span>
          </div>

          <p class="mb-0 mt-2">
            <!-- En qué temporada ha sido creado el héroe -->
            <span class="text-sm text-gray-400">
              Season created:
            </span>
            <span class="ml-2 inline-flex rounded bg-[#404850] px-2 py-1 text-xs font-semibold text-white">
              {{ detail.seasonCreated }}
            </span>
          </p>
        </div>

        <hr class="mt-6 border-0 border-t border-white/20">
      </div>
  </section>
</template>