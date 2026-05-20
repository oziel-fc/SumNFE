import { ref } from 'vue'

export function useFileInput(onFilesSelected: (files: File[]) => void) {
  const fileInputRef = ref<HTMLInputElement | null>(null)

  const openFileExplorer = (): void => {
    fileInputRef.value?.click()
  }

  const onFileChange = (event: Event): void => {
    const input = event.target as HTMLInputElement
    if (input.files) {
      const newFiles = Array.from(input.files)
      onFilesSelected(newFiles)
      // Reset input para permitir selecionar o mesmo arquivo novamente
      input.value = ''
    }
  }

  return {
    fileInputRef,
    openFileExplorer,
    onFileChange,
  }
}
