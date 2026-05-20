<script setup lang="ts">
interface Emits {
  (e: 'click'): void
}

defineEmits<Emits>()
</script>

<template>
  <button
    class="sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-medium rounded-xl transition-all duration-200"
    @click="$emit('click')"
  >
    Adicionar mais
  </button>
</template>
