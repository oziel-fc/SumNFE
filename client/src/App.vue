<script setup lang="ts">
import AppHeader from './components/Header/AppHeader.vue'
import HeroSection from './components/Hero/HeroSection.vue'
import UploadSection from './components/Upload/UploadSection.vue'
import HowItWorks from './components/Guide/HowItWorks.vue'
import AboutSection from './components/About/AboutSection.vue'
import AppFooter from './components/Footer/AppFooter.vue'
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
