<script setup lang="ts">
useHead({
  titleTemplate: (title?: string) =>
    title ? `${title} — Mohamed Tersawy` : 'Mohamed Tersawy — Full-stack developer',
})
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <a
      href="#main"
      class="label sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-paper-raised focus:px-3 focus:py-2 focus:text-ink"
    >
      Skip to content
    </a>

    <SiteHeader />

    <main id="main" class="flex-1">
      <NuxtPage />
    </main>

    <SiteFooter />
  </div>
</template>
