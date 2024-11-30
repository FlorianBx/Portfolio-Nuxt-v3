<!-- <script setup lang="ts"> -->
<!-- import { ref } from 'vue' -->
<!-- import { CodeIcon, HeartIcon, UsersIcon } from 'lucide-vue-next' -->
<!---->
<!-- interface Skill { -->
<!--   icon: any -->
<!--   title: string -->
<!--   description: string -->
<!-- } -->
<!---->
<!-- const skills = ref<Skill[]>([ -->
<!--   { -->
<!--     icon: CodeIcon, -->
<!--     title: 'Expertise Vue.js', -->
<!--     description: -->
<!--       "Développement d'interfaces performantes et accessibles avec Vue.js et son écosystème.", -->
<!--   }, -->
<!--   { -->
<!--     icon: HeartIcon, -->
<!--     title: 'Qualité & Détail', -->
<!--     description: -->
<!--       "Attaché aux bonnes pratiques et à la qualité du code. Un pixel mal aligné ne m'échappe pas.", -->
<!--   }, -->
<!--   { -->
<!--     icon: UsersIcon, -->
<!--     title: 'Esprit 42', -->
<!--     description: -->
<!--       'Formation technique rigoureuse, complétée par un apprentissage constant et le partage de connaissances.', -->
<!--   }, -->
<!-- ]) -->
<!-- </script> -->
<!---->
<!-- <template> -->
<!--   <div class="space-y-12"> -->
<!--     <!-- Hero Section -->
-->
<!--     <section class="space-y-4"> -->
<!--       <h1 class="text-5xl font-bebas text-emerald-400">Hey, moi c'est Florian</h1> -->
<!--       <h2 class="text-4xl font-bold"> -->
<!--         Je crée des interfaces -->
<!--         <span class="bg-emerald-400 text-zinc-900 px-2">INTUITIVES.</span> -->
<!--       </h2> -->
<!--       <p class="text-xl text-zinc-300 max-w-2xl leading-relaxed"> -->
<!--         Développeur frontend spécialisé Vue.js, je combine rigueur technique et sens du détail pour -->
<!--         concevoir des interfaces à la fois élégantes et accessibles. Co-organisateur des meetups -->
<!--         Vue.js Paris, j'aime partager et échanger autour du développement web. -->
<!--       </p> -->
<!--     </section> -->
<!---->
<!--     <!-- Skills Section -->
-->
<!--     <section class="grid grid-cols-1 md:grid-cols-3 gap-6"> -->
<!--       <div -->
<!--         v-for="skill in skills" -->
<!--         :key="skill.title" -->
<!--         class="bg-zinc-900/50 p-6 rounded-lg space-y-3 transition-all hover:bg-zinc-800/50" -->
<!--       > -->
<!--         <component :is="skill.icon" class="w-8 h-8 text-emerald-400" /> -->
<!--         <h3 class="text-xl font-bold">{{ skill.title }}</h3> -->
<!--         <p class="text-zinc-300">{{ skill.description }}</p> -->
<!--       </div> -->
<!--     </section> -->
<!--   </div> -->
<!-- </template> -->
<!---->
<!-- <style scoped> -->
<!-- .font-bebas { -->
<!--   font-family: 'Bebas Neue', sans-serif; -->
<!-- } -->
<!-- </style> -->
<script setup lang="ts">
import { ref } from 'vue'
import { CodeIcon, HeartIcon, UsersIcon, BookOpenIcon } from 'lucide-vue-next'

interface Skill {
  icon: any
  title: string
  description: string
}

const skills = ref<Skill[]>([
  {
    icon: CodeIcon,
    title: 'Expertise Vue.js',
    description:
      "Développement d'interfaces performantes et accessibles avec Vue.js et son écosystème.",
  },
  {
    icon: HeartIcon,
    title: 'Qualité & Détail',
    description:
      "Attaché aux bonnes pratiques et à la qualité du code. Un pixel mal aligné ne m'échappe pas.",
  },
  {
    icon: UsersIcon,
    title: 'Communauté',
    description:
      'Co-organisateur des meetups Vue.js Paris et contributeur actif de la communauté frontend.',
  },
  {
    icon: BookOpenIcon,
    title: 'Formation 42',
    description:
      "Une approche unique de l'apprentissage, basée sur la pratique et le partage des connaissances.",
  },
])
</script>

<template>
  <div class="max-w-5xl mx-auto space-y-12 py-8">
    <section class="space-y-6">
      <h1 class="text-5xl font-bebas text-emerald-400">Profil</h1>
      <div class="space-y-4">
        <h2 class="text-4xl font-bold">
          Un développeur frontend
          <span class="bg-emerald-400 text-zinc-900 px-2">PASSIONNÉ.</span>
        </h2>
        <p class="text-xl text-zinc-300 max-w-2xl leading-relaxed">
          Développeur frontend spécialisé Vue.js, je combine rigueur technique et sens du détail
          pour concevoir des interfaces à la fois élégantes et accessibles.
        </p>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="skill in skills"
        :key="skill.title"
        class="bg-zinc-900/50 p-6 rounded-lg flex gap-4 items-start group transition-all hover:bg-zinc-800/50"
      >
        <component
          :is="skill.icon"
          class="w-8 h-8 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform"
        />
        <div class="space-y-2">
          <h3 class="text-xl font-bold">{{ skill.title }}</h3>
          <p class="text-zinc-300">{{ skill.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
