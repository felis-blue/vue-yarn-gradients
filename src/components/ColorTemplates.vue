<template>
  <div id="color-templates">
    <button
      v-for="color in colors"
      :key="color.colorNumber"
      type="button"
      class="color color-template"
      :class="[color.textColor, color.hueGroupStart ? 'hue-group-start' : '']"
      :style="color.hex ? `--color: ${color.hex};` : ''"
      @click="$emit('updateColor', color)"
    >
      {{ color.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { colors } from '@/data/colors';
defineEmits(['updateColor']);
</script>

<style scoped>
#color-templates {
  font-size: 0.75rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14ch, 1fr));
  align-items: end;
  gap: 0.2em;
}

.color-template {
  height: 1.8rem;
}

.hue-group-start {
  grid-column-start: 1;
  margin-block-start: 0.8em;
}

.light {
  color: var(--color-background-accent);
  text-shadow: 1px 1px 2px var(--color-text-accent);
}

.dark {
  text-shadow: 1px 1px 2px var(--color-background-accent);
}
</style>
