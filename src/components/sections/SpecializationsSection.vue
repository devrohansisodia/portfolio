<script setup>
import SectionHeading from '../ui/SectionHeading.vue';

defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <section class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
    <SectionHeading
      eyebrow="Specializations"
      title="Focused on recruiter-relevant commerce and product engineering domains."
      description="The strongest fit sits at the intersection of Laravel, Bagisto, modular product architecture, and operational eCommerce systems."
    />
    <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <article
        v-for="item in items"
        :key="item.title"
        class="rounded-[2rem] border border-slate-200 bg-white/85 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/75"
      >
        <h3 class="text-lg font-bold text-slate-950 dark:text-white">{{ item.title }}</h3>
        <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ item.description }}</p>
      </article>
    </div>
  </section>
</template>
