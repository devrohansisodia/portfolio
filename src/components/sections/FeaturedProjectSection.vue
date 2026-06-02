<script setup>
import CtaButton from '../ui/CtaButton.vue';
import SectionHeading from '../ui/SectionHeading.vue';
import SkillBadge from '../ui/SkillBadge.vue';
import TagBadge from '../ui/TagBadge.vue';

defineProps({
  project: { type: Object, required: true },
});
</script>

<template>
  <section id="featured-project" class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
    <div class="rounded-[2.5rem] border border-slate-200 bg-white/85 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/80 md:p-10">
      <div class="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <TagBadge :label="project.status" tone="accent" />
          <SectionHeading
            class="mt-4"
            eyebrow="Flagship Project"
            :title="`${project.name} — ${project.subtitle}`"
            :description="project.description"
          />

          <div class="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <div
              v-for="item in project.architectureHighlights"
              :key="item"
              class="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-200"
            >
              {{ item }}
            </div>
          </div>

          <div class="mt-8 grid gap-4">
            <div
              v-for="feature in project.features"
              :key="feature"
              class="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300"
            >
              {{ feature }}
            </div>
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <SkillBadge v-for="item in project.stack" :key="item" :label="item" />
          </div>

          <div class="mt-8 flex flex-wrap gap-3">
            <CtaButton :href="project.githubUrl" label="View GitHub Repository" variant="primary" external />
            <span class="inline-flex items-center rounded-full border border-dashed border-slate-300 px-5 py-3 text-sm font-semibold text-slate-500 dark:border-slate-700 dark:text-slate-400">
              Live Demo Coming Soon
            </span>
          </div>
        </div>

        <div class="grid gap-5">
          <div class="rounded-[2rem] bg-slate-950 p-6 text-slate-200 shadow-glow">
            <p class="font-mono text-xs uppercase tracking-[0.3em] text-sky-300">Architecture Lens</p>
            <div class="mt-5 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <p class="text-xs uppercase tracking-[0.24em] text-slate-400">Packages</p>
                <p class="mt-2 text-sm text-slate-200">Bagisto-style modular package boundaries for feature isolation and growth.</p>
              </div>
              <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <p class="text-xs uppercase tracking-[0.24em] text-slate-400">Reader Experience</p>
                <p class="mt-2 text-sm text-slate-200">Frontend website, comments, bookmarks, feeds, and production-facing content discovery.</p>
              </div>
              <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <p class="text-xs uppercase tracking-[0.24em] text-slate-400">Publishing Ops</p>
                <p class="mt-2 text-sm text-slate-200">Admin workflows for articles, media, SEO, ads, and structured publishing controls.</p>
              </div>
              <div class="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
                <p class="text-xs uppercase tracking-[0.24em] text-slate-400">Future Preview Slot</p>
                <p class="mt-2 text-sm text-slate-200">{{ project.previewSupport.note }}</p>
              </div>
            </div>
          </div>

          <div class="rounded-[2rem] border border-slate-200 bg-slate-50/80 p-6 dark:border-slate-800 dark:bg-slate-950/70">
            <p class="font-mono text-xs uppercase tracking-[0.3em] text-sky-500">Why It Matters</p>
            <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              NewsTech demonstrates modular Laravel architecture, admin tooling, reader-facing product design, and practical content operations in one cohesive flagship build.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
