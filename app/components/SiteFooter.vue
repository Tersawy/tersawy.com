<script setup lang="ts">
const year = 2026
</script>

<template>
  <footer class="mt-24 px-6 pb-12 sm:px-10 lg:px-14">
    <div class="mx-auto max-w-6xl rule-top pt-6">
      <div class="flex flex-wrap items-baseline justify-between gap-x-10 gap-y-4">
        <p class="label">Giza, Egypt · UTC+2</p>

        <ul class="flex flex-wrap gap-x-7 gap-y-2">
          <li>
            <a href="mailto:contact@tersawy.com" class="label link-quiet hover:text-ink">Email</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tersawy"
              rel="me noopener"
              class="label link-quiet hover:text-ink"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tersawy"
              rel="me noopener"
              class="label link-quiet hover:text-ink"
            >
              GitHub
            </a>
          </li>
        </ul>

        <p class="label">© {{ year }}</p>
      </div>
    </div>
  </footer>
</template>
