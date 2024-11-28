<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { ChevronLeft, ChevronRight, X as XIcon } from 'lucide-vue-next'
import gsap from 'gsap'

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

const ANIMATION_DURATION = 0.4 // 400ms
const PREVIEW_WIDTH = 300 // width of preview slides in pixels

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

const currentIndex = ref(
  props.initialSlideId ? slides.findIndex((slide) => slide.id === props.initialSlideId) : 0
)

const prevIndex = computed(() =>
  currentIndex.value === 0 ? slides.length - 1 : currentIndex.value - 1
)

const nextIndex = computed(() => (currentIndex.value + 1) % slides.length)

const isTransitioning = ref(false)
const slideRefs = ref<HTMLElement[]>([])

const animateSlide = (element: HTMLElement, fromVars: gsap.TweenVars, toVars: gsap.TweenVars) => {
  return gsap.fromTo(
    element,
    {
      ...fromVars,
      duration: ANIMATION_DURATION,
      ease: 'power2.inOut',
    },
    {
      ...toVars,
      duration: ANIMATION_DURATION,
      ease: 'power2.inOut',
    }
  )
}

const handleTransition = async (direction: 'next' | 'prev') => {
  if (isTransitioning.value) return
  isTransitioning.value = true

  const timeline = gsap.timeline()
  const currentSlide = slideRefs.value[currentIndex.value]
  const targetSlide = slideRefs.value[direction === 'next' ? nextIndex.value : prevIndex.value]
  const xOffset = direction === 'next' ? -PREVIEW_WIDTH : PREVIEW_WIDTH

  // Animate current slide out
  timeline.add(
    animateSlide(
      currentSlide,
      {
        xPercent: 0,
        scale: 1,
        zIndex: 10,
      },
      {
        xPercent: -xOffset,
        scale: 0.75,
        zIndex: 5,
      }
    )
  )

  // Animate target slide in
  timeline.add(
    animateSlide(
      targetSlide,
      {
        xPercent: xOffset,
        scale: 0.75,
        zIndex: 5,
      },
      {
        xPercent: 0,
        scale: 1,
        zIndex: 10,
      }
    ),
    '-=0.4'
  )

  timeline.then(() => {
    currentIndex.value = direction === 'next' ? nextIndex.value : prevIndex.value
    isTransitioning.value = false
  })
}

const nextSlide = () => handleTransition('next')
const prevSlide = () => handleTransition('prev')

const closeModal = () => {
  emit('update:modelValue', false)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'ArrowLeft') prevSlide()
}

// Set up keyboard navigation
onMounted(() => {
  window.addEventListener('keydown', handleKeydown)

  // Set initial positions
  gsap.set(slideRefs.value[prevIndex.value], {
    xPercent: -PREVIEW_WIDTH,
    scale: 0.75,
    zIndex: 5,
  })

  gsap.set(slideRefs.value[currentIndex.value], {
    xPercent: 0,
    scale: 1,
    zIndex: 10,
  })

  gsap.set(slideRefs.value[nextIndex.value], {
    xPercent: PREVIEW_WIDTH,
    scale: 0.75,
    zIndex: 5,
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
const PREVIEW_OPACITY = 0.15
const PREVIEW_SCALE = 0.85
const PREVIEW_PEEK = 100 // pixels visibles du slide adjacent
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
        <!-- Carte globale dark -->
        <div class="absolute w-[95vw] h-[90vh] bg-zinc-800/50 rounded-3xl overflow-hidden">
          <!-- Slide précédent -->
          <div class="absolute left-0 w-[15vw] h-full bg-zinc-800 rounded-3xl" />

          <!-- Container du slide actif -->
          <div
            v-for="(slide, index) in slides"
            :key="slide.id"
            ref="slideRefs"
            class="absolute left-[15vw] right-[15vw] h-full bg-zinc-800 shadow-2xl"
            :class="{ 'pointer-events-none': index !== currentIndex }"
          >
            <div class="h-full">
              <div class="flex justify-between items-center p-8">
                <h2 class="text-xl font-bold text-white">{{ slide.title }}</h2>
                <button
                  v-if="index === currentIndex"
                  class="p-2 hover:bg-zinc-700 rounded-full transition-colors"
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
          <div class="absolute right-0 w-[15vw] h-full bg-zinc-800 rounded-3xl" />
        </div>

        <!-- Boutons de navigation -->
        <button
          class="absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors z-20"
          @click="prevSlide"
          :disabled="isTransitioning"
        >
          <ChevronLeft class="w-8 h-8" />
          <span class="sr-only">Précédent</span>
        </button>

        <button
          class="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors z-20"
          @click="nextSlide"
          :disabled="isTransitioning"
        >
          <ChevronRight class="w-8 h-8" />
          <span class="sr-only">Suivant</span>
        </button>
      </div>
    </div>
  </Transition>
</template>
