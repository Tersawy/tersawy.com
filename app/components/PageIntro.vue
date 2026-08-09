<script setup lang="ts">
defineProps<{
  eyebrow: string
  /** Rendered before the accented phrase. */
  title: string
  /** Set in italic wine — the single loud moment on the page. Optional. */
  accent?: string
  /** Rendered after the accented phrase. */
  titleEnd?: string
}>()
</script>

<template>
  <section class="px-6 pt-16 sm:px-10 sm:pt-24 lg:px-14">
    <div class="mx-auto max-w-6xl">
      <p class="label">{{ eyebrow }}</p>

      <h1 class="mt-6 max-w-[16ch] text-[length:var(--text-display)] leading-[0.94] font-normal">
        {{ title }}<em v-if="accent" class="text-accent italic">{{ accent }}</em>{{ titleEnd }}
      </h1>

      <!--
        The lede sits in the second column. The first column carries a lead-in rule rather than
        being left empty: at this width an unfilled half reads as a mistake, whereas a rule
        entering the text reads as typesetting.
      -->
      <div v-if="$slots.default" class="mt-10 lg:mt-14 lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div class="hidden lg:block" aria-hidden="true">
          <span class="rule-top mt-3.5 block" />
        </div>

        <div class="max-w-[46ch] text-[length:var(--text-lede)] leading-[1.62] text-ink-soft">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
