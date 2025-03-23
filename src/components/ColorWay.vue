<template>
  <div id="yarn-colors">
    <div v-for="(thread, row) in segments" :key="row" class="thread">
      <ColorWaySegment
        v-for="(segment, column) in thread"
        :key="column"
        :segment="segment"
        @click="handleClick($event, row, column)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ColorWaySegment from './ColorWaySegment.vue';
import type { ColorSegment } from './MainArea.vue';

defineProps<{ segments: ColorSegment[][] }>();

const emit = defineEmits(['updateFocus']);

function handleClick(event: MouseEvent, row: number, column: number) {
  emit('updateFocus', event.shiftKey, row, column);
}
</script>

<style scoped>
#yarn-colors {
  display: grid;
  gap: 0.2rem;
}

.thread {
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  gap: 0.2rem;
}
</style>
