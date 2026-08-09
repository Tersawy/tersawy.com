<script setup lang="ts">
// No `title` here on purpose: the template in app.vue supplies the full home-page title, and
// setting one would produce "Mohamed El-Tersawy — … — Mohamed El-Tersawy".
useSeoMeta({
  description:
    'Full-stack developer in Giza, Egypt. Six years building systems where being wrong is expensive — orders, ledgers, money — and owning them through to production.',
  ogTitle: 'Mohamed El-Tersawy — Full-stack developer',
  ogDescription:
    'Six years building systems where being wrong is expensive, and owning them through to production.',
  ogType: 'website',
})
</script>

<template>
  <PageIntro
    eyebrow="Full-stack developer · Giza, Egypt"
    title="I build software "
    accent="the whole way down"
    title-end="."
  >
    <p>
      Six years of it, most of them on systems where being wrong is expensive — orders, ledgers,
      money that has to reconcile. I'm most useful where the API, the interface, and the
      infrastructure underneath are all one person's problem.
    </p>
  </PageIntro>

  <section class="mt-24 px-6 sm:px-10 lg:px-14">
    <div class="mx-auto max-w-6xl">
      <h2 class="label">What I'm good at</h2>

      <div class="mt-8">
        <NumberedRow index="01" heading="Back end and data modelling">
          <p>
            NestJS and MongoDB day to day, Laravel and MySQL before that. The work I like is the
            part most people skip: getting the model right, keeping writes correct under
            concurrency, and making sure the numbers still add up a year later.
          </p>
        </NumberedRow>

        <NumberedRow index="02" heading="Interfaces that survive real use">
          <p>
            Vue 3 and Nuxt, with enough Tailwind to stay out of my own way. Dense operational
            screens rather than marketing pages — tables, filters, forms with opinions, and the
            unglamorous states that decide whether people trust the thing.
          </p>
        </NumberedRow>

        <NumberedRow index="03" heading="Getting it into production and keeping it there">
          <p>
            nginx, PM2, CI/CD, and data migrations run against systems that are already live with
            other people's data in them. Shipping is a merge; everything that makes that safe is
            work I've done rather than read about.
          </p>
        </NumberedRow>
      </div>
    </div>
  </section>

  <section class="mt-24 px-6 sm:px-10 lg:px-14">
    <div class="mx-auto max-w-6xl rule-top pt-10">
      <p class="label">Currently</p>

      <div class="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <h2 class="text-[length:var(--text-title)] leading-[1.05]">
          Building and running <em class="text-accent italic">Golify</em>
        </h2>

        <div class="max-w-[52ch] leading-[1.65] text-ink-soft">
          <p>
            A multi-tenant SaaS ERP for logistics and accounting. I wrote the company's original
            in-house system; when the market turned out to be bigger than one company, I led its
            re-platform into a commercial product and have owned it end to end since.
          </p>
          <p class="mt-6">
            <NuxtLink to="/work" class="link-quiet text-ink">
              What that actually involved →
            </NuxtLink>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
