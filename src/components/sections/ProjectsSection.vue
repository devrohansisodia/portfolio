<script setup>
import SectionHeading from '../ui/SectionHeading.vue';
import ProjectCard from '../ui/ProjectCard.vue';

defineProps({
  projects: { type: Array, required: true },
});
</script>

<template>
  <section id="projects" class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
    <SectionHeading
      eyebrow="Professional Projects"
      title="Supporting proof across marketplace, SaaS, POS, payments, shipping, and analytics."
      description="These projects reinforce breadth and production relevance without competing with the NewsTech flagship section."
    />
    <div class="mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
      <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
    </div>
  </section>
</template>
