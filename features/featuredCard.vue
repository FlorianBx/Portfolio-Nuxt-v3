<script setup lang="ts">
defineProps<{
  title: string
  highlightedText?: string
  icon?: string
}>()
</script>

<template>
  <div class="bg-zinc-900 rounded-xl p-6 shadow-lg">
    <slot></slot>
    <div v-if="icon" class="text-4xl mb-4">{{ icon }}</div>
    <p class="text-lg">
      <slot name="title">{{ title }}</slot>
      <span v-if="highlightedText" class="text-apple-green font-bold">
        {{ highlightedText }}
      </span>
    </p>
  </div>
</template>
