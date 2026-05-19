<script setup lang="ts">
const features = [
  {
    title: 'Leitura inteligente de NF-e',
    description: 'Extrai automaticamente os valores totais de arquivos XML e PDF de notas fiscais eletrônicas.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
  },
  {
    title: 'Automação de tarefas repetitivas',
    description: 'Elimine o trabalho manual de conferência e soma de notas, economizando horas de trabalho.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  },
  {
    title: 'Interface simples e rápida',
    description: 'Design focado em produtividade, sem curva de aprendizado. Arraste, solte e obtenha resultados.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3l14 9-14 9V3z"/></svg>`,
  },
  {
    title: 'Foco em produtividade',
    description: 'Desenvolvido para contadores, gestores e empresas que precisam agilizar o processo de conferência fiscal.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`,
  },
]
</script>

<template>
  <section id="sobre" class="py-24 relative">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left: Text -->
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Sobre o projeto
          </div>
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            Simplifique a conferência de <span class="text-gradient">notas fiscais</span>
          </h2>
          <p class="text-slate-400 leading-relaxed mb-6">
            O SumNFE nasceu da necessidade de automatizar uma tarefa repetitiva e propensa a erros: a soma manual de valores de notas fiscais eletrônicas.
          </p>
          <p class="text-slate-400 leading-relaxed mb-8">
            Com suporte a arquivos XML nativos da NF-e e PDFs do DANFe, o sistema extrai e soma os valores automaticamente, entregando resultados precisos em segundos.
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-2">
            <span class="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 border border-slate-700 text-slate-300">XML NF-e</span>
            <span class="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 border border-slate-700 text-slate-300">PDF DANFe</span>
            <span class="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Python API</span>
            <span class="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 border border-slate-700 text-slate-300">Vue 3</span>
            <span class="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800 border border-slate-700 text-slate-300">TypeScript</span>
          </div>
        </div>

        <!-- Right: Feature cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="glass-card rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 group"
          >
            <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-300">
              <span class="w-5 h-5" v-html="feature.icon"></span>
            </div>
            <h3 class="text-sm font-semibold text-white mb-2">{{ feature.title }}</h3>
            <p class="text-slate-500 text-xs leading-relaxed">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
