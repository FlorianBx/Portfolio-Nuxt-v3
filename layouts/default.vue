<script setup lang="ts">
const title = ref('portfolio-the-good-one')
const description = ref('portfolio-the-good-one')

useHead({
  title,
  meta: [
    { name: 'description', content: description.value },
    { name: 'keywords', content: 'portfolio, portfolio-the-good-one' },
    { name: 'author', content: 'Florian Beaumont' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'og:title',
      content: title.value,
    },
    {
      name: 'og:description',
      content: description.value,
    },
    {
      name: 'og:image',
      content: 'https://portfolio-the-good-one.vercel.app/og.png',
    },
    {
      name: 'og:image:alt',
      content: 'portfolio-the-good-one',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:title',
      content: title.value,
    },
    {
      name: 'twitter:description',
      content: description.value,
    },
    {
      name: 'twitter:image',
      content: 'https://portfolio-the-good-one.vercel.app/og.png',
    },
    {
      name: 'twitter:image:alt',
      content: 'portfolio-the-good-one',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 dark:bg-stone-900 dark:text-stone-100 p-8">
    <header class="h-16 pl-1 mb-4">
      <h1 class="text-4xl font-bold">
        <span class="text-emerald-400">F</span>ront-end deve<span class="text-emerald-400">lo</span
        >per
      </h1>
    </header>
    <main>
      <slot />
    </main>
    <footer class="text-center">
      <p class="text-gray-500 dark:text-gray-400">
        Made with ❤️ by <a target="_blank" href="https://florianbeaumont.dev">Florian Beaumont</a>
      </p>
    </footer>
  </div>
</template>

<style scoped>
h1 {
  font-family: 'Bebas Neue';
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

main {
  min-height: calc(100vh - 4rem);
}
</style>
