<script setup>
defineProps({
  item: { type: Object, required: true },
});
</script>

<template>
  <div class="relative pl-10">
    <div class="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-sky-200 bg-sky-500 dark:border-sky-500/30"></div>
    <div class="rounded-[2rem] border border-slate-200 bg-white/85 p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900/75">
      <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 class="text-xl font-bold text-slate-950 dark:text-white">{{ item.role }}</h3>
          <p class="text-sm font-medium text-sky-600 dark:text-sky-300">{{ item.company }}</p>
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ item.duration }}</p>
      </div>
      <ul class="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        <li v-for="point in item.points" :key="point" class="flex gap-3">
          <span class="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500"></span>
          <span>{{ point }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
