<script setup>
import SectionHeading from '../ui/SectionHeading.vue';
import TimelineItem from '../ui/TimelineItem.vue';

defineProps({
  items: { type: Array, required: true },
});
</script>

<template>
  <section id="experience" class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
    <SectionHeading
      eyebrow="Experience"
      title="Delivery history across product modules, integrations, and team contribution."
      description="Timeline-focused experience with clear emphasis on shipped work and operational impact."
    />
    <div class="relative mt-10 space-y-8 border-l border-dashed border-slate-300 pl-6 dark:border-slate-700">
      <TimelineItem v-for="item in items" :key="`${item.company}-${item.role}`" :item="item" />
    </div>
  </section>
</template>
