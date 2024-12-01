<script setup lang="ts">
import MailIcon from '../../components/icons/mailIcon.vue'
import LinkedinIcon from '../../components/icons/linkedinIcon.vue'
import BlueskyIcon from '../../components/icons/blueskyIcon.vue'

interface SocialLink {
  icon: typeof MailIcon | typeof LinkedinIcon | typeof BlueskyIcon
  label: string
  href: string
  color: string
}

const socialLinks: SocialLink[] = [
  {
    icon: BlueskyIcon,
    label: 'Bluesky',
    href: 'https://bsky.app/profile/florianbx.bsky.social',
    color: 'hover:text-blue-400',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/florianbeaumont',
    color: 'hover:text-linkedin',
  },
  {
    icon: MailIcon,
    label: 'Email',
    href: 'mailto:florian.beaumont@gmail.com',
    color: 'hover:text-red-500',
  },
]
</script>

<template>
  <article class="relative bg-zinc-800 rounded-xl p-8 overflow-hidden transition-all duration-300">
    <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />

    <div class="relative z-10 flex flex-col items-center">
      <h2 class="text-5xl mb-2 font-bebas font-bold text-emerald-400">Contact me</h2>
      <p class="text-zinc-400 mb-8 text-sm">Let's get in touch!</p>

      <div class="flex justify-center items-center gap-8">
        <a
          v-for="link in socialLinks"
          :key="link.label"
          :href="link.href"
          :aria-label="link.label"
          target="_blank"
          rel="noopener noreferrer"
          class="p-3 rounded-xl bg-zinc-900/50 hover:scale-125 transition-all duration-200"
          :class="link.color"
        >
          <component :is="link.icon" class="w-10 h-10" />
        </a>
      </div>
    </div>
  </article>
</template>

<style scoped>
.font-bebas {
  font-family: 'Bebas Neue', sans-serif;
}
</style>
