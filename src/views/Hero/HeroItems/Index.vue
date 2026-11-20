<script setup>
    import { computed } from 'vue';
import ItemDetail from './ItemDetail.vue'

// Objeto con las keys de los 'items' del personaje
    const defaultItems = {
        head: {
            slotName: 'head'
        },
        shoulders: {
            slotName: 'Shoulders'
        },
        torso: {
            slotName: 'Torso'
        },
        neck: {
            slotName: 'Neck'
        },
        hands: {
            slotName: 'Hands'
        },
        waist: {
            slotName: 'Waist'
        },
        bracers: {
            slotName: 'Bracers'
        },
        leftFinger: {
            slotName: 'Left Finger'
        },
        legs: {
            slotName: 'Legs'
        },
        rightFinger: {
            slotName: 'Right Finger'
        },
        mainHand: {
            slotName: 'Main Hand'
        },
        feet: {
            slotName: 'Feet'
        },
        offHand: {
            slotName: 'Off Hand'
        }
    }

    const props = defineProps({
        items: {
        type: Object,
        required: true
        }
    })

    const itemsData = computed(() => {
      // Fusionar objetos:
      // Esto lo hacemos para mostrar el hueco vacío en caso de que ese objeto no esté equipado
      // Si NO hay item equipado, manda el valor de 'defaultItems' correspondiente
      // Si hay item equipado, manda la info del item
      return Object.fromEntries(
        Object.entries(defaultItems).map(([slot, defaultItem]) => [
          slot,
          { ...defaultItem, ...(props.items?.[slot] ?? {}) }
        ])
      )
    })
</script>

<template>
  <section class="hero-items mb-5">
    <h2 class="font-diablo">Items</h2>

    <hr class="border-white">

    <!-- Grid de 3 columnas. Mostramos solo una centrada -->
    <div class="grid grid-cols-3 gap-3">
      <div class="col-start-2 min-w-0">
        <ItemDetail :item="itemsData.head"/>
      </div>
    </div>

    <hr class="border-white">

    <!-- Grid de 3 columnas -->
    <div class="grid grid-cols-3 gap-3">
      <div class="min-w-0">
        <ItemDetail :item="itemsData.shoulders"/>
      </div>
      <div class="min-w-0">
        <ItemDetail :item="itemsData.torso"/>
      </div>
      <div class="min-w-0">
        <ItemDetail :item="itemsData.neck"/>
      </div>
    </div>

    <hr class="border-white">

    <!-- Grid de 3 columnas -->
    <div class="grid grid-cols-3 gap-3">
      <div class="min-w-0">
        <ItemDetail :item="itemsData.hands"/>
      </div>
      <div class="min-w-0">
        <ItemDetail :item="itemsData.waist"/>
      </div>
      <div class="min-w-0">
        <ItemDetail :item="itemsData.bracers"/>
      </div>
    </div>

    <hr class="border-white">

    <!-- Grid de 3 columnas -->
    <div class="grid grid-cols-3 gap-3">
      <div class="min-w-0">
        <ItemDetail :item="itemsData.leftFinger"/>
      </div>
      <div class="min-w-0">
        <ItemDetail :item="itemsData.legs"/>
      </div>
      <div class="min-w-0">
        <ItemDetail :item="itemsData.rightFinger"/>
      </div>
    </div>

    <hr class="border-white">

    <!-- Grid de 3 columnas -->
    <div class="grid grid-cols-3 gap-3">
      <div class="min-w-0">
        <ItemDetail :item="itemsData.mainHand"/>
      </div>
      <div class="min-w-0">
        <ItemDetail :item="itemsData.feet"/>
      </div>
      <div class="min-w-0">
        <ItemDetail :item="itemsData.offHand"/>
      </div>
    </div>

  </section>

</template>