<template>
  <header>
    <h1>Custom Yarn Gradients</h1>
  </header>
  <main>
    <InfoBox />
  </main>
</template>

<script setup lang="ts">
import InfoBox from './components/InfoBox.vue';
</script>

<style scoped>
header {
  padding: 1.5rem;
  margin-block-end: 1.5rem;

  border-radius: 0.5rem;
  background-color: var(--color-background-accent);
  box-shadow: 1px 1px 4px -1px var(--color-shadow);
}
</style>
