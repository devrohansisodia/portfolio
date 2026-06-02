<script setup>
import SectionHeading from '../ui/SectionHeading.vue';

defineProps({
  about: { type: Object, required: true },
});
</script>

<template>
  <section id="about" class="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-12">
    <div class="rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/75">
      <SectionHeading eyebrow="About" :title="about.title" :description="about.summary" />
      <div class="mt-6 grid gap-4 md:grid-cols-3">
        <div
          v-for="bullet in about.bullets"
          :key="bullet"
          class="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-7 text-slate-600 dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-300"
        >
          {{ bullet }}
        </div>
      </div>
    </div>
  </section>
</template>
