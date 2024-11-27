<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'
</script>

<template>
  <article
    class="relative lg shadow-lg bg-zinc-800 rounded-xl p-8 overflow-hidden"
    :class="$attrs.class"
  >
    <h2 class="font-bold mb-8 uppercase z-20">about me</h2>
    <p class="absolute bottom-24 text-4xl opacity-90 font-bebas-title z-20">
      Hey I'm Florian 👋, Vue.js specialist. Accessibility advocate.
    </p>
    <p class="absolute bottom-6 mt-4 font-bebas-title rounded block text-emerald-300 z-20">
      Co-organizer of Vue.js Paris meetup.
    </p>
    <div
      class="absolute w-full h-full top-0 left-0 bg-gradient-to-t from-emerald-500/20 to-transparent"
    />
    <img
      class="absolute w-full h-full top-0 left-0 object-cover opacity-20 grayscale"
      src="https://media.licdn.com/dms/image/v2/D4E03AQEWzb2EhoGTyw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1696890004250?e=1738195200&v=beta&t=gUiVugdtJgrxNjiq_4w5w449DR1wvK8xwqvBTdEk4Ho"
      alt="Florian Beaumont"
    />
    <CirclePlus class="absolute w-8 h-8 bottom-4 right-4" />
  </article>
</template>
