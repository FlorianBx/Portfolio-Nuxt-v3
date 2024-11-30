<script setup lang="ts">
const { path } = useRoute()

const { data: article } = await useAsyncData(`content-${path}`, () =>
  queryContent('blog')
    .where({
      _path: path,
      draft: { $ne: true },
    })
    .findOne()
)

if (!article.value) {
  throw createError({
    statusCode: 404,
    message: 'Article non trouvé',
  })
}
</script>

<template>
  <article v-if="article" class="prose prose-invert mx-auto py-12 px-4">
    <h1 class="text-5xl font-bebas text-emerald-400">{{ article.title }}</h1>

    <div class="flex items-center gap-4 my-6">
      <time class="text-zinc-400">
        {{
          new Date(article.date).toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })
        }}
      </time>

      <div class="flex gap-2">
        <TechBadge
          v-for="tag in article.tags"
          :key="tag.name"
          :name="tag.name"
          :color="tag.color"
        />
      </div>
    </div>
    <div class="mt-8 prose">
      <ContentDoc />
    </div>
  </article>
</template>

<style>
.prose {
  max-width: 65ch;
}
</style>
