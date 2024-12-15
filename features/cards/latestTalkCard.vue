<script setup lang="ts">
import { CirclePlus, Calendar, Users } from 'lucide-vue-next'
import { useModalStore } from '../../stores/useModalStore'

const modalStore = useModalStore()
const openModal = () => {
  modalStore.openModal('talk')
}
</script>

<template>
  <article
    role="dialog"
    class="relative bg-zinc-800 cursor-pointer rounded-xl p-8 hover:scale-[1.02] hover:shadow-xl transition-all duration-300"
    @click="openModal"
  >
    <h2 class="text-2xl font-bebas-title font-bold text-emerald-400 mb-6">Latest Talk</h2>

    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-semibold leading-snug">
          Comment rendre vos applications Vue.js accessibles
        </h3>
        <div class="flex items-center gap-2 mt-2 text-zinc-400">
          <Calendar class="w-4 h-4" />
          <span class="text-sm">Mars 2025</span>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <Users class="w-4 h-4 text-emerald-400" />
        <span class="text-sm font-medium text-emerald-400"> Vue.js Paris Meetup </span>
      </div>
    </div>

    <CirclePlus
      class="absolute bottom-4 right-2 w-8 h-8 text-emerald-400 hover:text-emerald-300 transition-colors duration-300"
    />
  </article>
</template>

<style scoped>
.font-bebas-title {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
