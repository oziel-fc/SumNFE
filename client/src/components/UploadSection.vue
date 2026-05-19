<script setup lang="ts">
import { ref } from 'vue'
import { uploadFiles } from '../../api/uploadFiles'

const isDragging = ref(false)
const files = ref<File[]>([])
const fileInputRef = ref<HTMLInputElement | null>(null)

function openFileExplorer() {
  fileInputRef.value?.click()
}

function onFileChange(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files) {
    const newFiles = Array.from(input.files)
    files.value = [...files.value, ...newFiles]
  }
}

function onDragOver(event: DragEvent) {
  event.preventDefault()
  isDragging.value = true
}

function onDragLeave() {
  isDragging.value = false
}

function onDrop(event: DragEvent) {
  event.preventDefault()
  isDragging.value = false
  if (event.dataTransfer?.files) {
    const newFiles = Array.from(event.dataTransfer.files).filter(
      f => f.type === 'text/xml' || f.name.endsWith('.xml') || f.type === 'application/pdf'
    )
    files.value = [...files.value, ...newFiles]
  }
}

function removeFile(index: number) {
  files.value = files.value.filter((_, i) => i !== index)
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function getFileIcon(file: File) {
  if (file.name.endsWith('.xml')) return 'xml'
  if (file.type === 'application/pdf') return 'pdf'
  return 'file'
}

async function submitFiles() {
    const data = await uploadFiles(files.value)

    console.log(data)
}
</script>

<template>
  <section id="upload" class="py-24 relative">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none"></div>

    <div class="relative max-w-4xl mx-auto px-6 lg:px-8">
      <!-- Section header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">
          Selecione os arquivos para serem somados
        </h2>
        <p class="text-slate-400">Aceita arquivos <span class="text-blue-400 font-medium">XML</span> e <span class="text-blue-400 font-medium">PDF</span> de notas fiscais</p>
      </div>

      <!-- Upload card -->
      <div class="glass-card rounded-2xl p-8">
        <!-- Drop zone -->
        <div
          class="relative border-2 border-dashed rounded-xl transition-all duration-300 cursor-pointer"
          :class="isDragging
            ? 'border-blue-400 bg-blue-500/10 scale-[1.01]'
            : 'border-slate-700 hover:border-blue-500/50 hover:bg-blue-500/5'"
          @dragover="onDragOver"
          @dragleave="onDragLeave"
          @drop="onDrop"
          @click="openFileExplorer"
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

        <!-- File list -->
        <div v-if="files.length > 0" class="mt-6 space-y-3">
          <div class="flex items-center justify-between mb-4">
            <p class="text-sm font-medium text-slate-300">
              {{ files.length }} arquivo{{ files.length !== 1 ? 's' : '' }} selecionado{{ files.length !== 1 ? 's' : '' }}
            </p>
            <button
              class="text-xs text-slate-500 hover:text-red-400 transition-colors"
              @click.stop="files = []"
            >
              Remover todos
            </button>
          </div>

          <div
            v-for="(file, index) in files"
            :key="index"
            class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 group"
          >
            <!-- Icon -->
            <div
              class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              :class="getFileIcon(file) === 'xml' ? 'bg-blue-500/15' : 'bg-red-500/15'"
            >
              <svg v-if="getFileIcon(file) === 'xml'" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
              </svg>
            </div>

            <!-- File info -->
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">{{ file.name }}</p>
              <p class="text-xs text-slate-500">{{ formatSize(file.size) }}</p>
            </div>

            <!-- Remove -->
            <button
              class="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-red-500/20 text-slate-600 hover:text-red-400 transition-all duration-200"
              @click.stop="removeFile(index)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Submit button -->
        <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <button
            class="flex-1 py-3.5 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 glow-blue hover:scale-[1.01] active:scale-[0.99] disabled:scale-100 disabled:shadow-none flex items-center justify-center gap-2"
            :disabled="files.length === 0"
            @click="submitFiles"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Processar e Somar NF-e
          </button>
          <button
            class="sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 font-medium rounded-xl transition-all duration-200"
            @click="openFileExplorer"
          >
            Adicionar mais
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
