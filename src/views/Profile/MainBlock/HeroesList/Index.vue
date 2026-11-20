<script setup>
import HeroIco from './HeroIco.vue';
import HeroClassLevel from './HeroClassLevel.vue';
import { formatNumber } from '@/filters/numeral.js';

    defineProps({
        heroes:{
            required: true,
            type: Array
        }
    })
</script>

<template>
  <div>
    <h1 class="mb-3 text-xl font-diablo text-[#d6c7a6]">Heroes List</h1>
    <div class="overflow-x-auto">
      <table class="w-full border-collapse text-left text-sm text-[#f0dfc2]">
        <thead class="border-b border-[#573b2b] text-[#d6c7a6]">
          <tr>
            <th scope="col" class="px-3 py-2">Nombre</th>
            <th scope="col" class="px-3 py-2">Clase</th>
            <th scope="col" class="px-3 py-2">Kills</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="hero in heroes"
            :key="hero.id"
            class="border-b border-[#573b2b]/60 last:border-0"
          >
            <td class="px-3 py-2">
              <HeroIco :hero="hero" />
            </td>
            <td class="px-3 py-2">
              <HeroClassLevel :hero="{ classSlug: hero.class, level: hero.level }" />
            </td>
            <td class="px-3 py-2">{{formatNumber(hero.kills?.monsters)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>