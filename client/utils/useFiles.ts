import { ref, computed } from 'vue'

export function useFiles() {
  const files = ref<File[]>([])

  const addFiles = (newFiles: File[]): void => {
    files.value = [...files.value, ...newFiles]
  }

  const removeFile = (index: number): void => {
    files.value = files.value.filter((_, i) => i !== index)
  }

  const clearFiles = (): void => {
    files.value = []
  }

  const hasFiles = computed(() => files.value.length > 0)

  const fileCount = computed(() => files.value.length)

  return {
    files,
    addFiles,
    removeFile,
    clearFiles,
    hasFiles,
    fileCount,
  }
}
