<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'
import ArticleItem from '../components/articleItem.vue'
import { useModalStore } from '@/stores/useModalStore'

interface Article {
  title: string
  description: string
  _path: string
  createdAt: string
}

const { data: articles } = await useAsyncData('articles', () =>
  queryContent('blog').sort({ createdAt: -1 }).limit(3).find()
)

const isLoading = ref(false)
const error = ref<Error | null>(null)

const modalStore = useModalStore()

const openModal = () => {
  modalStore.openModal('blog')
}
</script>

<template>
  <article
    role="dialog"
    @click="openModal"
    class="relative shadow-lg cursor-pointer bg-zinc-800 rounded-xl p-8"
  >
    <h2 class="font-bold mb-8 uppercase">Blog & Articles</h2>

    <div v-if="isLoading" class="flex justify-center items-center h-32">
      <span class="loading">Chargement des articles...</span>
    </div>

    <div v-else-if="error" class="text-red-400 p-4">
      Une erreur est survenue lors du chargement des articles.
    </div>

    <div v-else class="space-y-4">
      <ArticleItem
        v-for="article in articles"
        :key="article._path"
        :title="article.title"
        :description="article.description"
        @click="navigateTo(article._path)"
      />
    </div>
    <CirclePlus class="absolute bottom-4 right-4" />

    <ContentModal v-model="modalStore.isOpen" :initial-slide-id="modalStore.currentSlideId" />
  </article>
</template>

<style scoped>
.loading {
  @apply text-emerald-400 text-sm;
}
</style>
