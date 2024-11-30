<script setup lang="ts">
import { CirclePlus } from 'lucide-vue-next'

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <article class="relative shadow-lg bg-zinc-800 rounded-xl p-8" :class="$attrs.class">
    <h2 class="font-bold mb-8 uppercase">Latest Talk</h2>
    <div class="relative bg-zinc-900/50 p-4 -mt-4 rounded-lg">
      <h3 class="text-md font-semibold">Comment rendre vos applications Vue.js accessibles</h3>
      <p class="text-sm text-zinc-400 mt-1 mb-5">Mars 2025</p>
      <p class="absolute text-sm text-emerald-400 bottom-4 right-4">Vue.js Paris Meetup</p>
    </div>
    <CirclePlus class="absolute bottom-4 right-4" />
  </article>
</template>
