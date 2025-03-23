<template>
  <div id="pattern">
    <svg id="svg" ref="svg" xmlns="http://www.w3.org/2000/svg" fill="#d8d8d8" :viewBox="`0 0 ${width} ${height}`">
      <defs>
        <path id="path-3-0" d="M4,0c14,12 26,28 16,40c-14,-12 -26,-28 -16,-40ZM46,0c-14,12 -26,28 -16,40c14,-12 26,-28 16,-40Z" />
        <path id="path-3-1" d="M4,0c14,12 26,28 16,40c-7,-18 -18,-22 -16,-40ZM46,0c-14,12 -26,28 -16,40c7,-18 18,-22 16,-40Z" />
        <path id="path-3-2" d="M4,0c14,12 26,28 16,40c2,-18 -9,-22 -16,-40ZM46,0c-14,12 -26,28 -16,40c-2,-18 9,-22 16,-40Z" />

        <path id="path-4-0" d="M4,0c14,12 26,28 16,40c-14,-12 -26,-28 -16,-40ZM46,0c-14,12 -26,28 -16,40c14,-12 26,-28 16,-40Z" />
        <path id="path-4-1" d="M4,0c14,12 26,28 16,40c-7,-16 -22,-24 -16,-40ZM46,0c-14,12 -26,28 -16,40c7,-16 22,-24 16,-40Z" />
        <path id="path-4-2" d="M4,0c14,12 26,28 16,40c0,-17 -16,-23 -16,-40ZM46,0c-14,12 -26,28 -16,40c0,-17 16,-23 16,-40Z" />
        <path id="path-4-3" d="M4,0c14,12 26,28 16,40c6,-16 -9,-24 -16,-40ZM46,0c-14,12 -26,28 -16,40c-6,-16 9,-24 16,-40Z" />

        <path id="path-5-0" d="M4,0c14,12 26,28 16,40c-14,-12 -26,-28 -16,-40ZM46,0c-14,12 -26,28 -16,40c14,-12 26,-28 16,-40Z" />
        <path id="path-5-1" d="M4,0c14,12 26,28 16,40c-8,-14 -23,-26 -16,-40ZM46,0c-14,12 -26,28 -16,40c8,-14 23,-26 16,-40Z" />
        <path id="path-5-2" d="M4,0c14,12 26,28 16,40c-3,-16 -18,-24 -16,-40ZM46,0c-14,12 -26,28 -16,40c3,-16 18,-24 16,-40Z" />
        <path id="path-5-3" d="M4,0c14,12 26,28 16,40c2,-16 -13,-24 -16,-40ZM46,0c-14,12 -26,28 -16,40c-2,-16 13,-24 16,-40Z" />
        <path id="path-5-4" d="M4,0c14,12 26,28 16,40c7,-14 -8,-26 -16,-40ZM46,0c-14,12 -26,28 -16,40c-7,-14 8,-26 16,-40Z" />
      </defs>
      <g id="path-group">
        <template v-for="(threadsegment, segmentNo) in threadSegments" :key="segmentNo">
          <template v-for="row in rowRepeats" :key="row">
            <template v-for="col in columnRepeats" :key="col">
              <template v-for="(segment, threadNo) in randomizeSegments(threadsegment)" :key="threadNo">
                <use
                  :href="`#path-${threadCount}-${threadNo}`"
                  :fill="segment.color && segment.color.hex ? segment.color.hex : undefined"
                  :x="(col - 1) * (templateWidth + templateSpacingWidth)"
                  :y="(segmentNo * rowRepeats + (row - 1)) * (templateHeight + templateSpacingHeight)"
                ></use>
              </template>
            </template>
          </template>
        </template>
      </g>
    </svg>
    <canvas id="pattern-canvas" ref="canvas" :width="width" :height="height"></canvas>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, useTemplateRef, watch } from 'vue';
import type { ColorSegment } from './MainArea.vue';

const props = defineProps<{
  segments: ColorSegment[][];
}>();

const svg = useTemplateRef('svg');
const canvas = useTemplateRef('canvas');

// pattern parameters
const rowRepeats = 5;
const columnRepeats = 50;
const templateWidth = 50;
const templateHeight = 40;
const templateSpacingWidth = 2;
const templateSpacingHeight = -12;

const threadCount = computed(() => (props.segments.length ? props.segments.length : 0));
const segmentCount = computed(() => (props.segments.length ? props.segments[0].length : 0));
const rowsTotal = computed(() => segmentCount.value * rowRepeats);

const width = columnRepeats * templateWidth + (columnRepeats - 1) * templateSpacingWidth;
const height = computed(() => rowsTotal.value * templateHeight + (rowsTotal.value - 1) * templateSpacingHeight);

const threadSegments = computed(() => {
  const result: ColorSegment[][] = [];
  if (props.segments.length) {
    for (let j = 0; j < props.segments[0].length; j++) {
      const segment = [];
      for (let i = 0; i < props.segments.length; i++) {
        segment.push(props.segments[i][j]);
      }
      result.push(segment);
    }
  }
  return result;
});

watch([threadSegments, () => threadSegments.value.map((group) => group.map((segment) => segment.color))], updateCanvas);

function randomizeSegments(segments: ColorSegment[]) {
  return segments.slice().sort(() => 0.5 - Math.random());
}

function updateCanvas() {
  nextTick(async () => {
    const src = createSvgBlob();
    const image = await loadedImgWithSource(src);
    const context = canvas.value?.getContext('2d');
    context?.drawImage(image, 0, 0, width, height.value);
  });
}

function createSvgBlob() {
  // create a blob url from the given svg
  const svgString = new XMLSerializer().serializeToString(svg.value as Node);
  const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  return URL.createObjectURL(svgBlob);
}

function loadedImgWithSource(src: string): Promise<HTMLImageElement> {
  // returns a promise that resolves to an image with the source fully loaded
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.src = src;
  });
}
</script>

<style scoped>
#svg {
  display: none;
}

#pattern-canvas {
  width: 100%;
}
</style>
