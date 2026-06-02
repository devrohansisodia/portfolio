<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: { type: String, default: '' },
  label: { type: String, required: true },
  variant: { type: String, default: 'primary' },
  external: { type: Boolean, default: false },
});

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500';

  const variants = {
    primary:
      'bg-slate-950 text-white shadow-soft hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400',
    secondary:
      'bg-sky-500 text-slate-950 shadow-glow hover:-translate-y-0.5 hover:bg-sky-400 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white',
    outline:
      'border border-slate-300 bg-white/75 text-slate-800 hover:-translate-y-0.5 hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-300',
    ghost:
      'text-slate-700 hover:-translate-y-0.5 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300',
  };

  return `${base} ${variants[props.variant] || variants.primary}`;
});
</script>

<template>
  <a
    :href="href"
    :class="classes"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noreferrer noopener' : undefined"
  >
    {{ label }}
  </a>
</template>
