<template>
  <div class="aem-section">
    <!-- Hexagon decorations -->
    <div class="section-hex-tr" aria-hidden="true">
      <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="300,20 360,55 360,125 300,160 240,125 240,55"
          fill="#03AD9A" opacity="0.15" stroke="#03AD9A" stroke-width="2" />
        <polygon points="370,80 400,97 400,131 370,148 340,131 340,97"
          fill="#008192" opacity="0.20" />
        <polygon points="250,100 280,117 280,151 250,168 220,151 220,117"
          fill="none" stroke="#008192" stroke-width="2" opacity="0.3" />
        <polygon points="340,160 360,172 360,196 340,208 320,196 320,172"
          fill="#1D275A" opacity="0.15" />
        <circle cx="240" cy="40" r="3" fill="#03AD9A" opacity="0.4" />
        <circle cx="380" cy="60" r="2" fill="#008192" opacity="0.35" />
      </svg>
    </div>

    <div class="section-hex-bl" aria-hidden="true">
      <svg viewBox="0 0 300 350" xmlns="http://www.w3.org/2000/svg">
        <polygon points="80,180 140,215 140,285 80,320 20,285 20,215"
          fill="#03AD9A" opacity="0.12" stroke="#03AD9A" stroke-width="2" />
        <polygon points="150,250 190,273 190,319 150,342 110,319 110,273"
          fill="none" stroke="#008192" stroke-width="2" opacity="0.25" />
        <polygon points="40,120 65,134 65,163 40,177 15,163 15,134"
          fill="#1D275A" opacity="0.10" />
        <polygon points="100,300 115,309 115,327 100,336 85,327 85,309"
          fill="#064B77" opacity="0.12" />
        <circle cx="160" cy="220" r="3" fill="#008192" opacity="0.3" />
      </svg>
    </div>

    <!-- Thin border frame -->
    <div class="section-frame" aria-hidden="true" />

    <!-- Centered headline -->
    <div class="section-content">
      <slot>
        <h1>HEADLINE</h1>
      </slot>
    </div>

    <!-- Bottom content area -->
    <div class="section-body" v-if="$slots.body">
      <slot name="body" />
    </div>

    <!-- Small copyright -->
    <div class="section-copyright">
      Copyright &copy; 2024 AEM Enersol. All rights reserved. This material contains confidential and proprietary information of AEM Enersol.
    </div>
  </div>
</template>

<style scoped>
.aem-section {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  overflow: hidden;
}

.section-frame {
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 1.5px solid #03AD9A;
  pointer-events: none;
  z-index: 0;
}

.section-hex-tr {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 40%;
  z-index: 1;
}
.section-hex-bl {
  position: absolute;
  bottom: -40px;
  left: -20px;
  width: 30%;
  z-index: 1;
}

.section-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 60px;
  border: 2px dashed #999;
  padding: 20px 80px;
}
.section-content :deep(h1) {
  font-size: 3.5rem;
  font-weight: 900;
  color: #1D275A;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: 2px;
}

.section-body {
  position: relative;
  z-index: 2;
  margin-top: 32px;
  padding: 0 80px;
  text-align: center;
}

.section-copyright {
  position: absolute;
  bottom: 8px;
  right: 20px;
  font-size: 7px;
  color: #888;
  z-index: 2;
}
</style>
