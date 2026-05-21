import { ref } from 'vue'

const totalValueGenerated = ref<boolean>(false)

export const useTotalValueGenerated = () => {
  const toggleTotalValueGenerated = () => {
    totalValueGenerated.value = !totalValueGenerated.value
  }

  return {
    totalValueGenerated,
    toggleTotalValueGenerated
  }
}