<script setup lang="ts">
import { ref, computed } from 'vue'
import { ChevronLeft, ChevronRight, X as XIcon } from 'lucide-vue-next'

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

// Slides data
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

const nextSlide = () => {
  currentIndex.value = nextIndex.value
}

const prevSlide = () => {
  currentIndex.value = prevIndex.value
}

const closeModal = () => {
  emit('update:modelValue', false)
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'ArrowLeft') prevSlide()
}
</script>

<template>
  <Transition name="modal">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center"
      @click="closeModal"
      @keydown="handleKeydown"
      tabindex="-1"
      role="dialog"
      aria-modal="true"
    >
      <!-- Backdrop -->
      <div class="absolute inset-0 bg-black/85 backdrop-blur-sm" aria-hidden="true" />

      <!-- Carousel Container -->
      <div class="relative w-full h-[90vh] flex items-center justify-center" @click.stop>
        <!-- Previous Slide Preview -->
        <div
          class="absolute left-4 w-64 h-[100vh] opacity-50 transform -translate-x-1/2 scale-75 transition-all duration-300"
        >
          <component
            :is="slides[prevIndex].component"
            class="w-full h-full bg-zinc-800 rounded-xl p-4 shadow-2xl"
          />
        </div>

        <!-- Current Slide -->
        <div
          class="relative w-[80vw] h-[90vh] bg-zinc-800 rounded-xl p-8 shadow-2xl transition-all duration-300 z-10"
        >
          <!-- Navigation -->
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold text-white">
              {{ slides[currentIndex].title }}
            </h2>
            <button
              class="p-2 hover:bg-zinc-700 rounded-full transition-colors"
              @click="closeModal"
              aria-label="Close modal"
            >
              <XIcon class="w-6 h-6" />
            </button>
          </div>

          <!-- Main Content -->
          <div class="h-[calc(100%-4rem)] overflow-auto">
            <component :is="slides[currentIndex].component" :key="currentIndex" class="h-full" />
          </div>
        </div>

        <!-- Next Slide Preview -->
        <div
          class="absolute right-4 w-64 h-[100vh] opacity-50 transform translate-x-1/2 scale-75 transition-all duration-300"
        >
          <component
            :is="slides[nextIndex].component"
            class="w-full h-full bg-zinc-800 rounded-xl p-4 shadow-2xl"
          />
        </div>

        <!-- Navigation Buttons -->
        <button
          class="absolute left-8 top-1/2 -translate-y-1/2 p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors z-20"
          @click.stop="prevSlide"
          aria-label="Previous slide"
        >
          <ChevronLeft class="w-8 h-8" />
        </button>

        <button
          class="absolute right-8 top-1/2 -translate-y-1/2 p-3 bg-zinc-800 hover:bg-zinc-700 rounded-full transition-colors z-20"
          @click.stop="nextSlide"
          aria-label="Next slide"
        >
          <ChevronRight class="w-8 h-8" />
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .bg-zinc-800,
.modal-leave-active .bg-zinc-800 {
  transition: transform 0.3s ease-out;
}

.modal-enter-from .bg-zinc-800 {
  transform: scale(0.95);
}

.modal-leave-to .bg-zinc-800 {
  transform: scale(0.95);
}
</style>
