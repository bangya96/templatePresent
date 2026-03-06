<template>
  <div class="aem-footer">
    <img :src="'/bottom.png'" alt="" class="aem-footer-img" />
    <div class="aem-footer-overlay">
      <div class="aem-footer-title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="aem-footer-url">
        <a href="https://www.aemenersol.com" target="_blank">www.aemenersol.com</a>
      </div>
      <div class="aem-footer-copyright">
        Copyright &copy; {{ year }} AEM Enersol. All rights reserved.
      </div>
      <div class="aem-footer-page">
        {{ $slidev?.nav?.currentPage }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Place your cover page title here' },
  year: { type: [String, Number], default: 2024 },
})
</script>

<style scoped>
.aem-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 28px;
  z-index: 10;
}
.aem-footer-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 28px;
  object-fit: cover;
  object-position: bottom;
}
.aem-footer-overlay {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: stretch;
  height: 100%;
  font-size: 10px;
}
.aem-footer-title {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: white;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.aem-footer-url {
  display: flex;
  align-items: center;
  padding: 0 20px;
}
.aem-footer-url a {
  color: white;
  text-decoration: underline;
  font-weight: 500;
}
.aem-footer-copyright {
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: rgba(255,255,255,0.9);
  white-space: nowrap;
}
.aem-footer-page {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  color: white;
  font-weight: 700;
  font-size: 11px;
}
</style>
