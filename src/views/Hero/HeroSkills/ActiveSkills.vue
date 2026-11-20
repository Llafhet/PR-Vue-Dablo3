<script setup>
import ActiveSkill from './ActiveSkill.vue'

defineProps({
  skills: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="active-skills">
    <h4 class="my-5">Active</h4>

    <div class="skills grid grid-cols-2 gap-3 min-[992px]:grid-cols-1">
      <ActiveSkill
        v-for="(entry, index) in skills"
        :key="entry.skill.slug ?? index"
        :skill="entry.skill"
        :rune="entry.rune"
        :slot-num="index + 1"
      />
    </div>
  </div>
</template>