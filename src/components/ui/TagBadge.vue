<script setup>
defineProps({
  label: { type: String, required: true },
  tone: { type: String, default: 'default' },
});
</script>

<template>
  <span
    class="inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide"
    :class="
      tone === 'accent'
        ? 'border-sky-300 bg-sky-50 text-sky-700 dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-sky-200'
        : 'border-slate-200 bg-white text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
    "
  >
    {{ label }}
  </span>
</template>
