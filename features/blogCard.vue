<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'
import ArticleItem from '../components/ArticleItem.vue'

defineOptions({
  inheritAttrs: false,
})

interface Article {
  title: string
  description: string
}

const articles: Article[] = [
  {
    title: 'Vue A11y Tools',
    description: "Collection d'outils pour améliorer l'accessibilité des applications Vue.js",
  },
  {
    title: 'Nuxt Content Blog',
    description: 'Template de blog accessible avec Nuxt Content',
  },
  {
    title: 'Tailwind CSS',
    description: 'Framework CSS open source pour la création de feuilles de styles',
  },
]
</script>

<template>
  <article class="relative shadow-lg bg-zinc-800 rounded-xl p-8" :class="$attrs.class">
    <h2 class="font-bold mb-8 uppercase">Blog & Articles</h2>
    <div class="space-y-4">
      <ArticleItem
        v-for="article in articles"
        :key="article.title"
        :title="article.title"
        :description="article.description"
      />
    </div>
    <CirclePlus class="absolute bottom-4 right-4" />
  </article>
</template>
