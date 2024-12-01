<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'
import ContentModal from '../../components/contentModal.vue'
import { useModalStore } from '../../stores/useModalStore'

const modalStore = useModalStore()
const openModal = () => {
  modalStore.openModal('project')
}
</script>

<template>
  <article
    aria-label="last project"
    role="navigation"
    class="relative bg-zinc-800 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl h-full"
    @click="openModal"
  >
    <div class="p-8 pb-4">
      <h2 class="font-bold text-xl uppercase text-emerald-400 mb-4">Latest Project</h2>
      <h3 class="font-bebas-title text-4xl text-zinc-100">WebA11yLab</h3>
    </div>

    <div class="relative px-8">
      <div class="aspect-video rounded-xl overflow-hidden bg-zinc-900">
        <img
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src="/images/weba11ylab.avif"
          alt="Aperçu du projet WebA11yLab"
        >
      </div>
    </div>

    <div class="p-8 pt-4">
      <p class="text-lg font-medium text-zinc-300 mb-4">
        Documentation open source sur l'accessibilité web
      </p>

      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 rounded-full bg-zinc-700 text-emerald-400 text-sm font-medium">
          Vue.js
        </span>
        <span class="px-3 py-1 rounded-full bg-zinc-700 text-blue-400 text-sm font-medium">
          TypeScript
        </span>
        <span class="px-3 py-1 rounded-full bg-zinc-700 text-cyan-400 text-sm font-medium">
          TailwindCSS
        </span>
      </div>
    </div>

    <button
      class="absolute bottom-4 right-4 p-2 rounded-full transition-all duration-200 hover:bg-zinc-700"
    >
      <CirclePlus class="w-8 h-8 text-emerald-400" />
      <span class="sr-only">En savoir plus sur WebAll1Lab</span>
    </button>

    <ContentModal v-model="modalStore.isOpen" :initial-slide-id="modalStore.currentSlideId" />
  </article>
</template>

<style scoped>
.font-bebas-title {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
