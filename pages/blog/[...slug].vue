<script setup lang="ts">
import { ArrowLeft, Clock } from 'lucide-vue-next'
import TechBadge from '~/components/techBadge.vue'

const { path } = useRoute()

// Récupérer l'article en fonction du slug
const { data: article } = await useAsyncData(`content-${path}`, () =>
  queryContent('blog')
    .where({
      _path: path,
      draft: { $ne: true },
    })
    .findOne()
)

if (!article.value) {
  throw createError({
    statusCode: 404,
    message: 'Article non trouvé',
  })
}
</script>

<template>
  <article v-if="article" class="max-w-8xl mx-auto md:px-2 py-12">
    <NuxtLink
      to="/blog"
      class="inline-flex items-center gap-2 px- py-2 mb-8 text-zinc-400 hover:text-emerald-400 transition-colors group"
    >
      <ArrowLeft class="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
      Retour aux articles
    </NuxtLink>

    <!-- En-tête de l'article -->
    <header class="space-y-6 mb-12">
      <h1 class="text-5xl font-bebas text-emerald-400">{{ article.title }}</h1>

      <p class="text-xl text-zinc-300">
        {{ article.description }}
      </p>

      <div class="flex flex-wrap items-center gap-4">
        <!-- Date -->
        <time class="text-zinc-400">
          {{
            new Date(article.date).toLocaleDateString('fr-FR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })
          }}
        </time>

        <!-- Temps de lecture -->
        <div class="flex items-center gap-2 text-zinc-400">
          <Clock class="w-4 h-4" />
          <span>{{ article.readTime }} min</span>
        </div>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <TechBadge
            v-for="tag in article.tags"
            :key="tag.name"
            :name="tag.name"
            :color="tag.color"
          />
        </div>
      </div>
    </header>

    <!-- Contenu de l'article -->
    <div class="prose prose-invert prose-emerald max-w-none">
      <ContentDoc />
    </div>

    <!-- Footer avec bouton de retour -->
    <footer class="mt-12 pt-6 border-t border-zinc-700">
      <NuxtLink
        to="/blog"
        class="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 text-zinc-100 rounded-lg hover:bg-zinc-700 transition-colors"
      >
        <ArrowLeft class="w-5 h-5" />
        Retour à la liste des articles
      </NuxtLink>
    </footer>
  </article>
</template>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', sans-serif;
}

:deep(.prose pre) {
  background-color: #292524 !important; /* stone-800 */
}

:deep(.prose pre) {
  background-color: #292524 !important;
  border: 1px solid #1c1917; /* stone-900 */
  border-radius: 0.5rem;
  margin: 1.5rem 0;
}
</style>
