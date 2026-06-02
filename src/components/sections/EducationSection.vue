<script setup>
import SectionHeading from '../ui/SectionHeading.vue';

defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <section class="mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
    <div class="rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/75">
      <SectionHeading
        eyebrow="Education"
        title="Academic background"
        description="Kept compact to support the professional sections rather than compete with them."
      />
      <div class="mt-8 grid gap-4 md:grid-cols-3">
        <article
          v-for="item in items"
          :key="item.title"
          class="rounded-2xl border border-slate-200 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-950/70"
        >
          <h3 class="text-base font-bold text-slate-950 dark:text-white">{{ item.title }}</h3>
          <p v-if="item.institution" class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ item.institution }}</p>
          <p v-if="item.meta" class="mt-1 text-sm text-slate-500 dark:text-slate-400">{{ item.meta }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
