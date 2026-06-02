<script setup>
import { stats } from '../../data/stats';
import SectionHeading from '../ui/SectionHeading.vue';
import StatCard from '../ui/StatCard.vue';
</script>

<template>
  <section class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
    <SectionHeading
      eyebrow="Proof"
      title="Fast credibility markers for recruiters and hiring managers."
      description="A concise snapshot of delivery volume, integrations, mentoring, and platform experience."
    />
    <div class="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard v-for="item in stats" :key="item.label" :value="item.value" :label="item.label" />
    </div>
  </section>
</template>
