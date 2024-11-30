<script setup lang="ts">
import { ref } from 'vue'
import { GithubIcon, ExternalLinkIcon, BookOpenIcon } from 'lucide-vue-next'
import TechBadge from '../components/techBadge.vue'

const technologies = ref([
  { name: 'Vue.js', color: 'bg-emerald-700' },
  { name: 'TypeScript', color: 'bg-blue-700' },
  { name: 'Nuxt', color: 'bg-emerald-700' },
  { name: 'TailwindCSS', color: 'bg-cyan-700' },
])

const features = ref([
  {
    icon: BookOpenIcon,
    title: 'Documentation Complète',
    description:
      "Guide exhaustif des bonnes pratiques d'accessibilité web pour tous les développeurs.",
  },
  {
    icon: GithubIcon,
    title: 'Open Source',
    description:
      'Projet collaboratif hébergé sur GitHub, ouvert aux contributions de la communauté.',
  },
])
</script>

<template>
  <div class="h-full grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Left Column: Project Details -->
    <div class="p-8 space-y-8">
      <section class="space-y-6">
        <h1 class="text-5xl font-bebas text-emerald-400">WebA11yLab</h1>
        <div class="space-y-4">
          <p class="text-xl text-zinc-300 leading-relaxed">
            Une documentation open source dédiée à l'accessibilité web, construite pour aider les
            développeurs à créer des sites accessibles à tous.
          </p>
          <div class="flex flex-wrap gap-2 pt-2">
            <TechBadge
              v-for="tech in technologies"
              :key="tech.name"
              :name="tech.name"
              :color="tech.color"
            />
          </div>
        </div>
      </section>

      <section class="space-y-4">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="bg-zinc-900/50 p-4 rounded-lg flex gap-4 items-start group transition-all hover:bg-zinc-800/50"
        >
          <component
            :is="feature.icon"
            class="w-6 h-6 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform"
          />
          <div class="space-y-1">
            <h3 class="text-lg font-bold">{{ feature.title }}</h3>
            <p class="text-zinc-300 text-sm">{{ feature.description }}</p>
          </div>
        </div>
      </section>

      <div class="flex gap-4">
        <NuxtLink
          to="https://weba11ylab.dev"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-400 text-zinc-900 rounded-lg hover:bg-emerald-500 transition-colors"
        >
          <ExternalLinkIcon class="w-4 h-4" />
          Voir le site
        </NuxtLink>
        <NuxtLink
          to="https://github.com/florianbx/weba11ylab"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-700 text-zinc-100 rounded-lg hover:bg-zinc-600 transition-colors"
        >
          <GithubIcon class="w-4 h-4" />
          GitHub
        </NuxtLink>
      </div>
    </div>

    <!-- Right Column: Project Preview -->
    <div class="relative h-full bg-zinc-900/50 rounded-lg">
      <img
        src="/images/weba11ylab.avif"
        alt="Aperçu de WebA11yLab"
        class="absolute inset-0 w-full h-full object-cover object-left rounded-lg"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent" />
    </div>
  </div>
</template>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
