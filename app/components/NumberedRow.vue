<script setup lang="ts">
defineProps<{
  /** Two-digit ordinal shown in the margin. The numbering is real: these read in sequence. */
  index: string
  heading?: string
}>()
</script>

<template>
  <div class="rule-top grid grid-cols-[2.6rem_1fr] gap-x-5 py-6 sm:grid-cols-[4rem_1fr] sm:gap-x-8">
    <span class="label mt-1.5 tabular-nums text-accent">{{ index }}</span>

    <div>
      <h3 v-if="heading" class="text-[1.24rem] leading-snug">{{ heading }}</h3>
      <div :class="heading ? 'mt-2.5' : ''" class="max-w-[62ch] leading-[1.6] text-ink-soft">
        <slot />
      </div>
    </div>
  </div>
</template>
