<template>
  <div class="aem-four-cols-layout">
    <AemHeader />

    <HexBackground />

    <div class="fourcols-area">
      <!-- Title -->
      <div class="fourcols-title" v-if="$slots.title || title">
        <slot name="title">
          <h1>{{ title }}</h1>
        </slot>
      </div>

      <!-- Subtitle -->
      <div class="fourcols-subtitle" v-if="$slots.subtitle || subtitle">
        <slot name="subtitle">
          <h2>{{ subtitle }}</h2>
        </slot>
      </div>

      <!-- Content description -->
      <div class="fourcols-content-desc" v-if="$slots.content">
        <slot name="content" />
      </div>

      <!-- Four columns -->
      <div class="fourcols-grid">
        <div class="fourcols-item">
          <slot name="col1" />
        </div>
        <div class="fourcols-item">
          <slot name="col2" />
        </div>
        <div class="fourcols-item">
          <slot name="col3" />
        </div>
        <div class="fourcols-item">
          <slot name="col4" />
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
  footerTitle: { type: String, default: '' },
})
</script>

<style scoped>
.aem-four-cols-layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
}

.fourcols-area {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 20px 40px 36px;
  display: flex;
  flex-direction: column;
}

.fourcols-title {
  margin-bottom: 4px;
}
.fourcols-title :deep(h1) {
  font-size: 2rem;
  font-weight: 800;
  color: #03AD9A;
  margin: 0;
}

.fourcols-subtitle {
  border-left: 4px solid #03AD9A;
  padding-left: 12px;
  margin-bottom: 4px;
}
.fourcols-subtitle :deep(h2) {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1D275A;
  margin: 0;
}

.fourcols-content-desc {
  border-left: 2px solid #e0e0e0;
  padding-left: 14px;
  margin-bottom: 12px;
  font-size: 0.9rem;
  color: #555;
}

.fourcols-grid {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  min-height: 0;
}

.fourcols-item {
  border: 1px dashed #ddd;
  border-radius: 8px;
  padding: 16px;
  font-size: 0.85rem;
  line-height: 1.5;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.fourcols-item :deep(img) {
  max-width: 100%;
  border-radius: 6px;
  margin-bottom: 10px;
}
.fourcols-item :deep(h3) {
  font-size: 0.9rem;
  color: #1D275A;
  margin: 8px 0 4px;
}
.fourcols-item :deep(p) {
  font-size: 0.75rem;
  color: #555;
  margin: 4px 0 0;
  line-height: 1.4;
}
</style>
