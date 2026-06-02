<script setup>
import CtaButton from '../ui/CtaButton.vue';
import SectionHeading from '../ui/SectionHeading.vue';
import TagBadge from '../ui/TagBadge.vue';

defineProps({
  source: { type: Object, required: true },
});
</script>

<template>
  <section class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
    <div class="rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/75">
      <TagBadge label="Latest Focus" tone="accent" />
      <SectionHeading
        class="mt-4"
        eyebrow="GitHub / Open Source"
        title="Public proof that complements the recruiter story."
        :description="source.summary"
      />
      <p class="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300">
        {{ source.latestFocus }}
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <CtaButton
          v-for="cta in source.ctas"
          :key="cta.label"
          :href="cta.href"
          :label="cta.label"
          :variant="cta.variant"
          :external="cta.external"
        />
      </div>
    </div>
  </section>
</template>
