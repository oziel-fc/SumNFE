<script setup lang="ts">
const steps = [
  {
    number: '01',
    title: 'Envie os arquivos',
    description: 'Selecione ou arraste seus arquivos XML (NF-e) ou PDF (DANFe) para a área de upload.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/></svg>`,
    color: 'blue',
  },
  {
    number: '02',
    title: 'Processamento automático',
    description: 'O sistema analisa e extrai automaticamente os valores de cada nota fiscal enviada.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    color: 'cyan',
  },
  {
    number: '03',
    title: 'Receba os resultados',
    description: 'Visualize o total somado e as informações organizadas de todas as notas fiscais.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
    color: 'blue',
  },
]
</script>

<template>
  <section id="como-funciona" class="py-24 relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent pointer-events-none"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
          </svg>
          Simples e rápido
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Como funciona</h2>
        <p class="text-slate-400 max-w-xl mx-auto">
          Em apenas três etapas você obtém o total das suas notas fiscais, sem complicações.
        </p>
      </div>

      <!-- Steps -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <!-- Connector line (desktop) -->
        <div class="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" style="left: 20%; right: 20%;"></div>

        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative glass-card rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 group"
        >
          <!-- Step number -->
          <div class="absolute -top-3 left-6">
            <span class="inline-block px-2.5 py-0.5 text-xs font-bold rounded-md bg-blue-600/30 border border-blue-500/40 text-blue-300">
              {{ step.number }}
            </span>
          </div>

          <!-- Icon -->
          <div class="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-5 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-300 mt-2">
            <span class="w-6 h-6" v-html="step.icon"></span>
          </div>

          <h3 class="text-lg font-semibold text-white mb-3">{{ step.title }}</h3>
          <p class="text-slate-400 text-sm leading-relaxed">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
