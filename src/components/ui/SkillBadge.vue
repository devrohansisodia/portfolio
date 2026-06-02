<script setup>
defineProps({
  label: { type: String, required: true },
});
</script>

<template>
  <span class="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
    {{ label }}
  </span>
</template>
