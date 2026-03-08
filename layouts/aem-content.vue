<template>
  <div class="aem-content-layout">
    <AemHeader />

    <HexBackground />

    <div class="content-area">
      <!-- Title -->
      <div class="content-title" v-if="$slots.title || title">
        <slot name="title">
          <h1>{{ title }}</h1>
        </slot>
      </div>

      <!-- Subtitle -->
      <div class="content-subtitle" v-if="$slots.subtitle || subtitle">
        <slot name="subtitle">
          <h2>{{ subtitle }}</h2>
        </slot>
      </div>

      <!-- Main content -->
      <div class="content-body">
        <slot />
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
.aem-content-layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
}

.content-area {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 20px 40px 36px;
  display: flex;
  flex-direction: column;
}

.content-title {
  margin-bottom: 4px;
}
.content-title :deep(h1) {
  font-size: 2rem;
  font-weight: 800;
  color: #03AD9A;
  margin: 0;
}

.content-subtitle {
  border-left: 4px solid #03AD9A;
  padding-left: 12px;
  margin-bottom: 8px;
}
.content-subtitle :deep(h2) {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1D275A;
  margin: 0;
}

.content-body {
  flex: 1;
  border-left: 2px solid #e0e0e0;
  padding-left: 14px;
  font-size: 0.95rem;
  line-height: 1.6;
}
.content-body :deep(ul),
.content-body :deep(ol) {
  padding-left: 1.2rem;
}
.content-body :deep(li) {
  margin-bottom: 6px;
}
</style>
