<script setup lang="ts">
import { ref } from 'vue'
import { Calendar, Users, MapPin } from 'lucide-vue-next'

interface Talk {
  title: string
  date: string
  location: string
  event: string
  description: string
  slides?: string
  recording?: string
}

const talks = ref<Talk[]>([
  {
    title: 'Comment rendre vos applications Vue.js accessibles',
    date: 'Mars 2025',
    location: 'Paris, France',
    event: 'Vue.js Paris Meetup',
    description:
      "Une présentation détaillée sur l'implémentation des bonnes pratiques d'accessibilité dans les applications Vue.js, avec des exemples concrets et des démonstrations en direct.",
    slides: 'https://slides.com/florianbx/vuejs-a11y',
  },
  {
    title: 'State Management avec Pinia',
    date: 'Juin 2025',
    location: 'Remote',
    event: 'Vue.js Global',
    description:
      "Introduction à Pinia, le gestionnaire d'état officiel pour Vue.js. Comment l'utiliser efficacement dans vos applications et les bonnes pratiques à suivre.",
    slides: 'https://slides.com/florianbx/pinia',
    recording: 'https://youtube.com/watch?v=example',
  },
])
</script>

<template>
  <div class="max-w-4xl mx-auto space-y-8">
    <section class="space-y-6">
      <div class="flex items-center justify-between">
        <h1 class="text-5xl font-bebas text-emerald-400">Talks & Conférences</h1>
        <Users class="w-8 h-8 text-emerald-400" />
      </div>

      <div class="grid gap-6">
        <article
          v-for="talk in talks"
          :key="talk.title"
          class="bg-zinc-900/50 rounded-lg p-6 space-y-4"
        >
          <h2 class="text-2xl font-bold">{{ talk.title }}</h2>

          <div class="flex flex-wrap gap-4 text-sm text-zinc-400">
            <div class="flex items-center gap-2">
              <Calendar class="w-4 h-4" />
              <span>{{ talk.date }}</span>
            </div>
            <div class="flex items-center gap-2">
              <MapPin class="w-4 h-4" />
              <span>{{ talk.location }}</span>
            </div>
            <div class="flex items-center gap-2 text-emerald-400 font-medium">
              <Users class="w-4 h-4" />
              <span>{{ talk.event }}</span>
            </div>
          </div>

          <p class="text-zinc-300">{{ talk.description }}</p>

          <div class="flex gap-4">
            <a
              v-if="talk.slides"
              :href="talk.slides"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-100 rounded-lg hover:bg-zinc-700 transition-colors"
            >
              Voir les slides
            </a>

            <a
              v-if="talk.recording"
              :href="talk.recording"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 text-zinc-100 rounded-lg hover:bg-zinc-700 transition-colors"
            >
              Voir l'enregistrement
            </a>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
