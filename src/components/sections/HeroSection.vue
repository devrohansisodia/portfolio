<script setup>
import { portfolioConfig } from '../../config/portfolio';
import CtaButton from '../ui/CtaButton.vue';
import ProofChip from '../ui/ProofChip.vue';
import TagBadge from '../ui/TagBadge.vue';

defineProps({
  hero: { type: Object, required: true },
});
</script>

<template>
  <section id="top" class="relative overflow-hidden">
    <div class="absolute inset-0 bg-hero-grid dark:opacity-90"></div>
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/40 to-transparent"></div>
    <div class="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
      <div>
        <div class="flex flex-wrap gap-3">
          <TagBadge v-for="badge in hero.badges" :key="badge" :label="badge" tone="accent" />
        </div>
        <h1 class="mt-8 text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-6xl">
          {{ hero.name }}
        </h1>
        <p class="mt-5 font-mono text-base font-semibold uppercase tracking-[0.28em] text-sky-600 dark:text-sky-300">
          {{ hero.role }}
        </p>
        <p class="mt-6 max-w-2xl text-xl leading-8 text-slate-700 dark:text-slate-200 md:text-2xl">
          {{ hero.tagline }}
        </p>
        <p class="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {{ hero.summary }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <ProofChip v-for="chip in hero.proofChips" :key="chip" :label="chip" />
        </div>
        <div class="mt-10 flex flex-wrap gap-3">
          <CtaButton
            v-for="cta in hero.ctas"
            :key="cta.label"
            :href="cta.href"
            :label="cta.label"
            :variant="cta.variant"
            :external="cta.external"
          />
        </div>
        <div class="mt-10 rounded-[2rem] border border-slate-200/80 bg-white/75 p-5 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
          <p class="text-xs font-semibold uppercase tracking-[0.3em] text-sky-500">Current Momentum</p>
          <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ hero.spotlight }}</p>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-br from-sky-500/20 via-transparent to-slate-950/10 blur-2xl dark:from-sky-500/30 dark:to-sky-500/10"></div>
        <div class="relative rounded-[2.5rem] border border-slate-200/80 bg-white/80 p-6 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
          <div class="rounded-[2rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950">
            <img
              :src="portfolioConfig.profileImageUrl"
              alt="Portrait of Rohan Singh"
              class="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
          </div>
          <div class="mt-6 rounded-[2rem] bg-slate-950 p-5 text-slate-200 dark:bg-slate-900">
            <p class="font-mono text-xs uppercase tracking-[0.25em] text-sky-300">Developer Snapshot</p>
            <div class="mt-4 space-y-3 text-sm">
              <p><span class="text-slate-400">Focus:</span> eCommerce, SaaS, marketplace, POS</p>
              <p><span class="text-slate-400">Latest Flagship:</span> NewsTech</p>
              <p><span class="text-slate-400">Location:</span> {{ portfolioConfig.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
