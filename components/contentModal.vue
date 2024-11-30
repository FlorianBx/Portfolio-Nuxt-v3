<script setup lang="ts">
import { ref, watch, computed, onMounted, onBeforeUnmount, defineAsyncComponent } from 'vue'
import { ChevronLeft, ChevronRight, X as XIcon } from 'lucide-vue-next'
import { useModalStore } from '../stores/useModalStore'
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

const modalStore = useModalStore()

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
const isTransitioning = ref(false)
const slideRefs = ref<HTMLElement[]>([])

const prevIndex = computed(() =>
  currentIndex.value === 0 ? slides.length - 1 : currentIndex.value - 1
)
const nextIndex = computed(() => (currentIndex.value + 1) % slides.length)

const isSlideVisible = (index: number) => {
  const total = slides.length
  const curr = currentIndex.value

  if (Math.abs(index - curr) <= 1) return true
  if (curr === 0 && index === total - 1) return true
  if (curr === total - 1 && index === 0) return true

  return false
}

const moveToSlide = (direction: 'next' | 'prev') => {
  if (isTransitioning.value) return
  isTransitioning.value = true

  const currentSlide = slideRefs.value[currentIndex.value]
  const targetIndex = direction === 'next' ? nextIndex.value : prevIndex.value
  const targetSlide = slideRefs.value[targetIndex]
  const moveAmount = 100 * (direction === 'next' ? -1 : 1)

  modalStore.setCurrentSlide(slides[targetIndex].id)

  slideRefs.value.forEach((slide, index) => {
    if (index !== currentIndex.value && index !== targetIndex) {
      gsap.set(slide, {
        xPercent: 100,
        scale: 0.8,
        visibility: 'hidden',
      })
    } else {
      gsap.set(slide, {
        visibility: 'visible',
      })
    }
  })

  gsap.to(currentSlide, {
    xPercent: moveAmount,
    scale: 0.8,
    duration: 0.3,
  })

  gsap.fromTo(
    targetSlide,
    {
      xPercent: -moveAmount,
      scale: 0.8,
      visibility: 'visible',
    },
    {
      xPercent: 0,
      scale: 1,
      duration: 0.3,
      onComplete: () => {
        currentIndex.value = targetIndex
        isTransitioning.value = false
      },
    }
  )
}

const closeModal = () => {
  modalStore.closeModal()
  emit('update:modelValue', false)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowRight') moveToSlide('next')
  if (e.key === 'ArrowLeft') moveToSlide('prev')
  if (e.key === 'l') moveToSlide('next')
  if (e.key === 'h') moveToSlide('prev')
}

watch(
  () => modalStore.isOpen,
  (newValue) => {
    emit('update:modelValue', newValue)
    if (newValue && props.initialSlideId) {
      const newIndex = slides.findIndex((slide) => slide.id === props.initialSlideId)
      if (newIndex !== -1) {
        currentIndex.value = newIndex

        slideRefs.value.forEach((slide) => {
          gsap.set(slide, {
            xPercent: 100,
            scale: 0.8,
            visibility: 'hidden',
          })
        })

        gsap.set(slideRefs.value[newIndex], {
          xPercent: 0,
          scale: 1,
          visibility: 'visible',
        })
      }
    }
  }
)

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)

  slideRefs.value.forEach((slide) => {
    gsap.set(slide, {
      xPercent: 100,
      scale: 0.8,
      visibility: 'hidden',
    })
  })

  gsap.set(slideRefs.value[currentIndex.value], {
    xPercent: 0,
    scale: 1,
    visibility: 'visible',
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <!-- <Transition name="modal"> -->
  <div>
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div class="absolute inset-0 bg-black/85 backdrop-blur-sm" aria-hidden="true" />

      <div class="relative w-full h-[90vh] flex items-center justify-center">
        <div aria-hidden="true" class="absolute left-0 w-[8vw] h-[65vh] bg-zinc-800 rounded-lg" />

        <div
          v-for="(slide, index) in slides"
          :key="slide.id"
          ref="slideRefs"
          class="absolute rounded-lg left-[10vw] right-[10vw] h-[80vh] bg-zinc-800 shadow-lg"
          :style="{
            zIndex: index === currentIndex ? 2 : 1,
            visibility: isSlideVisible(index) ? 'visible' : 'hidden',
          }"
          :class="{ 'pointer-events-none': index !== currentIndex }"
        >
          <div class="h-full">
            <div class="relative flex justify-between items-center p-8">
              <button
                v-if="index === currentIndex"
                class="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-900 hover:bg-zinc-600 rounded-full transition-colors"
                @click.stop="closeModal"
              >
                <XIcon class="w-6 h-6" />
              </button>
            </div>

            <div class="h-[calc(100%-5rem)] overflow-auto p-8 pt-0">
              <component :is="slide.component" />
            </div>
          </div>
        </div>

        <div aria-hidden="true" class="absolute right-0 w-[8vw] h-[65vh] bg-zinc-800 rounded-lg" />
      </div>

      <button
        class="absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-zinc-900 hover:bg-zinc-700 rounded-full transition-colors z-20"
        @click="() => moveToSlide('prev')"
        :disabled="isTransitioning"
      >
        <ChevronLeft class="w-8 h-8" />
        <span class="sr-only">Précédent</span>
      </button>

      <button
        class="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-zinc-900 hover:bg-zinc-700 rounded-full transition-colors z-20"
        @click="() => moveToSlide('next')"
        :disabled="isTransitioning"
      >
        <ChevronRight class="w-8 h-8" />
        <span class="sr-only">Suivant</span>
      </button>
    </div>
    <!-- </Transition> -->
  </div>
</template>

<style scoped>
/* .modal-enter-active, */
/* .modal-leave-active { */
/*   transition: all 0.3s ease; */
/* } */
/**/
/* .modal-enter-from, */
/* .modal-leave-to { */
/*   opacity: 0; */
/*   transform: scale(0.8); */
/* } */
</style>
