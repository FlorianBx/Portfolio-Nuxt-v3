<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import gsap from 'gsap'

interface Props {
  slides: Array<{
    id: string
    component: string
  }>
  initialSlide?: number
}

const props = defineProps<Props>()
const currentIndex = ref(props.initialSlide || 0)
console.log(currentIndex.value)
const slideContainer = ref<HTMLElement | null>(null)

const nextSlide = () => {
  gsap.to(slideContainer.value, {
    x: '-=100%',
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete: () => {
      currentIndex.value = (currentIndex.value + 1) % props.slides.length
      gsap.set(slideContainer.value, { x: 0 })
    },
  })
}

const prevSlide = () => {
  gsap.to(slideContainer.value, {
    x: '+=100%',
    duration: 0.5,
    ease: 'power2.inOut',
    onComplete: () => {
      currentIndex.value =
        currentIndex.value === 0 ? props.slides.length - 1 : currentIndex.value - 1
      gsap.set(slideContainer.value, { x: 0 })
    },
  })
}

// Touch/Swipe handling
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0].screenX
  const diffX = touchEndX - touchStartX

  if (Math.abs(diffX) > 50) {
    // minimum swipe distance
    if (diffX > 0) {
      prevSlide()
    } else {
      nextSlide()
    }
  }
}
</script>

<template>
  <div class="relative h-full overflow-hidden">
    <!-- Slides -->
    <div
      ref="slideContainer"
      class="h-full transition-transform duration-500"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <component :is="slides[currentIndex].component" class="h-full" />
    </div>

    <!-- Navigation buttons -->
    <button
      class="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors"
      @click="prevSlide"
    >
      <ChevronLeft class="w-8 h-8" />
      <span class="sr-only">Précédent</span>
    </button>

    <button
      class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors"
      @click="nextSlide"
    >
      <ChevronRight class="w-8 h-8" />
      <span class="sr-only">Suivant</span>
    </button>
  </div>
</template>
