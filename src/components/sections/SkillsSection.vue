<script setup>
import SectionHeading from '../ui/SectionHeading.vue';
import SkillBadge from '../ui/SkillBadge.vue';

defineProps({
  groups: { type: Array, required: true },
});
</script>

<template>
  <section id="skills" class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
    <SectionHeading
      eyebrow="Skills"
      title="Validated stack breadth before project detail."
      description="Grouped by engineering responsibility so recruiters can confirm fit quickly."
    />
    <div class="mt-10 grid gap-5 xl:grid-cols-2">
      <article
        v-for="group in groups"
        :key="group.title"
        class="rounded-[2rem] border border-slate-200 bg-white/85 p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900/75"
      >
        <h3 class="text-lg font-bold text-slate-950 dark:text-white">{{ group.title }}</h3>
        <div class="mt-5 flex flex-wrap gap-2">
          <SkillBadge v-for="skill in group.skills" :key="skill" :label="skill" />
        </div>
      </article>
    </div>
  </section>
</template>
