<script setup lang="ts">
useSeoMeta({
  title: 'About',
  description:
    'A technical diploma in automotive technology, then six years teaching myself to build software — up to owning a multi-tenant SaaS platform end to end.',
  ogTitle: 'About — Mohamed Tersawy',
  ogDescription: 'How a diploma in automotive technology turned into owning a SaaS platform.',
})
</script>

<template>
  <PageIntro eyebrow="About" title="No computer science degree. " accent="Six years of shipping" title-end=".">
    <p>
      My diploma is in automotive technology. Everything I do professionally, I taught myself —
      starting in 2019 and, so far, not stopping.
    </p>
  </PageIntro>

  <section class="mt-24 px-6 sm:px-10 lg:px-14">
    <div class="mx-auto max-w-6xl">
      <div class="max-w-[62ch] text-[1.06rem] leading-[1.72] text-ink-soft lg:ml-auto">
        <p>
          I started on a hospital ERP in 2019 — Laravel, MySQL, Vue — and spent two years learning
          in the least forgiving way available: maintaining a system other people depended on
          daily. Then two years freelancing across inventory, CRM, auctions and education, which is
          where I got fast, and where I learned that most projects fail on the data model long
          before they fail on the framework.
        </p>
        <p class="mt-6">
          Cyber Sky gave me infrastructure. Building penetration-testing labs meant every button in
          the UI eventually became a Terraform plan and a bill, and I stopped thinking of "the
          server" as somebody else's department.
        </p>
        <p class="mt-6">
          Then I wrote a company's ERP from an empty repository, watched it work, and got to do the
          rarest thing in this job: rebuild something with everything I'd learned the first time,
          on purpose, with the original still running. That's Golify. Owning it — schema through
          nginx — is the most useful education I've had.
        </p>
      </div>

      <div class="mt-24">
        <h2 class="label">How I work</h2>

        <div class="mt-8">
          <NumberedRow index="01" heading="I write things down before I write them">
            <p>
              Specs, decision records, runbooks, the gotchas that cost me an afternoon. Partly for
              the next person, mostly because I've been the next person often enough to know how
              little of this I'll remember in six months.
            </p>
          </NumberedRow>

          <NumberedRow index="02" heading="Correctness first where money is involved">
            <p>
              Anywhere a number ends up on someone's invoice, I'd rather be slow and exact.
              Elsewhere I'll happily ship the rough version and fix it once it's clear what it
              actually needed to be.
            </p>
          </NumberedRow>

          <NumberedRow index="03" heading="I don't hand things off at the edge of my comfort">
            <p>
              If the bug is in the database, the pipeline, the nginx config or the migration I ran
              last week, it's still my bug. Owning the whole path is slower to learn and much
              faster to debug.
            </p>
          </NumberedRow>
        </div>
      </div>

      <div class="mt-24 rule-top pt-10">
        <p class="max-w-[58ch] leading-[1.68] text-ink-soft">
          Arabic is my first language; I work in English every day — specs, pull requests,
          documentation. Based in Giza, comfortable across European and Asian hours.
          <NuxtLink to="/contact" class="link-quiet text-ink">Say hello →</NuxtLink>
        </p>
      </div>
    </div>
  </section>
</template>
