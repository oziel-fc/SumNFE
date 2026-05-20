import { ref } from 'vue'
import { uploadFiles } from '../utils/uploadFiles'

export function useFileSubmit() {
  const isSubmitting = ref(false)

  const submitFiles = async (files: File[]): Promise<any> => {
    if (!files.length) return

    isSubmitting.value = true

    try {
      const response = await uploadFiles(files)

      console.log('Resposta da API:', response)

      return response
    } catch (error) {
      console.error('Erro ao enviar arquivos:', error)
      throw error
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    isSubmitting,
    submitFiles
  }
}