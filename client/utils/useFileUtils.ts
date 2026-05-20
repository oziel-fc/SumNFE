export function useFileUtils() {
  const formatSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  const getFileIcon = (file: File): 'xml' | 'pdf' | 'file' => {
    if (file.name.endsWith('.xml')) return 'xml'
    if (file.type === 'application/pdf') return 'pdf'
    return 'file'
  }

  return {
    formatSize,
    getFileIcon,
  }
}
