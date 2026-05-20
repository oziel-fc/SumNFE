<script setup lang="ts">
interface Props {
  disabled?: boolean
  loading?: boolean
}

interface Emits {
  (e: 'submit'): void
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  loading: false,
})

defineEmits<Emits>()
</script>

<template>
  <button
    class="flex-1 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 glow-blue hover:scale-[1.01] active:scale-[0.99] disabled:scale-100 disabled:shadow-none flex items-center justify-center gap-2"
    :disabled="disabled || loading"
    @click="$emit('submit')"
  >
    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
    </svg>
    {{ loading ? 'Processando...' : 'Processar e Somar NF-e' }}
  </button>
</template>
