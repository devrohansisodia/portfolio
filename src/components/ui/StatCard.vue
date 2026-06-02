<script setup>
defineProps({
  value: { type: String, required: true },
  label: { type: String, required: true },
});
</script>

<template>
  <div class="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
    <div class="text-3xl font-extrabold text-slate-950 dark:text-white">{{ value }}</div>
    <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ label }}</p>
  </div>
</template>
