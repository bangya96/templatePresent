import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'aem-gradient-bg': 'bg-gradient-to-r from-[#8BC977] via-[#03AD9A] to-[#1D275A]',
    'aem-gradient-text': 'bg-gradient-to-r from-[#03AD9A] to-[#1D275A] bg-clip-text text-transparent',
    'aem-title': 'font-bold text-[#03AD9A]',
    'aem-subtitle': 'font-bold text-[#1D275A]',
  },
  theme: {
    colors: {
      aem: {
        'green-light': '#8BC977',
        'green': '#63BF81',
        'teal-light': '#28B98F',
        'teal': '#03AD9A',
        'teal-dark': '#008192',
        'blue-dark': '#064B77',
        'navy': '#1D275A',
      },
    },
  },
})
