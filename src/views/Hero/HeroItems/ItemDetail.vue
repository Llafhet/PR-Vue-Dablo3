<script setup>
import { computed } from 'vue';

    const props = defineProps({
        item:{
            type: Object,
            required: true
        }
    })

    // Resuelve la URL de la imagen
    const itemUrl = computed(() => {
      return props.item?.iconUrl ?? ''
    })
  // Comprueba si el item tiene gemas
  const itemHasGems = computed(() => {
    return Array.isArray(props.item?.gems) && props.item.gems.length > 0
  })
  // Si tiene gemas, comprueba si es Gema o Joya
  // Puede haber varias Gemas. Solo puede haber una Joya. No puede haber joyas y gemas mezcladas
  const gemOrJewel = computed(() => {
    return props.item?.gems?.[0]?.isGem === false ? 'Jewel' : 'Gems'
  })
  // Clase CSS para saber la rareza
  const itemClassColor = computed(() => {
    if (props.item?.displayColor) {
      return `item-${props.item.displayColor}`
    }
    // Si no tiene color (es que no hay objeto equipado)
    return 'item-none'
  })

</script>

<template>
  <!-- Clase que determina el color -->
  <div class="d3-icon-item h-56 overflow-y-auto bg-[#171312] pt-3 text-center" :class="itemClassColor">

    <div class="flex h-full flex-col justify-between">
      <!-- Si el item tiene ID, es que tenemos la información -->
      <!-- Es decir, que tiene un objeto equipado. -->
      <template v-if="item.id">
        <div>
          <div class="item-image">
            <!-- Nombre del objeto -->
            <p class="text-gray-400">{{ item.name }}</p>
            <!-- Imagen correspondiente al objeto -->
            <img v-if="itemUrl" :src="itemUrl" :alt="`${item.slotName ?? 'Item'} ${item.name}`">
          </div>
        </div>

        <div>
          <!-- No todos los objetos tienen gemas -->
          <!-- Por lo tanto, si el objeto tiene gemas engarzadas -->
          <template v-if="itemHasGems">
            <!-- Puede ser Gema o Joya -->
            <small>{{ gemOrJewel }}:</small>
            <ul class="m-0 flex list-none flex-wrap justify-center gap-2 p-0">
              <!-- Un objeto puede tener varias gemas -->
              <li v-for="(gem, index) in item.gems" :key="gem.item?.id ?? index" class="rounded border border-white/15 px-2 py-1 text-sm">
                <!-- Datos de la gema -->
                <span>{{ gem.item?.name ?? gem.name ?? 'Gem' }}</span>
                <ul v-if="gem.attributes?.length" class="m-0 list-none p-0 text-xs text-gray-400">
                  <li v-for="(attribute, attributeIndex) in gem.attributes" :key="attributeIndex">
                    {{ attribute }}
                  </li>
                </ul>
              </li>
            </ul>
          </template>
        </div>
      </template>
      <!-- En caso de que no tenga el objeto equipado -->
      <p v-else-if="item.slotName">
        <!-- Mostramos el nombre del slot y dejamos el contenido vacío -->
        <span class="inline-flex rounded bg-gray-200 px-2 py-1 text-sm text-gray-900">
          {{ item.slotName }}
        </span>
      </p>
    </div>

  </div>
</template>

<style scoped>
.d3-icon-item {
  box-sizing: border-box;
  border-top-style: solid;
  border-top-width: 4px;
}
.d3-icon-item.item-none {
  border-color: transparent;
}
.d3-icon-item.item-green {
  border-color: #8bc34a;
}
.d3-icon-item.item-orange {
  border-color: #ff9800;
}
.d3-icon-item.item-yellow {
  border-color: #ffeb3b;
}
.d3-icon-item.item-blue {
  border-color: #03a9f4;
}
.d3-icon-item.item-white {
  border-color: #a0aab5;
}
</style>