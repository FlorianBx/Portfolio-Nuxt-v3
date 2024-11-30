<script setup lang="ts">
import MailIcon from '../../components/icons/mailIcon.vue'
import LinkedinIcon from '../../components/icons/linkedinIcon.vue'
import BlueskyIcon from '../../components/icons/blueskyIcon.vue'
</script>

<template>
  <article
    class="shadow-lg bg-zinc-800 col-span-1 row-span-2 rounded-xl p-8 flex flex-col justify-center gap-4"
  >
    <p class="text-5xl font-bebas font-bold text-emerald-400 text-center">Contact me</p>
    <div class="flex space-x-2 justify-center items-center gap-8">
      <BlueskyIcon class="w-10 h-10 mb-4 -ml-1" />
      <LinkedinIcon class="w-10 h-10 mb-4" />
      <MailIcon class="w-10 h-10 mb-4" />
    </div>
  </article>
</template>
