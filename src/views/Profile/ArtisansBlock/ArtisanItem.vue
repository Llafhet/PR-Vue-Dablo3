<script setup>
    defineProps({
        artisan:{
            required: true,
            type: Object
        }
    })
</script>
<template>
  <article class="flex items-center gap-4 rounded bg-[#151212] p-4">
    <!-- Toma los emojis que viene de ArtisansBlock/index, del array artisansInfo
    <div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#404850]">
      <span class="text-4xl" aria-hidden="true">{{ artisan.emoji }}</span>
    </div>    
    -->
    <!-- Bloque Ícono / Emoji Que toma los iconos de fontawesome-->
    <div class="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[#404850]">
      <font-awesome-icon :icon="artisan.icon" class="text-2xl" :style="{ color: artisan.color }" />
    </div>

    <div class="min-w-0">
      <h4 class="font-bold capitalize">{{ artisan.name }}</h4>

      <p v-if="artisan.normal?.level" class="m-0">
        Level {{ artisan.normal.level }} (normal)
      </p>

      <p v-if="artisan.hardcore?.level" class="mb-0 text-gray-400">
        Level {{ artisan.hardcore.level }}
        <span class="text-red-400">(hardcore)</span>
      </p>
    </div>
  </article>
</template>
