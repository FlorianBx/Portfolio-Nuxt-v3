<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'
import { defineAsyncComponent } from 'vue'

interface Technology {
  name: string
  color: string
  icon: any
}

const VueIcon = defineAsyncComponent(() => import('../../components/icons/vueIcon.vue'))
const TypeScriptIcon = defineAsyncComponent(
  () => import('../../components/icons/typescriptIcon.vue')
)
const NuxtIcon = defineAsyncComponent(() => import('../../components/icons/nuxtIcon.vue'))
const TailwindIcon = defineAsyncComponent(() => import('../../components/icons/tailwindIcon.vue'))

const technologies: Technology[] = [
  {
    name: 'Vue.js',
    color: 'text-emerald-400',
    icon: VueIcon,
  },
  {
    name: 'TypeScript',
    color: 'text-blue-400',
    icon: TypeScriptIcon,
  },
  {
    name: 'Nuxt',
    color: 'text-emerald-400',
    icon: NuxtIcon,
  },
  {
    name: 'TailwindCSS',
    color: 'text-cyan-400',
    icon: TailwindIcon,
  },
]
</script>

<template>
  <article class="relative bg-zinc-800 rounded-xl transition-all duration-300 p-8">
    <h2 class="font-bebas-title text-2xl font-bold mb-6 text-emerald-400">Tech Stack</h2>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div
        v-for="tech in technologies"
        :key="tech.name"
        class="flex items-center gap-3 p-2 rounded-lg bg-zinc-900/50 hover:bg-zinc-900 transition-colors duration-300"
      >
        <component :is="tech.icon" class="w-5 h-5" :class="tech.color" />
        <span class="font-medium text-zinc-100">{{ tech.name }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.font-bebas-title {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
