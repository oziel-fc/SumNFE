<script setup lang="ts">
import { useFileUtils } from '../../../utils/useFileUtils'

interface Props {
  files: File[]
}

interface Emits {
  (e: 'remove-file', index: number): void
  (e: 'clear-files'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const { formatSize, getFileIcon } = useFileUtils()

const removeFile = (index: number) => {
  emit('remove-file', index)
}

const clearAll = () => {
  emit('clear-files')
}
</script>

<template>
  <div v-if="files.length > 0" class="mt-6 space-y-3">
    <div class="flex items-center justify-between mb-4">
      <p class="text-sm font-medium text-slate-300">
        {{ files.length }} arquivo{{ files.length !== 1 ? 's' : '' }} selecionado{{ files.length !== 1 ? 's' : '' }}
      </p>
      <button
        class="text-xs text-slate-500 hover:text-red-400 transition-colors"
        @click="clearAll"
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

      <!-- Remove button -->
      <button
        class="opacity-0 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-red-500/20 text-slate-600 hover:text-red-400 transition-all duration-200"
        @click="removeFile(index)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </div>
</template>
