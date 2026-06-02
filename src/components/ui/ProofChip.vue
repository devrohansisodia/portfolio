<script setup>
defineProps({
  label: { type: String, required: true },
});
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200"
  >
    {{ label }}
  </span>
</template>
