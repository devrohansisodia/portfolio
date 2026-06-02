import { computed, ref } from 'vue';

const theme = ref('light');
let initialized = false;

const getPreferredTheme = () => {
  const saved = localStorage.getItem('theme');

  if (saved === 'light' || saved === 'dark') {
    return saved;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const applyTheme = (nextTheme) => {
  theme.value = nextTheme;
  document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem('theme', nextTheme);
};

export function useTheme() {
  if (!initialized && typeof window !== 'undefined') {
    applyTheme(getPreferredTheme());
    initialized = true;
  }

  return {
    theme,
    isDark: computed(() => theme.value === 'dark'),
    toggleTheme: () => applyTheme(theme.value === 'dark' ? 'light' : 'dark'),
  };
}
