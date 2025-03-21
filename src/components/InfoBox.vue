<template>
  <section class="info">
    <h2>How to use</h2>
    <ul>
      <li>Enter the number of segments and select the number of threads to use.</li>
      <li>The color options and names are based on the TVU Ocean yarn.</li>
      <li>The yarn is split into segments, each row of segments in the colorway corresponds to one thread.</li>
      <li>Select and color one or multiple segments by clicking on them, then clicking on the desired color.</li>
      <li>Shift-click a segment to select all segments of the same color in that row up to the selected segment.</li>
      <li>Your color selection will automatically be turned into a color swatch.</li>
      <li>Download the swatch as an SVG or PNG via the corresponding buttons.</li>
    </ul>
  </section>
</template>

<style scoped>
.info {
  max-width: 720px;
  margin-inline: auto;

  padding: 1.5rem;
  margin-block-end: 1.5rem;

  border-radius: 0.5rem;
  background-color: var(--color-background-accent);
  box-shadow: 1px 1px 4px -1px var(--color-shadow);
}
</style>
