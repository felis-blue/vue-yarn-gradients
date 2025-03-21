<template>
  <div id="color-templates">
    <button
      v-for="color in colors"
      :key="color.colorNumber"
      type="button"
      class="color color-template"
      :class="[color.textColor, color.hueGroupStart ? 'hue-group-start' : '']"
      :style="color.hex ? `--color: ${color.hex};` : ''"
      @click="handleTemplateClick(color)"
    >
      {{ color.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { colors, type Color } from '@/data/colors';

function handleTemplateClick(color: Color) {
  console.log(color);
}
</script>

<style scoped>
#color-templates {
  font-size: 0.75rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14ch, 1fr));
  align-items: end;
  gap: 0.2em;
}

.color {
  width: 100%;
  height: 1.3em;
  border: 1px solid var(--color, var(--color-text-accent));
  border-radius: 100vw;
  background-color: var(--color, transparent);

  box-shadow: 1px 1px 4px -1px var(--color-shadow);
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
