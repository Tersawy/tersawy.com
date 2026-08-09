<script setup lang="ts">
useSeoMeta({
  title: 'Work',
  description:
    'Golify — a multi-tenant SaaS ERP with per-tenant database isolation, a double-entry accounting engine, and infrastructure I own. Plus earlier work at Cyber Sky and on my own.',
  ogTitle: 'Work — Mohamed Tersawy',
  ogDescription:
    'Multi-tenancy, double-entry accounting, exact money, and production ownership.',
})

const earlier = [
  {
    name: 'MotorFusion Bids',
    note: 'Car auction platform with real-time bidding. Node.js, Vue, Vuex, S3, vue-i18n.',
  },
  {
    name: 'Stockiny',
    note: 'Inventory across stores, orders, purchases, suppliers and sales. Node.js, Vue, Vuex, Chart.js.',
  },
  {
    name: 'Customer Relationship Management',
    note: 'Feature-rich CRM with live updates over Socket.io and S3 image storage.',
  },
  {
    name: 'Mastery English Learning',
    note: 'Learning platform — student management, activity tracking, exams, real-time chat.',
  },
  {
    name: 'Law Firm Management',
    note: 'Case, team and file management for law firms. React, Django, MySQL.',
  },
]
</script>

<template>
  <PageIntro
    eyebrow="Work"
    title="Mostly one system, "
    accent="taken seriously"
    title-end="."
  >
    <p>
      I'd rather show one platform in depth than list twenty things I touched once. Golify is where
      most of the last two and a half years went, so it gets most of this page.
    </p>
  </PageIntro>

  <!-- ============================= Golify ============================= -->
  <section class="mt-24 px-6 sm:px-10 lg:px-14">
    <div class="mx-auto max-w-6xl">
      <div class="rule-top pt-6 lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <h2 class="text-[length:var(--text-title)] leading-tight">Golify</h2>
          <p class="label mt-3">2024 — present · multi-tenant SaaS ERP</p>
        </div>

        <div class="mt-8 max-w-[58ch] text-[1.06rem] leading-[1.68] text-ink-soft lg:mt-1">
        <p>
          It started as one company's internal ERP, which I wrote. It worked well enough that the
          question stopped being "does this serve us" and became "how many companies have this
          problem". So we rebuilt it as a commercial product: every customer on their own database,
          a real general ledger underneath, and a design that assumed strangers would use it.
        </p>
        <p class="mt-6">
          I own it end to end — the NestJS API, the tenant and admin SPAs in Vue 3, the Nuxt
          marketing site, and the cloud infrastructure and delivery pipeline all of it runs on.
        </p>
        </div>
      </div>

      <div class="mt-14">
        <NumberedRow index="01" heading="Multi-tenancy that the client can't lie about">
          <p>
            Every tenant gets an isolated MongoDB database. Which tenant you are is resolved at the
            edge from the subdomain and handed to the API as a trusted header — the browser never
            gets a say, so a compromised client can't ask for someone else's data. One build serves
            every tenant, and a control-plane provisions, migrates and monitors them, keeping every
            third-party credential encrypted and out of source, environment files, logs and API
            responses.
          </p>
        </NumberedRow>

        <NumberedRow index="02" heading="A general ledger, not a totals column">
          <p>
            A rule-based double-entry engine journals every order, payment, expense and container
            automatically, behind a chart of accounts, manual journal entries, live contact
            balances and a balance sheet whose invariants are written down rather than assumed.
            Multi-currency runs through it — exchange rates, per-currency billing contacts, and
            commission pricing that has to agree with itself across six export paths.
          </p>
        </NumberedRow>

        <NumberedRow index="03" heading="Money that stays exact">
          <p>
            Money stored as a float drifts —
            <span class="whitespace-nowrap">1171.54 − 944.59</span> comes back as
            226.94999999999993, in JavaScript and inside MongoDB alike. I moved every monetary
            field to Decimal128, with precision following each field's own currency, and shipped it
            without a maintenance window: readers learned to tolerate both types first, the schema
            flipped second, and only then was data converted, one tenant at a time, against a
            system that stayed up. The API contract never changed, so nothing client-side had to
            move.
          </p>
        </NumberedRow>

        <NumberedRow index="04" heading="Shipping as a merge">
          <p>
            Production runs on Alibaba Cloud — ECS, nginx with wildcard TLS, PM2, an ApsaraDB
            replica set, Redis and object storage, each reached through its own least-privilege
            identity rather than a root account. Path-filtered GitHub Actions mean a change deploys
            only the app it touches, with an isolated staging environment ahead of production. I
            also ran the cutover from the company's original system onto the new platform.
          </p>
        </NumberedRow>
      </div>
    </div>
  </section>

  <!-- ============================= Cyber Sky ============================= -->
  <section class="mt-24 px-6 sm:px-10 lg:px-14">
    <div class="mx-auto max-w-6xl">
      <div class="rule-top pt-6 lg:grid lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <h2 class="text-[length:var(--text-title)] leading-tight">Cyber Labs</h2>
          <p class="label mt-3">Cyber Sky · 2022 — 2024</p>
        </div>

        <div class="mt-8 max-w-[58ch] leading-[1.68] text-ink-soft lg:mt-1">
        <p>
          Virtual labs where users spin up and run penetration tests. I built the platform and its
          admin dashboard from scratch, plus a separate Terraform management service — Node.js,
          Express, MongoDB — exposing lab creation, pausing, starting, status and destruction, and
          orchestrated the cloud resources behind it with the in-house DevOps team.
        </p>
        <p class="mt-6">
          The interesting part wasn't the security domain; it was that every action had real
          infrastructure and real cost on the other end of it.
        </p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================= Earlier ============================= -->
  <section class="mt-24 px-6 sm:px-10 lg:px-14">
    <div class="mx-auto max-w-6xl">
      <div class="rule-top flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pt-6">
        <h2 class="text-[length:var(--text-title)] leading-tight">Earlier</h2>
        <p class="label">Freelance · 2021 — 2022 · selected</p>
      </div>

      <dl class="mt-8">
        <div
          v-for="item in earlier"
          :key="item.name"
          class="rule-top grid gap-x-10 gap-y-1 py-5 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)]"
        >
          <dt class="text-[1.06rem]">{{ item.name }}</dt>
          <dd class="max-w-[58ch] leading-[1.6] text-muted">{{ item.note }}</dd>
        </div>
      </dl>

      <p class="mt-10 max-w-[58ch] leading-[1.65] text-ink-soft">
        Before that, two years on a hospital ERP at Healthy Cure — Laravel and MySQL on the back,
        Vue on the front — which is where I learned that the schema decides how much pain the next
        two years hold.
      </p>
    </div>
  </section>
</template>
