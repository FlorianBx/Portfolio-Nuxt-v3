<script setup lang="ts">
import MailIcon from '../components/mailIcon.vue'
import LinkedinIcon from '../components/linkedinIcon.vue'
import BlueskyIcon from '../components/blueskyIcon.vue'

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <article
    class="shadow-lg bg-zinc-800 rounded-xl p-8 flex flex-col justify-center gap-4"
    :class="$attrs.class"
  >
    <p class="text-5xl font-bebas font-bold text-emerald-400 text-center">Contact me</p>
    <div class="flex justify-around items-center gap-4">
      <BlueskyIcon class="w-10 h-10 mb-4 -ml-1" />
      <LinkedinIcon class="w-10 h-10 mb-4" />
      <MailIcon class="w-10 h-10 mb-4" />
    </div>
  </article>
</template>
