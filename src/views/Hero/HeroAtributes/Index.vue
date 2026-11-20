<script setup>
// Importamos los componentes
import { computed } from 'vue';
import HeroAttributeList from './HeroAttributeList.vue'
import HeroResources from './HeroResources.vue'

// Definimos:
// Los atributos principales
const coreAttributesKeys = ['strength', 'dexterity', 'vitality', 'intelligence']
// Los atributos secundarios
const secondaryAttributesKeys = ['damage', 'toughness', 'healing']
// Los recursos
const resourcesKeys = ['life', 'primaryResource', 'secondaryResource']


  const props = defineProps({
    attributes: {
      type: Object,
      required: true
    }
  })

    // Creamos el objeto de atributos principales
    const coreAttributes = computed (() => {
      return coreAttributesKeys.map(item => ({ name: item, val: props.attributes[item] }))
    })

    // Creamos el objeto de atributos principales
    const secondaryAttributes = computed (() => {
      return secondaryAttributesKeys.map(item => ({ name: item, val: props.attributes[item] }))
    })
    const resources = computed (() => {
      // Creamos el objeto de recursos 
      // Agregamos el tipo de personaje `classSlug` (necesario para los Sprites CSS)
      const data = {
        classSlug: props.attributes.classSlug,
        resources: {}
      }
      resourcesKeys.forEach(item => {
        data.resources[item] = { name: item, val: props.attributes[item] }
      })
      return data
    })

</script>

<template>
  <div class="h-attriubutes">
    <!--Título-->
    <h2 class="font-diablo">Attributes</h2>

    <hr class="bg-white">

    <div class="attributes">
      <!-- Atributos Principales-->
      <div class="core">
        <HeroAttributeList :attributes="coreAttributes"/>
      </div>
      <hr>
      <!-- Atributos Secundarios-->
      <div class="secondary">
        <HeroAttributeList :attributes="secondaryAttributes"/>
      </div>
    </div>
    <hr>
    <!-- Recursos -->
    <div class="resources">
      <HeroResources :resources="resources"/>
    </div>

  </div>
</template>