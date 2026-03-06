<template>
  <div class="aem-end">
    <!-- Top section: logo + hexagons -->
    <div class="end-top">
      <div class="end-logo">
        <img :src="'/logo.svg'" alt="AEM Enersol" />
      </div>

      <!-- Hexagon decorations -->
      <div class="end-hex-decoration" aria-hidden="true">
        <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
          <polygon points="80,30 120,53 120,99 80,122 40,99 40,53"
            fill="none" stroke="#03AD9A" stroke-width="1.5" opacity="0.25" />
          <polygon points="140,60 165,74 165,103 140,117 115,103 115,74"
            fill="none" stroke="#008192" stroke-width="1" opacity="0.20" />
          <polygon points="50,110 70,122 70,145 50,157 30,145 30,122"
            fill="none" stroke="#03AD9A" stroke-width="1" opacity="0.15" />
          <circle cx="170" cy="50" r="3" fill="#03AD9A" opacity="0.3" />
          <circle cx="100" cy="15" r="2" fill="#008192" opacity="0.25" />
          <line x1="120" y1="53" x2="140" y2="60" stroke="#03AD9A" stroke-width="0.6" opacity="0.2" />
        </svg>
      </div>
    </div>

    <!-- Gradient band with thank you text -->
    <div class="end-gradient-band">
      <div class="end-accent-top" />
      <div class="end-main-band">
        <slot>
          <h1>THANK YOU</h1>
        </slot>
      </div>
      <div class="end-accent-bottom" />
    </div>

    <!-- Bottom section: contact info -->
    <div class="end-bottom">
      <slot name="contact" />
    </div>
  </div>
</template>

<style scoped>
.aem-end {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
}

.end-top {
  flex: 1;
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 30px 40px;
}

.end-logo img {
  height: 64px;
  width: auto;
}

.end-hex-decoration {
  position: absolute;
  top: 0;
  left: 40px;
  width: 280px;
  z-index: 0;
}

.end-gradient-band {
  position: relative;
}

.end-accent-top {
  height: 6px;
  background: linear-gradient(to right, #064B77, #1D275A, #064B77);
}

.end-main-band {
  padding: 28px 40px;
  background: linear-gradient(to right, #03AD9A, #008192, #064B77, #1D275A);
  display: flex;
  align-items: center;
  justify-content: center;
}

.end-main-band :deep(h1) {
  color: white;
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin: 0;
}

.end-accent-bottom {
  height: 6px;
  background: linear-gradient(to right, #03AD9A, #064B77);
}

.end-bottom {
  flex: 1;
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #555;
}
.end-bottom :deep(p) {
  margin: 4px 0;
}
.end-bottom :deep(a) {
  color: #03AD9A;
}
</style>
