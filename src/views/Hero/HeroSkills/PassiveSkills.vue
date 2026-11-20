<script setup>
defineProps({
  skills: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="passive-skills">
    <h4 class="my-5">Passive</h4>
    <div class="skills grid grid-cols-2 gap-3 min-[992px]:grid-cols-1">
      <div
        v-for="(entry, idx) in skills"
        :key="entry.skill.slug ?? idx"
        class="flex min-w-0 items-center gap-2"
      >
        <img
          :src="entry.skill.iconUrl"
          :alt="entry.skill.name"
          class="h-[42px] w-[42px] shrink-0"
        >
        <span class="min-w-0" :title="entry.skill.description">
          {{ entry.skill.name }}
        </span>
      </div>
    </div>
  </div>
</template>
