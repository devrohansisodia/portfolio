<script setup>
import { reactive } from 'vue';
import { portfolioConfig } from '../../config/portfolio';
import SectionHeading from '../ui/SectionHeading.vue';

defineProps({
  contact: { type: Object, required: true },
});

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const submitForm = () => {
  const fromName = form.name.trim() || 'Portfolio Visitor';
  const fromEmail = form.email.trim() || 'Not provided';
  const message = form.message.trim() || 'Hello Rohan, I would like to connect.';
  const subject = encodeURIComponent(`Portfolio Inquiry from ${fromName}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${fromName}\nEmail: ${fromEmail}`);
  window.location.href = `mailto:${portfolioConfig.email}?subject=${subject}&body=${body}`;
};
</script>

<template>
  <section id="contact" class="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
    <div class="grid gap-8 rounded-[2.5rem] border border-slate-200 bg-white/85 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/80 lg:grid-cols-[0.9fr_1.1fr] md:p-10">
      <div>
        <SectionHeading eyebrow="Contact" :title="contact.title" :description="contact.intro" />
        <div class="mt-8 space-y-4">
          <div
            v-for="method in contact.methods"
            :key="method.label"
            class="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 dark:border-slate-800 dark:bg-slate-950/70"
          >
            <p class="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{{ method.label }}</p>
            <a
              v-if="method.href"
              :href="method.href"
              class="mt-2 block text-sm font-medium text-slate-800 hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-300"
              :target="method.href.startsWith('http') ? '_blank' : undefined"
              :rel="method.href.startsWith('http') ? 'noreferrer noopener' : undefined"
            >
              {{ method.value }}
            </a>
            <p v-else class="mt-2 text-sm font-medium text-slate-800 dark:text-slate-200">{{ method.value }}</p>
          </div>
        </div>
      </div>

      <div class="rounded-[2rem] bg-slate-950 p-6 text-slate-100">
        <p class="font-mono text-xs uppercase tracking-[0.3em] text-sky-300">Send a Message</p>
        <form class="mt-6 space-y-5" @submit.prevent="submitForm">
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-slate-200">Name</span>
            <input
              v-model="form.name"
              type="text"
              class="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
              placeholder="Your name"
            />
          </label>
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-slate-200">Email</span>
            <input
              v-model="form.email"
              type="email"
              class="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </label>
          <label class="block">
            <span class="mb-2 block text-sm font-medium text-slate-200">Message</span>
            <textarea
              v-model="form.message"
              rows="6"
              class="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
              placeholder="Tell me about the role, project, or opportunity."
            ></textarea>
          </label>
          <button
            type="submit"
            class="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
