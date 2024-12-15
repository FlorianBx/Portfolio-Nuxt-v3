<script setup lang="ts">
import { SquareArrowOutUpRight } from 'lucide-vue-next'

interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div class="relative h-32 sm:h-28 bg-zinc-900/50 p-4 rounded-lg">
    <h3 class="text-xl mb-2">{{ title }}</h3>
    <p class="text-sm">{{ description }}</p>
    <SquareArrowOutUpRight class="absolute text-emerald-400 h-4 w-4 bottom-4 right-4" />
  </div>
</template>
