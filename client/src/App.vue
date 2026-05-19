<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import UploadSection from './components/UploadSection.vue'
import HowItWorks from './components/HowItWorks.vue'
import AboutSection from './components/AboutSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-[#080d1a] text-slate-200">
    <AppHeader />
    <main>
      <HeroSection />
      <UploadSection />
      <HowItWorks />
      <AboutSection />
    </main>
    <AppFooter />
  </div>
</template>
