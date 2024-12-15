<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'
import ArticleItem from '../../components/articleItem.vue'
import { useModalStore } from '../../stores/useModalStore'

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
    class="relative bg-zinc-800 rounded-xl p-4 sm:p-8 pb-14 cursor-pointer hover:scale-[1.02] hover:shadow-xl transition-all duration-200"
  >
    <h2 class="text-2xl font-bebas-title font-bold text-emerald-400 mb-6">Blog & Articles</h2>

    <div v-if="isLoading" class="flex justify-center items-center h-32 bg-zinc-900/50 rounded-lg">
      <div class="flex items-center gap-3">
        <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse [animation-delay:200ms]" />
        <div class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse [animation-delay:400ms]" />
      </div>
    </div>

    <div v-else-if="error" class="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
      <p class="text-red-400 text-sm">Une erreur est survenue lors du chargement des articles.</p>
    </div>

    <div v-else class="space-y-4">
      <ArticleItem
        v-for="article in articles"
        :key="article._path"
        :title="article.title"
        :description="article.description"
        class="transition-transform duration-300 hover:translate-x-1"
        @click.stop="navigateTo(article._path)"
      />
    </div>

    <CirclePlus
      class="absolute bottom-4 right-4 w-8 h-8 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
    />
  </article>
</template>

<style scoped>
.font-bebas-title {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
