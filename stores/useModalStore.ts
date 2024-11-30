import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false)
  const currentSlideId = ref<string | null>(null)

  const openModal = (slideId: string) => {
    currentSlideId.value = slideId
    isOpen.value = true
  }

  const closeModal = () => {
    isOpen.value = false
    currentSlideId.value = null
  }

  const setCurrentSlide = (slideId: string) => {
    currentSlideId.value = slideId
  }

  return {
    isOpen,
    currentSlideId,
    openModal,
    closeModal,
    setCurrentSlide,
  }
})
