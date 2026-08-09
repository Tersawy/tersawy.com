<script setup lang="ts">
useSeoMeta({
  title: 'Contact',
  description: 'Email contact@tersawy.com, or find me on LinkedIn and GitHub. Based in Giza, Egypt (UTC+2).',
  ogTitle: 'Contact — Mohamed El-Tersawy',
  ogDescription: 'contact@tersawy.com · Giza, Egypt (UTC+2)',
})

const channels = [
  {
    index: '01',
    label: 'Email',
    value: 'contact@tersawy.com',
    href: 'mailto:contact@tersawy.com',
    note: 'The one I actually read. Expect a reply within a day.',
  },
  {
    index: '02',
    label: 'LinkedIn',
    value: 'linkedin.com/in/tersawy',
    href: 'https://www.linkedin.com/in/tersawy',
    note: 'Where the full history lives, if you want dates and titles.',
  },
  {
    index: '03',
    label: 'GitHub',
    value: 'github.com/tersawy',
    href: 'https://github.com/tersawy',
    note: 'Quieter than my week is — most of what I build lives in a private company monorepo.',
  },
]
</script>

<template>
  <PageIntro eyebrow="Contact" title="Easiest way is " accent="just to email me" title-end=".">
    <p>
      I'm open to hearing about work where owning the whole stack is the point rather than the
      exception — especially anything with a ledger in it.
    </p>
  </PageIntro>

  <section class="mt-24 px-6 sm:px-10 lg:px-14">
    <div class="mx-auto max-w-6xl">
      <NumberedRow v-for="channel in channels" :key="channel.label" :index="channel.index">
        <!-- Fixed label column so the three addresses share a left edge. -->
        <div class="flex flex-wrap items-baseline gap-x-5 gap-y-1">
          <p class="label w-20 shrink-0">{{ channel.label }}</p>
          <a :href="channel.href" rel="me noopener" class="link-quiet text-[1.24rem] text-ink">
            {{ channel.value }}
          </a>
        </div>
        <p class="mt-2 max-w-[58ch] text-muted">{{ channel.note }}</p>
      </NumberedRow>

      <div class="rule-top" />
    </div>
  </section>
</template>
