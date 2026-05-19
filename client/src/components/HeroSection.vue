<script setup lang="ts">
function scrollToUpload() {
  const el = window.document.getElementById('upload')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

function scrollToHowItWorks() {
  const el = window.document.getElementById('como-funciona')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center bg-radial-blue overflow-hidden pt-16">
    <!-- Background grid -->
    <div class="absolute inset-0 opacity-[0.03]"
      style="background-image: linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px); background-size: 48px 48px;">
    </div>

    <!-- Glow orb -->
    <div class="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Text -->
        <div class="animate-slide-up">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
            Processamento automático de notas fiscais
          </div>

          <!-- Heading -->
          <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-white">
            Somador de <span class="text-gradient">NF-e</span>
          </h1>

          <!-- Description -->
          <p class="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
            Envie arquivos PDF e XML de notas fiscais para calcular valores automaticamente, organizar informações e simplificar conferências em poucos segundos.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-4">
            <button
              @click="scrollToUpload"
              class="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 glow-blue hover:scale-[1.02] active:scale-[0.98]"
            >
              Começar agora
            </button>
            <button
              @click="scrollToHowItWorks"
              class="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 font-medium rounded-xl transition-all duration-200"
            >
              Como funciona
            </button>
          </div>

          <!-- Stats -->
          <div class="flex gap-8 mt-12 pt-8 border-t border-white/5">
            <div>
              <p class="text-2xl font-bold text-white">XML</p>
              <p class="text-xs text-slate-500 mt-0.5">NF-e nativo</p>
            </div>
            <div class="w-px bg-white/5"></div>
            <div>
              <p class="text-2xl font-bold text-white">PDF</p>
              <p class="text-xs text-slate-500 mt-0.5">DANFe suportado</p>
            </div>
            <div class="w-px bg-white/5"></div>
            <div>
              <p class="text-2xl font-bold text-white">100%</p>
              <p class="text-xs text-slate-500 mt-0.5">Automatizado</p>
            </div>
          </div>
        </div>

        <!-- Right: Illustration -->
        <div class="hidden lg:flex justify-center items-center animate-float">
          <div class="relative w-full max-w-lg">
            <!-- Main card -->
            <div class="relative glass-card rounded-2xl p-8 glow-blue">
              <!-- Floating document cards -->
              <div class="absolute -top-8 -right-6 glass rounded-xl p-3 shadow-xl border-blue-500/20 rotate-6">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-medium text-white">NF-001.pdf</p>
                    <p class="text-xs text-slate-500">R$ 1.250,00</p>
                  </div>
                </div>
              </div>

              <div class="absolute -top-4 left-4 glass rounded-xl p-3 shadow-xl -rotate-3">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                  <div>
                    <p class="text-xs font-medium text-white">NF-002.xml</p>
                    <p class="text-xs text-slate-500">R$ 3.780,00</p>
                  </div>
                </div>
              </div>

              <!-- Calculator icon center -->
              <div class="flex flex-col items-center py-8">
                <div class="w-24 h-24 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-6">
                  <svg class="w-12 h-12 text-blue-400" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="6" width="36" height="36" rx="6" stroke="currentColor" stroke-width="2.5"/>
                    <rect x="12" y="12" width="10" height="6" rx="1.5" fill="currentColor" opacity="0.6"/>
                    <rect x="26" y="12" width="10" height="6" rx="1.5" fill="currentColor" opacity="0.6"/>
                    <rect x="12" y="22" width="10" height="6" rx="1.5" fill="currentColor" opacity="0.4"/>
                    <rect x="26" y="22" width="10" height="6" rx="1.5" fill="currentColor" opacity="0.4"/>
                    <rect x="12" y="32" width="24" height="4" rx="1.5" fill="currentColor"/>
                  </svg>
                </div>

                <div class="text-center">
                  <p class="text-slate-400 text-sm mb-2">Total calculado</p>
                  <p class="text-3xl font-bold text-white">R$ 5.030,<span class="text-blue-400">00</span></p>
                </div>
              </div>

              <!-- Progress bar -->
              <div class="mt-4 space-y-2">
                <div class="flex justify-between text-xs text-slate-500">
                  <span>Processando arquivos...</span>
                  <span class="text-blue-400">2/2</span>
                </div>
                <div class="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div class="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full w-full"></div>
                </div>
              </div>
            </div>

            <!-- Bottom floating tag -->
            <div class="absolute -bottom-5 right-8 glass rounded-xl px-4 py-2.5 shadow-xl">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <p class="text-xs text-white font-medium">Pronto para uso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7"/>
      </svg>
    </div>
  </section>
</template>
