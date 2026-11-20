<script setup>
    const props = defineProps({
      icons: {
        type: Array,
        required: true
      }
    })
</script>

<template>
  <div class="text-center ">
    <p class="text-gray-600">Powered by</p>
    <ul class="flex justify-center gap-4">
      <li 
        v-for="(icon, index) in props.icons" 
        :key="index"
      >
        <a 
          :href="icon.href" 
          target="_blank" 
          :title="icon.href"
        >
          <font-awesome-icon 
            :icon="icon.classes" 
            class="fa-lg" 
            :style="{'color': icon.color}"
          />
        </a>
      </li>
    </ul>
  </div>
</template>