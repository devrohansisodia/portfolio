<script setup>
import SkillBadge from './SkillBadge.vue';
import TagBadge from './TagBadge.vue';

defineProps({
  project: { type: Object, required: true },
});
</script>

<template>
  <article class="group rounded-[2rem] border border-slate-200 bg-white/85 p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-sky-300 dark:border-slate-800 dark:bg-slate-900/75 dark:hover:border-sky-500/40">
    <div class="flex flex-wrap gap-2">
      <TagBadge v-for="category in project.categories" :key="category" :label="category" tone="accent" />
    </div>
    <h3 class="mt-5 text-xl font-bold text-slate-950 dark:text-white">{{ project.title }}</h3>
    <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ project.description }}</p>
    <div class="mt-5 flex flex-wrap gap-2">
      <SkillBadge v-for="item in project.tech" :key="item" :label="item" />
    </div>
  </article>
</template>
