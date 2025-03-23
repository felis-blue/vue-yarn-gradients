<template>
  <div class="action-button-wrapper">
    <a class="action-button" :href="pngUrl" download="pattern.png">Download PNG</a>
    <a class="action-button" :href="svgUrl" download="pattern.svg">Download SVG</a>
    <button type="button" class="action-button">Copy pattern code</button>
    <button type="button" class="action-button" @click="dialog?.showModal()">Apply pattern code</button>
  </div>

  <dialog id="pattern-code-dialog" ref="dialog" @submit="$emit('updatePattern', pattern)" @close="pattern = ''">
    <form class="item" method="dialog">
      <label for="pattern-code">Pattern Code</label>
      <TextInput autofocus type="text" name="pattern-code" v-model="pattern" />
      <div class="action-button-wrapper">
        <button class="action-button" type="button" @click="dialog?.close()">Cancel</button>
        <button class="action-button">Confirm</button>
      </div>
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { ref, useTemplateRef } from 'vue';
import TextInput from './form/TextInput.vue';

defineProps<{
  pngUrl: string;
  svgUrl: string;
}>();

defineEmits(['updatePattern']);

const dialog = useTemplateRef('dialog');
const pattern = ref('');
</script>

<style scoped>
.action-button-wrapper {
  display: flex;
  gap: 0.2rem;
  flex-wrap: wrap;
  justify-content: end;
}

.action-button {
  text-align: center;
  border: 2px solid var(--color-text-accent);
  border-radius: 0.5rem;
  padding: 0.5rem;
}

#pattern-code-dialog {
  background-color: var(--color-background);
  margin: auto;

  border: 2px solid var(--color-text-accent);
  border-radius: 0.5rem;
  padding: 1.5rem;

  width: calc(90cqi);
}

.item {
  display: grid;
  gap: 1rem;
  align-items: center;
}
</style>
