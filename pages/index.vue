<script setup lang="ts">
import AboutMeCard from '../features/cards/aboutMeCard.vue'
import LastProjectCard from '../features/cards/lastProjectCard.vue'
import ContactCard from '../features/cards/contactCard.vue'
import BlogArticlesCard from '../features/cards/blogCard.vue'
import TechStackCard from '../features/cards/techStackCard.vue'
import LatestTalkCard from '../features/cards/latestTalkCard.vue'
import ContentModal from '../components/contentModal.vue'
import { useModalStore } from '../stores/useModalStore'

const modalStore = useModalStore()
</script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-3 grid-rows-6 gap-6 h-[calc(100vh-8rem)]">
    <AboutMeCard class="col-span-1 md:col-span-1 row-span-4" />
    <LastProjectCard class="col-span-1 row-span-4" />
    <ContactCard class="col-span-1 row-span-2" />
    <BlogArticlesCard class="col-span-1 row-span-4" />
    <TechStackCard class="col-span-1 row-span-2" />
    <LatestTalkCard class="col-span-1 row-span-2" />

    <ContentModal v-model="modalStore.isOpen" :initial-slide-id="modalStore.currentSlideId" />
  </section>
</template>
