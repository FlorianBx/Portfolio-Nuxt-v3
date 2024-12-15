<script setup lang="ts">
import { ref } from 'vue'
import { BookOpen, Clock, ArrowUpRight } from 'lucide-vue-next'
import TechBadge from '../../components/techBadge.vue'

interface BlogPost {
  _path: string
  title: string
  description: string
  date: string
  readTime: number
  tags: Array<{
    name: string
    color: string
  }>
  draft?: boolean
}

const selectedCategory = ref<string>('all')
const categories = [
  { id: 'all', name: 'Tous les articles' },
  { id: 'vue', name: 'Vue.js' },
  { id: 'a11y', name: 'Accessibilité' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'nuxt', name: 'Nuxt' },
  { id: 'tailwind', name: 'Tailwind' },
  { id: 'css', name: 'CSS' },
]

const { data: articles } = await useAsyncData('articles', () =>
  queryContent<BlogPost>('blog')
    .where({ draft: { $ne: true } })
    .sort({ date: -1 })
    .limit(5)
    .find()
)

const filteredArticles = computed(() => {
  if (selectedCategory.value === 'all') {
    return articles.value
  }
  return articles.value?.filter((article) =>
    article.tags.some((tag) =>
      tag.name.toLowerCase().includes(selectedCategory.value.toLowerCase())
    )
  )
})

const navigateToArticle = (path: string) => {
  navigateTo(path)
}
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-8">
    <section class="space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl font-bebas text-emerald-400">Blog & Articles</h1>
        <BookOpen class="w-8 h-8 text-emerald-400" />
      </div>

      <!-- Filtres -->
      <div class="flex flex-wrap gap-3 pb-4 border-b border-zinc-700">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          class="px-4 py-2 rounded-lg text-sm transition-colors"
          :class="
            selectedCategory === category.id
              ? 'bg-emerald-400 text-zinc-900'
              : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
          "
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Liste des articles -->
      <div class="grid gap-6">
        <article
          v-for="article in filteredArticles"
          :key="article._path"
          class="group relative bg-zinc-800/50 rounded-lg p-6 transition-all hover:bg-zinc-700/50"
        >
          <div class="flex justify-between items-start mb-3">
            <h2 class="text-2xl font-bold group-hover:text-emerald-400 transition-colors">
              {{ article.title }}
            </h2>
            <ArrowUpRight
              class="w-5 h-5 text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
            />
          </div>

          <p class="text-zinc-300 mb-4">{{ article.description }}</p>

          <div class="flex flex-wrap items-center gap-4">
            <div class="flex items-center gap-2 text-zinc-400">
              <Clock class="w-4 h-4" />
              <span class="text-sm">{{ article.readTime }} min</span>
            </div>

            <time class="text-sm text-zinc-400">
              {{
                new Date(article.date).toLocaleDateString('fr-FR', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              }}
            </time>

            <div class="flex gap-2">
              <TechBadge
                v-for="tag in article.tags"
                :key="tag.name"
                :name="tag.name"
                :color="tag.color"
              />
            </div>
          </div>

          <button @click="navigateToArticle(article._path)" class="absolute inset-0">
            <span class="sr-only">Lire l'article {{ article.title }}</span>
          </button>
        </article>
      </div>
    </section>

    <!-- Footer avec un CTA -->
    <div class="text-center pt-4 border-t border-zinc-700">
      <NuxtLink
        to="/blog"
        class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-400 text-zinc-900 rounded-lg hover:bg-emerald-500 transition-colors"
      >
        Voir tous les articles
        <ArrowUpRight class="w-5 h-5" />
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
