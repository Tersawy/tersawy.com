<script setup lang="ts">
const links = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <header class="px-6 pt-7 sm:px-10 lg:px-14">
    <div class="mx-auto flex max-w-6xl flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
      <NuxtLink to="/" class="link-quiet text-[1.06rem] tracking-tight">
        Mohamed Tersawy
      </NuxtLink>

      <nav aria-label="Primary">
        <ul class="flex gap-6">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="label link-quiet transition-colors hover:text-ink aria-[current=page]:text-ink"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
