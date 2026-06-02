<script setup>
import { portfolioConfig } from '../../config/portfolio';
</script>

<template>
  <footer class="border-t border-slate-200/70 py-10 dark:border-slate-800/70">
    <div class="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between md:px-8">
      <p>Rohan Singh · Laravel / Bagisto / Vue.js Developer</p>
      <div class="flex flex-wrap gap-4">
        <a :href="portfolioConfig.githubUrl" target="_blank" rel="noreferrer noopener" class="hover:text-sky-600 dark:hover:text-sky-300">GitHub</a>
        <a :href="portfolioConfig.linkedinUrl" target="_blank" rel="noreferrer noopener" class="hover:text-sky-600 dark:hover:text-sky-300">LinkedIn</a>
        <a :href="portfolioConfig.emailHref" class="hover:text-sky-600 dark:hover:text-sky-300">Email</a>
      </div>
    </div>
  </footer>
</template>
