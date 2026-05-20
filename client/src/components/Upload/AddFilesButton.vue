<script setup lang="ts">
import { useFileInput } from '../../../utils/useFileInput'

interface Emits {
  (e: 'files-added', files: File[]): void
}

const emit = defineEmits<Emits>()

const handleFilesAdded = (files: File[]) => {
  emit('files-added', files)
}

const { fileInputRef, openFileExplorer, onFileChange } =
  useFileInput(handleFilesAdded)
</script>

<template>
  <button
    class="sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-medium rounded-xl transition-all duration-200"
    @click="openFileExplorer"
  >
    Adicionar mais
  </button>

  <input
    ref="fileInputRef"
    type="file"
    multiple
    class="hidden"
    @change="onFileChange"
  >
</template>