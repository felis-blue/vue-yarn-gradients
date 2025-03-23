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

    <ActionButtons :png-url="pngUrl" :svg-url="svgUrl" @copy-pattern="copyPattern" @update-pattern="updatePattern" />
  </section>
</template>

<script setup lang="ts">
import { findColor, noColor, type Color } from '@/data/colors';
import { nextTick, onMounted, ref, watch, type Ref } from 'vue';
import ActionButtons from './ActionButtons.vue';
import ColorPattern from './ColorPattern.vue';
import ColorTemplates from './ColorTemplates.vue';
import ColorWay from './ColorWay.vue';
import SelectInput from './form/SelectInput.vue';
import TextInput from './form/TextInput.vue';

export interface ColorSegment {
  focus: boolean;
  color: Color;
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
      row.push({ focus: false, color: noColor });
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

function copyPattern() {
  let patternCode = `${segmentCount.value}-${threadCount.value}`;
  let streak: number, lastColor: Color, currentColor: Color;
  for (let thread = 0; thread < threadCount.value; thread++) {
    patternCode += '|';
    streak = 0;
    lastColor = segments.value[thread][0].color;
    for (let segment = 0; segment < segmentCount.value; segment++) {
      currentColor = segments.value[thread][segment].color;
      if (currentColor != lastColor) {
        patternCode += `${streak}x${lastColor.colorNumber}-`;
        streak = 0;
        lastColor = currentColor;
      }
      streak++;
    }
    patternCode += `${streak}x${lastColor.colorNumber}`;
  }
  navigator.clipboard.writeText(patternCode);
}

function updatePattern(newPattern: string) {
  // Expected pattern: <segment-count>-<thread-count>|<thread>|<thread|...
  // where <thread> is: <number-of-segments>x<color-number>-<number-of-segments>x<color-number>-...
  try {
    const patternParts = newPattern.split('|');

    // read segment count and thread count
    let segmentAndThreadCount = patternParts
      .shift()
      ?.split('-')
      .map((s) => parseInt(s));

    // validate segment count and thread count
    validate(
      segmentAndThreadCount?.length === 2 && segmentAndThreadCount[0] && segmentAndThreadCount[1],
      'First part should be <segment count>-<thread count>.',
    );

    // write segment count and thread count
    segmentAndThreadCount = segmentAndThreadCount as number[];
    segmentCount.value = segmentAndThreadCount[0];
    threadCount.value = segmentAndThreadCount[1];

    // validate thread pattern count
    validate(patternParts.length === threadCount.value, 'Not enough thread patterns.');

    nextTick(() => {
      try {
        let threadPattern: string[],
          segment: number,
          segmentLengthAndColor: string[],
          segmentLength: number,
          color: Color | undefined;

        // process thread patterns
        patternParts.forEach((threadPart, thread) => {
          // split into segment parts
          threadPattern = threadPart.split('-');
          segment = 0;
          threadPattern.forEach((segmentPart) => {
            // split into segment length and color
            segmentLengthAndColor = segmentPart.split('x');

            // validate segment part
            validate(
              segmentLengthAndColor.length === 2,
              `Invalid segment part '${segmentPart}', expected <number of segments>x<color number>.`,
            );

            // parse segment lenth and find color
            segmentLength = parseInt(segmentLengthAndColor[0]);
            color = findColor(segmentLengthAndColor[1]) as Color;

            // validate segment length and color
            validate(segmentLength, `Invalid segment length '${segmentLengthAndColor[0]}', should be an integer.`);
            validate(color, `Invalid color number '${segmentLengthAndColor[1]}'.`);

            // set color for all segments in this part
            for (let i = segment; i < segment + segmentLength; i++) {
              segments.value[thread][i].color = color;
            }
            segment += segmentLength;
          });

          // validate total segment length
          validate(segment === segmentCount.value, `Not enough segments in thread ${thread}.`);
        });
      } catch (e) {
        console.error(e);
        alert(e);
        setupSegments();
      }
    });
  } catch (e) {
    console.error(e);
    alert(e);
    setupSegments();
  }
}

function toggleFocus(segment: ColorSegment, toggle?: boolean) {
  if (toggle !== undefined) {
    segment.focus = toggle;
  } else {
    segment.focus = !segment.focus;
  }
  return segment.focus;
}

function validate(expr: unknown, msg: string) {
  if (!expr) throw new Error(`Invalid pattern: ${msg}`);
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
