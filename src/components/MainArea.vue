<template>
  <section class="main-area">
    <div class="item cols">
      <label for="segments">Number of segments</label>
      <TextInput name="segments" id="segments" v-model="segmentCount" />
    </div>

    <div class="item cols">
      <label for="thread-count">Number of threads</label>
      <SelectInput v-model="threadCount">
        <option value="3">3 threads</option>
        <option value="4">4 threads</option>
        <option value="5">5 threads</option>
      </SelectInput>
    </div>

    <div class="item colors">
      <label for="color-templates">Colors</label>
      <ColorTemplates @update-color="updateColor" />
    </div>

    <div class="item colors">
      <label for="yarn-colors">Colorway</label>
      <ColorWay :segments="segments" @update-focus="updateFocus" />
    </div>

    <div class="item">
      <label for="pattern">Pattern</label>
      <ColorPattern :segments="segments" @update-downloads="updateDownloads" />
    </div>

    <ActionButtons :png-url="pngUrl" :svg-url="svgUrl" />
  </section>
</template>

<script setup lang="ts">
import { type Color } from '@/data/colors';
import { onMounted, ref, watch, type Ref } from 'vue';
import ActionButtons from './ActionButtons.vue';
import ColorPattern from './ColorPattern.vue';
import ColorTemplates from './ColorTemplates.vue';
import ColorWay from './ColorWay.vue';
import SelectInput from './form/SelectInput.vue';
import TextInput from './form/TextInput.vue';

export interface ColorSegment {
  focus: boolean;
  color?: Color;
}

const segmentCount = ref(17);
const threadCount = ref(4);
const segments: Ref<ColorSegment[][]> = ref([]);
const pngUrl = ref('');
const svgUrl = ref('');

onMounted(() => {
  setupSegments();
});

watch([segmentCount, threadCount], setupSegments);

function setupSegments() {
  segments.value = [];
  for (let i = 0; i < threadCount.value; i++) {
    const row: ColorSegment[] = [];
    for (let j = 0; j < segmentCount.value; j++) {
      row.push({ focus: false });
    }
    segments.value.push(row);
  }
}

function updateFocus(shift: boolean, row: number, column: number) {
  const currentSegment = segments.value[row][column];
  const focus = toggleFocus(currentSegment);
  if (shift) {
    // toggle focus state of all segments that
    //  * are on the same row as the clicked segment
    //  * are before the clicked segment
    //  * have the same color as the clicked segment
    //  * and have no segments with another color between them and the clicked segment
    for (const segment of segments.value[row].slice(0, column).reverse()) {
      if (segment.color == currentSegment.color) {
        toggleFocus(segment, focus);
      } else {
        break;
      }
    }
  }
}

function updateColor(color: Color) {
  for (const row of segments.value) {
    for (const segment of row) {
      if (segment.focus) {
        segment.color = color;
        segment.focus = false;
      }
    }
  }
}

function updateDownloads(newPngUrl: string, newSvgUrl: string) {
  pngUrl.value = newPngUrl;
  svgUrl.value = newSvgUrl;
}

function toggleFocus(segment: ColorSegment, toggle?: boolean) {
  if (toggle !== undefined) {
    segment.focus = toggle;
  } else {
    segment.focus = !segment.focus;
  }
  return segment.focus;
}
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

.colors:deep() .color {
  border-radius: 100vw;
  border: 1px solid var(--color, var(--color-text-accent));
  background-color: var(--color, transparent);

  box-shadow: 1px 1px 4px -1px var(--color-shadow);
}
</style>
