<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; statusMessage?: string } }>()

const isMissing = props.error.statusCode === 404
</script>

<template>
  <div class="flex min-h-dvh flex-col">
    <SiteHeader />

    <main class="flex-1">
      <PageIntro
        :eyebrow="`Error ${error.statusCode}`"
        :title="isMissing ? 'That page ' : 'Something '"
        :accent="isMissing ? 'is not here' : 'went wrong'"
        title-end="."
      >
        <p v-if="isMissing">
          The link may be old, or I may have moved something. The
          <NuxtLink to="/work" class="link-quiet text-ink">work</NuxtLink> is probably what you
          were after.
        </p>
        <p v-else>
          {{ error.statusMessage || 'An unexpected error occurred.' }}
          <NuxtLink to="/" class="link-quiet text-ink">Start again from the beginning →</NuxtLink>
        </p>
      </PageIntro>
    </main>

    <SiteFooter />
  </div>
</template>
