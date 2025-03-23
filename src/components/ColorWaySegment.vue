<template>
  <button
    type="button"
    class="color color-part"
    :class="{ focus: segment.focus }"
    :style="segment.color.hex ? `--color: ${segment.color.hex};` : ''"
    :title="segment.color.hex ? segment.color.name : ''"
  ></button>
</template>

<script setup lang="ts">
import type { ColorSegment } from './MainArea.vue';

defineProps<{
  segment: ColorSegment;
}>();
</script>

<style scoped>
.color-part {
  height: 1.3rem;
}

.focus {
  outline: auto;
}
</style>
