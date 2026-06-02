<script setup>
import { ref } from 'vue';
import { navigation } from '../../data/profile';
import { portfolioConfig } from '../../config/portfolio';
import CtaButton from '../ui/CtaButton.vue';
import ThemeToggle from './ThemeToggle.vue';

const isOpen = ref(false);
const closeMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/75">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
      <a href="#top" class="flex items-center gap-3" @click="closeMenu">
        <span class="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white dark:bg-sky-500 dark:text-slate-950">RS</span>
        <div>
          <p class="text-sm font-bold text-slate-950 dark:text-white">Rohan Singh</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">Laravel / Bagisto / Vue.js Developer</p>
        </div>
      </a>

      <div class="hidden items-center gap-7 lg:flex">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
        >
          {{ item.label }}
        </a>
      </div>

      <div class="hidden items-center gap-3 lg:flex">
        <ThemeToggle />
        <CtaButton :href="portfolioConfig.resumeUrl" label="Resume" variant="outline" external />
      </div>

      <div class="flex items-center gap-3 lg:hidden">
        <ThemeToggle />
        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
          :aria-expanded="isOpen"
          aria-label="Toggle navigation menu"
          @click="isOpen = !isOpen"
        >
          <span>{{ isOpen ? '×' : '≡' }}</span>
        </button>
      </div>
    </nav>

    <div v-if="isOpen" class="border-t border-slate-200 bg-white px-5 py-5 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
      <div class="flex flex-col gap-4">
        <a
          v-for="item in navigation"
          :key="item.href"
          :href="item.href"
          class="text-sm font-medium text-slate-700 dark:text-slate-200"
          @click="closeMenu"
        >
          {{ item.label }}
        </a>
        <CtaButton :href="portfolioConfig.resumeUrl" label="Download Resume" variant="outline" external />
      </div>
    </div>
  </header>
</template>
