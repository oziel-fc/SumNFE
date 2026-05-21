<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-[#080d1a]/90 backdrop-blur-md border-b border-blue-900/30 shadow-lg shadow-black/20' : 'bg-transparent'"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2.5 cursor-pointer" @click="scrollTo('hero')">
        <div class="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
          <img src="../../../public/logo.png" alt="Logo SumNFE" class="w-6 h-6">
        </div>
        <span class="text-lg font-semibold tracking-tight">
          <span class="text-white">Sum</span><span class="text-blue-400">NFE</span>
        </span>
      </div>

      <!-- Nav -->
      <nav class="hidden md:flex items-center gap-1">
        <button
          class="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
          @click="scrollTo('como-funciona')"
        >
          Guia
        </button>
        <button
          class="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
          @click="scrollTo('sobre')"
        >
          Sobre
        </button>
        <button
          class="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
        >
          API
        </button>
        <button
          class="px-4 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200"
          @click="scrollTo('footer')"
        >
          Contato
        </button>
      </nav>

      <!-- Mobile menu icon -->
      <button class="md:hidden p-2 text-slate-400 hover:text-white transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </header>
</template>
