<template>
  <div class="aem-cover">
    <!-- Decorative hexagons (left side) -->
    <div class="cover-hex-decoration" aria-hidden="true">
      <svg viewBox="0 0 480 580" xmlns="http://www.w3.org/2000/svg">
        <!-- Large hexagons with thick teal borders -->
        <polygon points="160,120 230,160 230,240 160,280 90,240 90,160"
          fill="white" stroke="#03AD9A" stroke-width="3" />
        <polygon points="80,260 150,300 150,380 80,420 10,380 10,300"
          fill="white" stroke="#03AD9A" stroke-width="3" />
        <polygon points="240,260 310,300 310,380 240,420 170,380 170,300"
          fill="white" stroke="#008192" stroke-width="3" />
        <polygon points="160,400 230,440 230,520 160,560 90,520 90,440"
          fill="white" stroke="#03AD9A" stroke-width="3" />

        <!-- Small decorative hexagons -->
        <polygon points="280,100 310,117 310,151 280,168 250,151 250,117"
          fill="none" stroke="#03AD9A" stroke-width="1.5" opacity="0.4" />
        <polygon points="320,180 340,192 340,216 320,228 300,216 300,192"
          fill="#03AD9A" opacity="0.15" />
        <polygon points="40,140 60,152 60,176 40,188 20,176 20,152"
          fill="#008192" opacity="0.12" />

        <!-- Circuit/connection lines -->
        <circle cx="280" cy="80" r="3" fill="#03AD9A" opacity="0.5" />
        <line x1="230" y1="160" x2="250" y2="117" stroke="#03AD9A" stroke-width="0.8" opacity="0.3" />
        <circle cx="340" cy="260" r="2.5" fill="#008192" opacity="0.4" />
        <line x1="310" y1="300" x2="340" y2="260" stroke="#008192" stroke-width="0.8" opacity="0.3" />
        <circle cx="160" cy="100" r="2" fill="#28B98F" opacity="0.4" />
        <line x1="160" y1="100" x2="160" y2="120" stroke="#28B98F" stroke-width="0.8" opacity="0.3" />
      </svg>
    </div>

    <!-- Content (right side) -->
    <div class="cover-content">
      <!-- Logo -->
      <div class="cover-logo">
        <img :src="'/logo.svg'" alt="AEM Enersol" />
        <div class="cover-logo-tagline">
          <span>Bringing Future</span>
          <span>Through Innovation</span>
        </div>
      </div>

      <!-- Title -->
      <div class="cover-title">
        <slot name="title">
          <h1>{{ $slidev.configs.title || 'Presentation Title' }}</h1>
        </slot>
      </div>

      <!-- Subtitle -->
      <div class="cover-subtitle">
        <slot name="subtitle" />
      </div>

      <!-- Prepared By -->
      <div class="cover-author" v-if="$slots.author || $slots.default">
        <div class="cover-label">Prepared By:</div>
        <div class="cover-author-content">
          <slot name="author">
            <slot />
          </slot>
        </div>
      </div>

      <!-- Prepared For -->
      <div class="cover-client" v-if="$slots.client">
        <div class="cover-label cover-label-right">Prepared For:</div>
        <div class="cover-client-content">
          <slot name="client" />
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="cover-footer">
      Copyright &copy; 2024 AEM Enersol. All rights reserved. This material contains confidential and proprietary information of AEM Enersol.
    </div>
  </div>
</template>

<style scoped>
.aem-cover {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
  background: white;
}

.cover-hex-decoration {
  position: absolute;
  left: -40px;
  top: -20px;
  width: 45%;
  height: 100%;
  z-index: 1;
}
.cover-hex-decoration svg {
  width: 100%;
  height: 100%;
}

.cover-content {
  position: relative;
  z-index: 2;
  margin-left: 42%;
  padding: 40px 40px 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
}

.cover-logo {
  position: absolute;
  top: 24px;
  right: 32px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.cover-logo img {
  height: 48px;
  width: auto;
}
.cover-logo-tagline {
  display: flex;
  flex-direction: column;
  font-size: 11px;
  font-weight: 600;
  color: #1D275A;
  line-height: 1.3;
  border-left: 2px solid #03AD9A;
  padding-left: 8px;
}

.cover-title {
  margin-bottom: 16px;
}
.cover-title h1,
.cover-title :deep(h1) {
  font-size: 3rem;
  font-weight: 900;
  color: #03AD9A;
  line-height: 1.1;
  margin: 0;
}

.cover-subtitle {
  margin-bottom: 24px;
}
.cover-subtitle :deep(p),
.cover-subtitle :deep(h2) {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1D275A;
  margin: 0;
}
.cover-subtitle :deep(h2)::before {
  content: '➤ ';
  color: #03AD9A;
}

.cover-label {
  font-weight: 800;
  font-size: 0.85rem;
  color: #1D275A;
  text-decoration: underline;
  margin-bottom: 4px;
}
.cover-label-right {
  text-align: right;
}

.cover-author {
  margin-bottom: 20px;
  border-left: 3px solid #ccc;
  padding-left: 12px;
}
.cover-author-content {
  font-size: 0.95rem;
  color: #333;
}

.cover-client {
  align-self: flex-end;
}
.cover-client-content {
  display: flex;
  gap: 16px;
  align-items: center;
}
.cover-client-content :deep(img) {
  height: 40px;
  width: auto;
}

.cover-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to right, #03AD9A, #008192);
  color: white;
  font-size: 8px;
  padding: 6px 20px;
  text-align: center;
  z-index: 10;
}
</style>
