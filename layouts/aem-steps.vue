<template>
  <div class="aem-steps-layout">
    <AemHeader />

    <HexBackground />

    <div class="steps-area">
      <!-- Title -->
      <div class="steps-title">
        <slot name="title">
          <h1>{{ title }}</h1>
        </slot>
      </div>

      <!-- Steps container -->
      <div class="steps-container">
        <slot />
      </div>
    </div>

    <AemFooter :title="footerTitle" />
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  footerTitle: { type: String, default: '' },
})
</script>

<style scoped>
.aem-steps-layout {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: white;
  overflow: hidden;
}

.steps-area {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 20px 40px 36px;
  display: flex;
  flex-direction: column;
}

.steps-title {
  margin-bottom: 16px;
}
.steps-title :deep(h1) {
  font-size: 2rem;
  font-weight: 800;
  color: #03AD9A;
  margin: 0;
}

.steps-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  padding: 0 20px;
}

/* Style for step items - users use StepCard component or plain HTML */
.steps-container :deep(.step-item) {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 14px 20px;
  border-radius: 8px;
  border-left: 5px solid var(--step-color, #03AD9A);
  background: linear-gradient(135deg, rgba(3,173,154,0.04), rgba(29,39,90,0.02));
}

.steps-container :deep(.step-number) {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 800;
  color: white;
  background: var(--step-color, #03AD9A);
  flex-shrink: 0;
}

.steps-container :deep(.step-content) {
  flex: 1;
}

.steps-container :deep(.step-content h3) {
  font-size: 1rem;
  font-weight: 700;
  color: #1D275A;
  margin: 0 0 4px;
}

.steps-container :deep(.step-content p) {
  font-size: 0.85rem;
  color: #555;
  margin: 0;
  line-height: 1.5;
}

.steps-container :deep(.step-icon) {
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
  font-size: 1.5rem;
}
</style>
