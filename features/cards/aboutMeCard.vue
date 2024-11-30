<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'
import { useModalStore } from '../../stores/useModalStore'
import ContentModal from '../../components/contentModal.vue'

const modalStore = useModalStore()

const openModal = () => {
  modalStore.openModal('about')
}
</script>

<template>
  <article
    aria-label="about me"
    role="navigation"
    class="relative cursor-pointer lg shadow-lg bg-zinc-800 rounded-xl p-8 overflow-hidden col-span-1 md:col-span-1 row-span-4"
    @click="openModal"
  >
    <h2 class="font-bold mb-8 uppercase z-20">about me</h2>
    <p class="absolute bottom-24 text-4xl opacity-90 font-bebas-title z-20">
      Hey I'm Florian <span aria-hidden="true" class="waving-hand">👋</span>, Vue.js specialist.
      Accessibility advocate.
    </p>
    <p class="absolute text-2xl bottom-6 mt-4 font-bebas-title rounded block text-emerald-300 z-20">
      Co-organizer of Vue.js Paris meetup.
    </p>
    <!-- <div -->
    <!--   class="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-emerald-500/20 to-transparent" -->
    <!-- /> -->

    <img
      class="absolute w-full h-full top-0 left-0 object-cover opacity-20 grayscale"
      src="https://media.licdn.com/dms/image/v2/D4E03AQEWzb2EhoGTyw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696890004250?e=1738195200&v=beta&t=gUiVugdtJgrxNjiq_4w5w449DR1wvK8xwqvBTdEk4Ho"
      alt="Florian Beaumont"
    >
    <button class="absolute bottom-4 right-4">
      <CirclePlus class="w-8 h-8" />
      <span class="sr-only">En savoir plus</span>
    </button>

    <ContentModal v-model="modalStore.isOpen" :initial-slide-id="modalStore.currentSlideId" />
  </article>
</template>

<style scoped>
article:hover .waving-hand {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
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
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
</style>
