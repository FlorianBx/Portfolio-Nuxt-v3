<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'
import TechBadge from '../components/techBadge.vue'

defineOptions({
  inheritAttrs: false,
})

const technologies = [
  { name: 'Vue.js', color: 'bg-emerald-700' },
  { name: 'TypeScript', color: 'bg-blue-700' },
  { name: 'Nuxt', color: 'bg-emerald-700' },
  { name: 'TailwindCSS', color: 'bg-cyan-700' },
]
</script>

<template>
  <article class="relative shadow-lg bg-zinc-800 rounded-xl p-8" :class="$attrs.class">
    <h2 class="font-bebas-title text-2xl font-bold mb-4">Tech Stack</h2>
    <div class="flex flex-wrap gap-3 mt-4">
      <TechBadge
        v-for="tech in technologies"
        :key="tech.name"
        :name="tech.name"
        :color="tech.color"
      />
    </div>
    <CirclePlus class="absolute bottom-4 right-4" />
  </article>
</template>
