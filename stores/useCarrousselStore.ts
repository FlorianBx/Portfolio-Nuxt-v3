import AboutView from '../features/modals/aboutView.vue'
import ProjectView from '../features/modals/projectView.vue'
import BlogView from '../features/modals/blogView.vue'
import TechView from '../features/modals/techView.vue'
import TalksView from '../features/modals/talksView.vue'

const modalViews = markRaw({
  AboutView,
  ProjectView,
  BlogView,
  TechView,
  TalksView,
})

export const useCarouselStore = defineStore('carousel', () => {
  const slides = ref([
    { id: 'about', component: 'AboutView' },
    { id: 'project', component: 'ProjectView' },
    { id: 'blog', component: 'BlogView' },
    { id: 'tech', component: 'TechView' },
    { id: 'talks', component: 'TalksView' },
  ])

  const currentSlideId = ref<string | null>(null)

  const openModal = (slideId: string) => {
    currentSlideId.value = slideId
  }

  const closeModal = () => {
    currentSlideId.value = null
  }

  const getComponent = (componentName: string) => {
    return modalViews[componentName as keyof typeof modalViews]
  }

  return {
    slides,
    currentSlideId,
    openModal,
    closeModal,
    getComponent,
  }
})
