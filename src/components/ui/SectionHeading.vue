<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  align: { type: String, default: 'left' },
});
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
    <p v-if="eyebrow" class="text-xs font-semibold uppercase tracking-[0.35em] text-sky-500">{{ eyebrow }}</p>
    <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white md:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
      {{ description }}
    </p>
  </div>
</template>
