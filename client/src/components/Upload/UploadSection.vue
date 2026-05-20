<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useFiles } from '../../../utils/useFiles'
import { useFileSubmit } from '../../../utils/useFileSubmit'
import DropZone from './DropZone.vue'
import FileList from './FileList.vue'
import SubmitButton from './SubmitButton.vue'
import AddFilesButton from './AddFilesButton.vue'

const { files, addFiles, removeFile, clearFiles } = useFiles()
const { isSubmitting, submitFiles } = useFileSubmit()

const handleFilesAdded = (newFiles: File[]) => {
  addFiles(newFiles)
}

const handleRemoveFile = (index: number) => {
  removeFile(index)
}

const handleClearFiles = () => {
  clearFiles()
}


const handleSubmit = async () => {
  await submitFiles(files.value)
}

watchEffect(() => {
  console.log(files.value)
})
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
        <DropZone v-if="files.length <= 0" @files-added="handleFilesAdded"/>

        <!-- File list -->
        <FileList
          :files="files"
          @remove-file="handleRemoveFile"
          @clear-files="handleClearFiles"
        />

        <!-- Submit area -->
        <div class="mt-8 flex flex-col sm:flex-row gap-3">
          <SubmitButton
            :disabled="files.length === 0"
            :loading="isSubmitting"
            @submit="handleSubmit"
          />
          <AddFilesButton @files-added="handleFilesAdded" />
        </div>
      </div>
    </div>
  </section>
</template>
