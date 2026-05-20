<script setup lang="ts">
import { useFileDrop } from '../../../utils/useFileDrop'
import { useFileInput } from '../../../utils/useFileInput'

interface Emits {
  (e: 'files-added', files: File[]): void
}

const emit = defineEmits<Emits>()

const handleFilesAdded = (files: File[]) => {
  emit('files-added', files)
}

const { isDragging, onDragOver, onDragLeave, onDrop } = useFileDrop(handleFilesAdded)
const { fileInputRef, openFileExplorer, onFileChange } = useFileInput(handleFilesAdded)

const onDropZoneClick = () => {
  openFileExplorer()
}

const handleDrop = (event: DragEvent) => {
  onDrop(event)
}
</script>

<template>
  <div
    class="relative border-2 border-dashed rounded-xl transition-all duration-300 cursor-pointer"
    :class="isDragging
      ? 'border-blue-400 bg-blue-500/10 scale-[1.01]'
      : 'border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/5'"
    @dragover="onDragOver"
    @dragleave="onDragLeave"
    @drop="handleDrop"
    @click="onDropZoneClick"
  >
    <input
      ref="fileInputRef"
      type="file"
      multiple
      accept=".xml,.pdf,application/pdf,text/xml,application/xml"
      class="hidden"
      @change="onFileChange"
    />

    <div class="flex flex-col items-center justify-center py-14 px-6 text-center">
      <!-- Upload icon -->
      <div
        class="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
        :class="isDragging ? 'bg-blue-500/30 scale-110' : 'bg-blue-500/15'"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
        </svg>
      </div>

      <p class="text-lg font-semibold text-white mb-2">
        {{ isDragging ? 'Solte os arquivos aqui' : 'Arraste os arquivos ou clique para selecionar' }}
      </p>
      <p class="text-slate-500 text-sm mb-6">Suporta XML (NF-e) e PDF (DANFe)</p>

      <!-- File type badges -->
      <div class="flex gap-3">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
          </svg>
          XML
        </span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          </svg>
          PDF
        </span>
      </div>
    </div>
  </div>
</template>
