<script setup lang="ts">
import AboutMeCard from '../features/aboutMeCard.vue'
import LastProjectCard from '../features/lastProjectCard.vue'
import ContactCard from '../features/contactCard.vue'
import BlogArticlesCard from '../features/blogCard.vue'
import TechStackCard from '../features/techStackCard.vue'
import LatestTalkCard from '../features/latestTalkCard.vue'
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-3 grid-rows-6 gap-6 h-[calc(100vh-8rem)]">
    <!-- Les classes col-span et row-span sont maintenant dans les composants enfants -->
    <AboutMeCard class="col-span-1 row-span-4" />
    <LastProjectCard class="col-span-1 row-span-4" />
    <ContactCard class="col-span-1 row-span-2" />
    <BlogArticlesCard class="col-span-1 row-span-4" />
    <TechStackCard class="col-span-1 row-span-2" />
    <LatestTalkCard class="col-span-1 row-span-2" />
  </section>
</template>
