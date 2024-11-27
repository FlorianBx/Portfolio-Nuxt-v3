<script setup lang="ts">
import { SquareArrowOutUpRight } from 'lucide-vue-next'

interface Props {
  title: string
  description: string
}

defineProps<Props>()
</script>

<template>
  <div class="relative bg-zinc-900/50 p-4 rounded-lg">
    <h3 class="text-xl mb-2">{{ title }}</h3>
    <p class="text-sm">{{ description }}</p>
    <SquareArrowOutUpRight class="absolute h-4 w-4 bottom-4 right-4" />
  </div>
</template>
