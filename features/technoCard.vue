<script setup lang="ts">
const technologies = [
  { name: 'Vue.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Nuxt.js', level: 85 },
  { name: 'Accessibility', level: 95 },
]
</script>

<template>
  <div class="card bg-zinc-900 p-6 rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Expertise</h2>
    <div class="space-y-4">
      <div v-for="tech in technologies" :key="tech.name" class="flex flex-col">
        <div class="flex justify-between mb-1">
          <span>{{ tech.name }}</span>
          <span>{{ tech.level }}%</span>
        </div>
        <div class="h-2 bg-gray-700 rounded">
          <div class="h-full bg-emerald-500 rounded" :style="{ width: `${tech.level}%` }" />
        </div>
      </div>
    </div>
  </div>
</template>
