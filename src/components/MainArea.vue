<template>
  <section class="main-area">
    <div class="item cols">
      <label for="segments">Number of segments</label>
      <TextInput name="segments" id="segments" v-model="segments" />
    </div>

    <div class="item cols">
      <label for="thread-count">Number of threads</label>
      <SelectInput v-model="threadCount">
        <option value="3">3 threads</option>
        <option value="4">4 threads</option>
        <option value="5">5 threads</option>
      </SelectInput>
    </div>

    <div class="item">
      <label for="color-templates">Colors</label>
      <ColorTemplates />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ColorTemplates from './ColorTemplates.vue';
import SelectInput from './form/SelectInput.vue';
import TextInput from './form/TextInput.vue';

const segments = ref(13);
const threadCount = ref(3);
</script>

<style scoped>
.main-area {
  display: grid;
  gap: 1.5rem;
}

.item {
  display: grid;
  gap: 1rem;
  align-items: center;
}

@container (width > 500px) {
  .cols {
    grid-template-columns: minmax(10ch, 18ch) 1fr;
  }
}
</style>
