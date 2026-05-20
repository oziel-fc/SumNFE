import { ref } from 'vue'

export function useFileDrop(onFilesDropped: (files: File[]) => void) {
  const isDragging = ref(false)

  const onDragOver = (event: DragEvent): void => {
    event.preventDefault()
    isDragging.value = true
  }

  const onDragLeave = (): void => {
    isDragging.value = false
  }

  const onDrop = (event: DragEvent): void => {
    event.preventDefault()
    isDragging.value = false

    if (event.dataTransfer?.files) {
      const newFiles = Array.from(event.dataTransfer.files).filter(
        f => f.type === 'text/xml' || f.name.endsWith('.xml') || f.type === 'application/pdf'
      )
      onFilesDropped(newFiles)
    }
  }

  return {
    isDragging,
    onDragOver,
    onDragLeave,
    onDrop,
  }
}
