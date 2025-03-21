<template>
  <div class="select-wrapper">
    <select v-model="model">
      <slot />
    </select>
    <div class="select-arrow"></div>
  </div>
</template>

<script setup lang="ts">
const model = defineModel();
</script>

<style scoped>
.select-wrapper {
  display: grid;
  align-items: center;
  grid-template-areas: 'select';
}

select {
  border: 2px solid var(--color-text-accent);
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.select-arrow {
  width: 0.8rem;
  height: 0.5rem;
  background-color: var(--color-text-accent);
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  justify-self: right;
  margin-right: 1rem;
  pointer-events: none;
}

select,
.select-arrow {
  grid-area: select;
}
</style>
