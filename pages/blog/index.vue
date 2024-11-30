<script setup lang="ts">
import { ref } from 'vue'
import { BookOpen, Clock, ArrowUpRight, Search } from 'lucide-vue-next'
import TechBadge from '~/components/techBadge.vue'

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
const searchQuery = ref('')

const categories = [
  { id: 'all', name: 'Tous les articles' },
  { id: 'vue', name: 'Vue.js' },
  { id: 'a11y', name: 'Accessibilité' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'nuxt', name: 'Nuxt' },
  { id: 'tailwind', name: 'Tailwind' },
  { id: 'css', name: 'CSS' },
]

// Récupération de tous les articles
const { data: articles } = await useAsyncData('articles', () =>
  queryContent<BlogPost>('blog')
    .where({ draft: { $ne: true } })
    .sort({ date: -1 })
    .find()
)

const filteredArticles = computed(() => {
  let filtered = articles.value || []

  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter((article) =>
      article.tags.some((tag) =>
        tag.name.toLowerCase().includes(selectedCategory.value.toLowerCase())
      )
    )
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.name.toLowerCase().includes(query))
    )
  }

  return filtered
})
</script>

<template>
  <div class="max-w-8xl mx-auto py-12 px-4 space-y-12">
    <section class="space-y-4">
      <h1 class="text-6xl font-bebas text-emerald-400">Blog & Articles</h1>
      <p class="text-xl text-zinc-300 max-w-2xl">
        Découvrez des articles techniques sur le développement frontend, l'accessibilité et les
        bonnes pratiques Vue.js.
      </p>
    </section>

    <section class="space-y-6">
      <div class="flex flex-col gap-4 items-start justify-between">
        <div class="flex gap-3 overflow-x-auto pb-2 w-full sm:w-auto">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="selectedCategory = category.id"
            class="px-4 py-2 rounded-lg text-sm transition-colors whitespace-nowrap"
            :class="
              selectedCategory === category.id
                ? 'bg-emerald-400 text-zinc-900'
                : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
            "
          >
            {{ category.name }}
          </button>
        </div>

        <!-- Barre de recherche -->
        <div class="flex flex-col relative w-full">
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Rechercher..."
            class="max-w-4xl px-4 py-6 pl-10 h-10 bg-zinc-800 rounded-lg text-zinc-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <Search class="absolute top-3 left-2 w-6 h-6 text-zinc-400" />
        </div>
      </div>

      <!-- Nombre d'articles -->
      <p class="text-zinc-400 text-sm">
        {{ filteredArticles.length }} article{{ filteredArticles.length > 1 ? 's' : '' }} trouvé{{
          filteredArticles.length > 1 ? 's' : ''
        }}
      </p>
    </section>

    <!-- Liste des articles -->
    <section class="grid gap-6">
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

          <div class="flex flex-wrap gap-2">
            <TechBadge
              v-for="tag in article.tags"
              :key="tag.name"
              :name="tag.name"
              :color="tag.color"
            />
          </div>
        </div>

        <NuxtLink :to="article._path" class="absolute inset-0">
          <span class="sr-only">Lire l'article {{ article.title }}</span>
        </NuxtLink>
      </article>
    </section>
  </div>
</template>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
