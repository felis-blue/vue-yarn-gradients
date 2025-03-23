<template>
  <div class="action-button-wrapper">
    <a class="action-button" :href="pngUrl" download="pattern.png">Download PNG</a>
    <a class="action-button" :href="svgUrl" download="pattern.svg">Download SVG</a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pngUrl: string;
  svgUrl: string;
}>();
</script>

<style scoped>
.action-button-wrapper {
  display: grid;
  gap: 0.2rem;
  grid-template-columns: repeat(1, 1fr);

  @container (width > 40ch) {
    grid-template-columns: repeat(2, 1fr);
  }

  @container (width > 80ch) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.action-button {
  text-align: center;
  border: 2px solid var(--color-text-accent);
  border-radius: 0.5rem;
  padding: 0.5rem;
}
</style>
