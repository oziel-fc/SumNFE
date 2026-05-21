import { ref } from 'vue'

export type NfeResponse = {
  invalid_files: string[]
  nfe_values: number[]
  total_value: number
}

const responseData = ref<NfeResponse | null>(null)

export function useResponseData() {
  const setResponseData = (data: NfeResponse) => {
    responseData.value = data
  }

  const clearResponseData = () => {
    responseData.value = null
  }

  return {
    responseData,
    setResponseData,
    clearResponseData
  }
}