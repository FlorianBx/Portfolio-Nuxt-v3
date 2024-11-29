<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue'
import { ChevronLeft, ChevronRight, X as XIcon } from 'lucide-vue-next'
import gsap from 'gsap'

// Types
interface Slide {
  id: string
  component: any
  title: string
}

interface Props {
  modelValue: boolean
  initialSlideId?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

// Configuration du carousel
const slides = [
  {
    id: 'about',
    component: defineAsyncComponent(() => import('../features/modals/aboutView.vue')),
    title: 'About',
  },
  {
    id: 'project',
    component: defineAsyncComponent(() => import('../features/modals/projectView.vue')),
    title: 'Project',
  },
  {
    id: 'blog',
    component: defineAsyncComponent(() => import('../features/modals/blogView.vue')),
    title: 'Blog',
  },
] as Slide[]

// État local
const currentIndex = ref(
  props.initialSlideId ? slides.findIndex((slide) => slide.id === props.initialSlideId) : 0
)
const isTransitioning = ref(false)
const slideRefs = ref<HTMLElement[]>([])

// Computed values pour la navigation
const prevIndex = computed(() =>
  currentIndex.value === 0 ? slides.length - 1 : currentIndex.value - 1
)
const nextIndex = computed(() => (currentIndex.value + 1) % slides.length)

// Navigation entre les slides
const moveToSlide = (direction: 'next' | 'prev') => {
  if (isTransitioning.value) return
  isTransitioning.value = true

  const currentSlide = slideRefs.value[currentIndex.value]
  const targetSlide = slideRefs.value[direction === 'next' ? nextIndex.value : prevIndex.value]
  const moveAmount = 100 * (direction === 'next' ? -1 : 1)

  gsap.to(currentSlide, {
    xPercent: moveAmount,
    scale: 0.8,
    duration: 0.4,
  })

  gsap.fromTo(
    targetSlide,
    {
      xPercent: -moveAmount,
      scale: 0.8,
    },
    {
      xPercent: 0,
      scale: 1,
      duration: 0.4,
      onComplete: () => {
        currentIndex.value = direction === 'next' ? nextIndex.value : prevIndex.value
        isTransitioning.value = false
      },
    }
  )
}

// Handlers
const closeModal = () => emit('update:modelValue', false)

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowRight') moveToSlide('next')
  if (e.key === 'ArrowLeft') moveToSlide('prev')
}

// Lifecycle hooks
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)

  // Position initiale des slides
  gsap.set(slideRefs.value[currentIndex.value], {
    xPercent: 0,
    scale: 1,
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Transition name="modal">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div class="absolute inset-0 bg-black/85 backdrop-blur-sm" aria-hidden="true" />

      <div class="relative w-full h-[90vh] flex items-center justify-center">
        <!-- Slide précédent -->
        <div class="absolute left-0 w-[8vw] h-[65vh] bg-zinc-800 rounded-lg" />

        <!-- Container du slide actif -->
        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          ref="slideRefs"
          class="absolute rounded-lg left-[10vw] right-[10vw] h-[80vh] bg-zinc-800 shadow-lg"
          :class="{ 'pointer-events-none': index !== currentIndex }"
        >
          <div class="h-full">
            <div class="flex justify-between items-center p-8">
              <h2 class="text-xl font-bold text-white">{{ slide.title }}</h2>
              <button
                v-if="index === currentIndex"
                class="p-2 bg-zinc-900 hover:bg-zinc-600 rounded-full transition-colors"
                @click="closeModal"
              >
                <XIcon class="w-6 h-6" />
              </button>
            </div>

            <div class="h-[calc(100%-5rem)] overflow-auto p-8 pt-0">
              <component :is="slide.component" />
            </div>
          </div>
        </div>

        <!-- Slide suivant -->
        <div class="absolute right-0 w-[8vw] h-[65vh] bg-zinc-800 rounded-lg" />
      </div>

      <!-- Boutons de navigation -->
      <button
        class="absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-zinc-900 hover:bg-zinc-700 rounded-full transition-colors z-20"
        @click="prevSlide"
        :disabled="isTransitioning"
      >
        <ChevronLeft class="w-8 h-8" />
        <span class="sr-only">Précédent</span>
      </button>

      <button
        class="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-zinc-900 hover:bg-zinc-700 rounded-full transition-colors z-20"
        @click="nextSlide"
        :disabled="isTransitioning"
      >
        <ChevronRight class="w-8 h-8" />
        <span class="sr-only">Suivant</span>
      </button>
    </div>
  </Transition>
</template>
