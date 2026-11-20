<script setup>
//import ActiveSkills from './ActiveSkills.vue'
//import PassiveSkills from '@/views/Hero/HeroSkills/PassiveSkills.vue'
import { defineAsyncComponent, ref } from 'vue';

  defineProps({
    skills: {
      required: true,
      type: Object
    }
  })

 const PassiveSkills = defineAsyncComponent(
    () => import('./PassiveSkills.vue')
)
const ActiveSkills = defineAsyncComponent(
    () => import('./ActiveSkills.vue')
)
const showPassiveSkills = ref(false) 
const showActiveSkills = ref(false)  

</script>

<template>
  <div class="skills-wrapper mt-5">
    <h2 class="font-diablo">Skills</h2>
    <hr class="bg-white">
    <button
        type="button"
        class="rounded border border-[#573b2b] px-3 py-2 text-[#d6c7a6] hover:bg-[#211b18]"
        :aria-expanded="showActiveSkills"
        aria-controls="passive-skills-panel"
        @click="showActiveSkills = !showActiveSkills"
    >
        {{ showActiveSkills ? 'Ocultar habilidades Activas' : 'Cargar habilidades Activas' }} 
    </button>
    <div v-if="showActiveSkills" id="passive-skills-panel">
        <ActiveSkills :skills="skills.active"/>
    </div>

    <hr>
    <button
        type="button"
        class="rounded border border-[#573b2b] px-3 py-2 text-[#d6c7a6] hover:bg-[#211b18]"
        :aria-expanded="showPassiveSkills"
        aria-controls="passive-skills-panel"
        @click="showPassiveSkills = !showPassiveSkills"
    >
        {{ showPassiveSkills ? 'Ocultar habilidades pasivas' : 'Cargar habilidades pasivas' }}
    </button>
    <div v-if="showPassiveSkills" id="passive-skills-panel">
        <keep-alive>
            <PassiveSkills :skills="skills.passive" />
        </keep-alive>
    </div>

  </div>
</template>
