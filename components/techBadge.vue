<script setup lang="ts">
interface Props {
  name: string
  color: string
}

defineProps<Props>()
</script>

<template>
  <span class="px-3 py-1 rounded-md text-sm" :class="color">{{ name }}</span>
</template>
