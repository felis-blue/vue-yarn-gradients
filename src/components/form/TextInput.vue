<template>
  <input v-model="model" />
</template>

<script setup lang="ts">
const model = defineModel();
</script>

<style scoped>
input {
  width: 100%;
  border: 2px solid var(--color-text-accent);
  border-radius: 0.5em;
  padding: 0.5em;
}
</style>
