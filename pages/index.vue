<script setup lang="ts">
import { CirclePlus, SquareArrowOutUpRight } from 'lucide-vue-next'
import { LogosLinkedinIcon, LogosGoogleGmail, LogosBluesky } from '~/components'
import technoCard from '../features/technoCard.vue'
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-3 grid-rows-6 gap-6">
    <!-- About Me Card -->
    <article class="relative col-span-1 row-span-4 lg shadow-lg bg-zinc-800 rounded-xl p-8">
      <h2 class="font-bold mb-8 uppercase">about me</h2>
      <p class="text-4xl">
        Hey I'm Florian 👋, Vue.js specialist. Accessibility advocate.
        <span class="rounded block text-emerald-300 p-2">Co-organizer of Vue.js Paris meetup.</span>
      </p>
      <CirclePlus class="absolute w-8 h-8 bottom-4 right-4" />
    </article>

    <!-- Last Project Card -->
    <article class="relative col-span-1 row-span-4 lg shadow-lg bg-zinc-800 rounded-xl p-8">
      <h2 class="font-bold mb-8 uppercase">last project</h2>
      <p class="text-4xl">WebAll1Lab</p>
      <img class="rounded-xl mt-4" src="/images/weba11ylab.avif" alt="" >
      <p class="text-2xl font-bold mt-4 p-1">Documentation open source sur l'accessibilité web.</p>
      <CirclePlus class="absolute bottom-4 right-4" />
    </article>

    <!-- Contact Card -->
    <article class="col-span-1 row-span-2 shadow-lg bg-zinc-800 rounded-xl p-8">
      <p class="text-5xl font-bold text-emerald-400 text-center">Contact me</p>
      <div class="h-full flex justify-around items-center gap-4">
        <bluesky-icon class="w-10 h-10 mb-4" />
        <linkedin-icon class="w-10 h-10 mb-4" />
        <mail-icon class="w-10 h-10 mb-4" />
      </div>
    </article>

    <!-- Card 4: Open Source Projects -->
    <article class="relative col-span-1 row-span-4 shadow-lg bg-zinc-800 rounded-xl p-8">
      <h2 class="font-bold mb-8 uppercase">Blog & Articles</h2>
      <div class="space-y-4">
        <div class="relative bg-zinc-900/50 p-4 rounded-lg">
          <h3 class="text-xl mb-2">Vue A11y Tools</h3>
          <p class="text-sm">
            Collection d'outils pour améliorer l'accessibilité des applications Vue.js
          </p>
          <SquareArrowOutUpRight class="absolute h4 w-4 bottom-4 right-4" />
        </div>
        <div class="relative bg-zinc-900/50 p-4 rounded-lg">
          <h3 class="text-xl mb-2">Nuxt Content Blog</h3>
          <p class="text-sm">Template de blog accessible avec Nuxt Content</p>
          <SquareArrowOutUpRight class="absolute h-4 w-4 bottom-4 right-4" />
        </div>
        <div class="relative bg-zinc-900/50 p-4 rounded-lg">
          <h3 class="text-xl mb-2">Tailwind CSS</h3>
          <p class="text-sm">Framework CSS open source pour la création de feuilles de styles</p>
          <SquareArrowOutUpRight class="absolute h-4 w-4 bottom-4 right-4" />
        </div>
      </div>
      <CirclePlus class="absolute bottom-4 right-4" />
    </article>

    <!-- Card 5: Tech Stack -->
    <article class="relative col-span-1 row-span-2 shadow-lg bg-zinc-800 rounded-xl p-8">
      <h2 class="text-2xl font-bold mb-4">Tech Stack</h2>
      <div class="flex flex-wrap gap-3 mt-4">
        <span class="px-3 py-1 bg-emerald-700 rounded-md text-sm">Vue.js</span>
        <span class="px-3 py-1 bg-blue-700 rounded-md text-sm">TypeScript</span>
        <span class="px-3 py-1 bg-emerald-700 rounded-md text-sm">Nuxt</span>
        <span class="px-3 py-1 bg-cyan-700 rounded-md text-sm">TailwindCSS</span>
      </div>
      <CirclePlus class="absolute bottom-4 right-4" />
    </article>

    <!-- Card 6: Latest Talks -->
    <article class="relative col-span-1 row-span-2 shadow-lg bg-zinc-800 rounded-xl p-8">
      <h2 class="font-bold mb-8 uppercase">Latest Talk</h2>
      <div class="relative bg-zinc-900/50 p-4 rounded-lg">
        <h3 class="text-md font-semibold">Comment rendre vos applications Vue.js accessibles</h3>
        <p class="text-sm text-zinc-400 mt-1 mb-5">Mars 2025</p>
        <p class="absolute text-sm text-emerald-400 bottom-4 right-4">Vue.js Paris Meetup</p>
      </div>

      <CirclePlus class="absolute bottom-4 right-4" />
    </article>
  </section>
</template>

<style scoped>
section {
  height: calc(100vh - 8rem);
}
</style>
