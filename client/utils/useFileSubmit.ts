import { ref } from 'vue'
import { uploadFiles } from '../utils/uploadFiles'
import { useResponseData } from '../utils/useResponseData'

const { responseData, setResponseData } = useResponseData()



export function useFileSubmit() {
  const isSubmitting = ref(false)

  const submitFiles = async (files: File[]): Promise<any> => {
    if (!files.length) return

    isSubmitting.value = true

    try {
      const response = await uploadFiles(files)

      setResponseData(response)
      
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