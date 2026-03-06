<template>
  <div class="aem-two-cols-layout">
    <AemHeader />

    <HexBackground />

    <div class="twocols-area">
      <!-- Title -->
      <div class="twocols-title" v-if="$slots.title || title">
        <slot name="title">
          <h1>{{ title }}</h1>
        </slot>
      </div>

      <!-- Subtitle -->
      <div class="twocols-subtitle" v-if="$slots.subtitle || subtitle">
        <slot name="subtitle">
          <h2>{{ subtitle }}</h2>
        </slot>
      </div>

      <!-- Content description -->
      <div class="twocols-content-desc" v-if="$slots.content">
        <slot name="content" />
      </div>

      <!-- Two columns -->
      <div class="twocols-grid">
        <div class="twocols-left">
          <slot name="left" />
        </div>
        <div class="twocols-right">
          <slot name="right" />
        </div>
      </div>
    </div>

    <AemFooter :title="footerTitle" />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  footerTitle: { type: String, default: 'Place your cover page title here' },
})
</script>

<style scoped>
.aem-two-cols-layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
}

.twocols-area {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 20px 40px 36px;
  display: flex;
  flex-direction: column;
}

.twocols-title {
  margin-bottom: 4px;
}
.twocols-title :deep(h1) {
  font-size: 2rem;
  font-weight: 800;
  color: #03AD9A;
  margin: 0;
}

.twocols-subtitle {
  border-left: 4px solid #03AD9A;
  padding-left: 12px;
  margin-bottom: 4px;
}
.twocols-subtitle :deep(h2) {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1D275A;
  margin: 0;
}

.twocols-content-desc {
  border-left: 2px solid #e0e0e0;
  padding-left: 14px;
  margin-bottom: 12px;
  font-size: 0.9rem;
  color: #555;
}

.twocols-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  min-height: 0;
}

.twocols-left,
.twocols-right {
  border: 1px dashed #ccc;
  border-radius: 4px;
  padding: 16px;
  font-size: 0.9rem;
  line-height: 1.6;
}
.twocols-left :deep(ul),
.twocols-left :deep(ol),
.twocols-right :deep(ul),
.twocols-right :deep(ol) {
  padding-left: 1.2rem;
}
</style>
