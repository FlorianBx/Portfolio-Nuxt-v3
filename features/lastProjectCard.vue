<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'
</script>

<template>
  <article class="relative lg shadow-lg bg-zinc-800 rounded-xl p-8" :class="$attrs.class">
    <h2 class="font-bold mb-8 uppercase">last project</h2>
    <p class="font-bebas-title text-4xl">WebAll1Lab</p>
    <img class="rounded-xl mt-2" src="/images/weba11ylab.avif" alt="" >
    <p class="text-xl font-bold mt-4 p-1">Documentation open source sur l'accessibilité web.</p>
    <CirclePlus class="absolute bottom-4 right-4" />
  </article>
</template>
