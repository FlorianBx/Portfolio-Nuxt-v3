<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-3 grid-rows-6 gap-6">
    <article class="relative col-span-1 row-span-4 lg shadow-lg bg-teal-800 rounded-xl p-8">
      <p>
        Hey, I'm Florian, a <strong>front-end developer</strong> from Paris in France. Specializing
        in Vue.js, Nuxt.js and Tailwind CSS. I'm also a big fan of TypeScript and I love to
        contribute to open-source projects. I'm coorganizer of the Vue.js Paris meetup. I'm
        specialised in accessibility too.
      </p>
      <CirclePlus class="absolute w-8 h-8 bottom-4 right-4" />
    </article>

    <article class="relative col-span-1 row-span-4 lg shadow-lg bg-teal-800 rounded-xl p-8">
      <p class="text-2xl font-bold">
        Front-end developer from France, specializing in Vue.js and Nuxt.js. Enthusiast of
        TypeScript and accessibility. Co-organizer of Vue.js Paris meetup. Passionate about creating
        efficient and inclusive user interfaces.
      </p>
      <p class="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
      </p>
      <CirclePlus class="absolute bottom-4 right-4" />
    </article>

    <article class="relative col-span-1 row-span-2 shadow-lg bg-teal-800 rounded-xl p-8">
      <h2 class="text-2xl font-bold">Projects</h2>
      <img
        src="https://github.com/florian-beaumont/portfolio-the-good-one/blob/main/public/og.png?raw=true"
        alt="portfolio-the-good-one"
        class="w-full"
      >
      <a href="https://github.com/florian-beaumont/portfolio-the-good-one" target="_blank">
        WebAll1Lab
      </a>
      <CirclePlus class="absolute bottom-4 right-4" />
    </article>

    <article class="relative col-span-1 row-span-4 shadow-lg bg-yellow-800 rounded-xl p-8">
      <h2 class="text-2xl font-bold">Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
      <CirclePlus class="absolute bottom-4 right-4" />
    </article>

    <article class="relative col-span-1 row-span-2 shadow-lg bg-red-800 rounded-xl p-8">
      <h2 class="text-2xl font-bold">Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
      <CirclePlus class="absolute bottom-4 right-4" />
    </article>

    <article class="relative col-span-1 row-span-2 shadow-lg bg-black rounded-xl p-8">
      <h2>Projects</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
      <CirclePlus class="absolute bottom-4 right-4" />
    </article>
  </section>
</template>

<style scoped>
section {
  height: calc(100vh - 8rem);
}
</style>
