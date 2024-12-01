<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'
import { useModalStore } from '../../stores/useModalStore'

const modalStore = useModalStore()
const openModal = () => {
  modalStore.openModal('about')
}
</script>

<template>
  <article
    aria-label="about me"
    role="navigation"
    class="relative cursor-pointer bg-zinc-800 rounded-xl p-8 overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
    @click="openModal"
  >
    <div class="relative z-20 flex flex-col h-full">
      <h2 class="font-bold text-xl uppercase text-emerald-400 mb-8">About me</h2>

      <div class="flex-grow flex flex-col justify-end gap-6">
        <h3 class="text-4xl font-bebas-title leading-tight">
          Hey I'm Florian <span aria-hidden="true" class="waving-hand inline-block">👋</span>
          <span class="block mt-2">Vue.js Specialist &</span>
          <span class="text-emerald-400">Accessibility Advocate</span>
        </h3>

        <div class="inline-flex items-center gap-2">
          <span class="relative flex h-3 w-3">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
            />
            <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <span class="text-lg font-medium border-l-2 border-emerald-400 pl-2">
            Co-organizer of
            <span class="font-semibold text-emerald-400">Vue.js Paris</span>
            meetup
          </span>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 z-10">
      <div
        class="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/50 to-transparent"
      />
      <img class="w-full h-full object-cover opacity-20 grayscale" src="/images/me.avif" alt="" >
    </div>

    <CirclePlus class="absolute bottom-4 right-4 z-20 w-8 h-8" />
  </article>
</template>

<style scoped>
.waving-hand {
  transform-origin: 70% 70%;
}

article:hover .waving-hand {
  animation: wave 2.5s infinite;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60%,
  100% {
    transform: rotate(0deg);
  }
}
</style>
