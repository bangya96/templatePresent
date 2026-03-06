<template>
  <div class="hex-bg" aria-hidden="true">
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMax meet">
      <!-- Large hexagon -->
      <polygon points="320,80 380,115 380,185 320,220 260,185 260,115"
        fill="none" stroke="#03AD9A" stroke-width="1" opacity="0.12" />
      <!-- Medium hexagon -->
      <polygon points="350,200 395,225 395,275 350,300 305,275 305,225"
        fill="none" stroke="#008192" stroke-width="1" opacity="0.10" />
      <!-- Small hexagon cluster -->
      <polygon points="280,280 310,297 310,331 280,348 250,331 250,297"
        fill="#03AD9A" opacity="0.05" />
      <polygon points="340,320 370,337 370,371 340,388 310,371 310,337"
        fill="#064B77" opacity="0.06" />
      <!-- Tiny hexagons -->
      <polygon points="300,160 315,168 315,186 300,194 285,186 285,168"
        fill="none" stroke="#28B98F" stroke-width="0.8" opacity="0.15" />
      <polygon points="370,380 385,388 385,406 370,414 355,406 355,388"
        fill="none" stroke="#1D275A" stroke-width="0.8" opacity="0.10" />
      <!-- Decorative dots -->
      <circle cx="260" cy="100" r="3" fill="#03AD9A" opacity="0.15" />
      <circle cx="395" cy="160" r="2" fill="#008192" opacity="0.12" />
      <circle cx="310" cy="260" r="2.5" fill="#064B77" opacity="0.10" />
      <circle cx="250" cy="400" r="2" fill="#28B98F" opacity="0.12" />
      <!-- Circuit lines -->
      <line x1="260" y1="103" x2="280" y2="160" stroke="#03AD9A" stroke-width="0.5" opacity="0.10" />
      <line x1="310" y1="263" x2="340" y2="320" stroke="#064B77" stroke-width="0.5" opacity="0.08" />
      <!-- More large hexagons (faded) -->
      <polygon points="240,400 290,430 290,490 240,520 190,490 190,430"
        fill="none" stroke="#1D275A" stroke-width="1" opacity="0.06" />
    </svg>
  </div>
</template>

<style scoped>
.hex-bg {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 45%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}
.hex-bg svg {
  width: 100%;
  height: 100%;
}
</style>
