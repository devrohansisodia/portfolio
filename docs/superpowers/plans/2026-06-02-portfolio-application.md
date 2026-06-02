# Portfolio Application Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a recruiter-focused one-page portfolio for Rohan Singh with Vue 3, Vite, Tailwind CSS, dark/light theme persistence, GitHub Pages readiness, and all approved sections.

**Architecture:** Build a static Vue SPA composed from focused layout, section, and UI components backed by plain data modules and a shared portfolio config file. Use Tailwind for layout and theme styling, a small `useTheme.js` composable for persisted color mode, and Vite configuration that is safe for GitHub Pages base-path deployment.

**Tech Stack:** Vue 3, Vite, Tailwind CSS, PostCSS, Autoprefixer

---

## File Map

- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/main.js`
- Create: `src/App.vue`
- Create: `src/style.css`
- Create: `src/composables/useTheme.js`
- Create: `src/config/portfolio.js`
- Create: `src/data/profile.js`
- Create: `src/data/stats.js`
- Create: `src/data/skills.js`
- Create: `src/data/projects.js`
- Create: `src/data/experience.js`
- Create: `src/data/education.js`
- Create: `src/components/layout/Navbar.vue`
- Create: `src/components/layout/Footer.vue`
- Create: `src/components/layout/ThemeToggle.vue`
- Create: `src/components/ui/CtaButton.vue`
- Create: `src/components/ui/SectionHeading.vue`
- Create: `src/components/ui/ProofChip.vue`
- Create: `src/components/ui/SkillBadge.vue`
- Create: `src/components/ui/StatCard.vue`
- Create: `src/components/ui/ProjectCard.vue`
- Create: `src/components/ui/TagBadge.vue`
- Create: `src/components/ui/TimelineItem.vue`
- Create: `src/components/sections/HeroSection.vue`
- Create: `src/components/sections/AboutSection.vue`
- Create: `src/components/sections/FeaturedProjectSection.vue`
- Create: `src/components/sections/SpecializationsSection.vue`
- Create: `src/components/sections/StatsSection.vue`
- Create: `src/components/sections/SkillsSection.vue`
- Create: `src/components/sections/ProjectsSection.vue`
- Create: `src/components/sections/ExperienceSection.vue`
- Create: `src/components/sections/EducationSection.vue`
- Create: `src/components/sections/OpenSourceSection.vue`
- Create: `src/components/sections/ContactSection.vue`
- Create: `README.md`
- Modify: `docs/portfolio-design-spec.md`

### Task 1: Scaffold Build And Theme Foundations

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `src/main.js`
- Create: `src/style.css`
- Create: `src/composables/useTheme.js`

- [ ] **Step 1: Define package scripts and dependencies**

```json
{
  "name": "rohan-singh-portfolio",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.5.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "vite": "^5.0.0"
  }
}
```

- [ ] **Step 2: Configure Vite and Tailwind for GitHub Pages-safe static output**

```js
// vite.config.js
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const base = process.env.VITE_BASE_PATH || '/';

export default defineConfig({
  base,
  plugins: [vue()],
});
```

```js
// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- [ ] **Step 3: Add root HTML metadata and theme bootstrapping**

```html
<script>
  (() => {
    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (systemDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dataset.theme = theme;
  })();
</script>
```

- [ ] **Step 4: Implement `useTheme.js` for persistent theme switching**

```js
import { computed, onMounted, ref } from 'vue';

const theme = ref('light');

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark');

  const applyTheme = (nextTheme) => {
    theme.value = nextTheme;
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
  };

  const toggleTheme = () => applyTheme(isDark.value ? 'light' : 'dark');

  onMounted(() => {
    const saved = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(saved || (systemDark ? 'dark' : 'light'));
  });

  return { theme, isDark, toggleTheme, applyTheme };
}
```

- [ ] **Step 5: Run the build shell once foundations are in place**

Run: `npm install && npm run build`  
Expected: Build succeeds with no missing config/module errors.

### Task 2: Create Shared Config And Content Data

**Files:**
- Create: `src/config/portfolio.js`
- Create: `src/data/profile.js`
- Create: `src/data/stats.js`
- Create: `src/data/skills.js`
- Create: `src/data/projects.js`
- Create: `src/data/experience.js`
- Create: `src/data/education.js`

- [ ] **Step 1: Centralize shared links and metadata**

```js
export const portfolioConfig = {
  siteTitle: 'Rohan Singh | Laravel, Bagisto & Vue.js Developer',
  siteDescription: 'Portfolio of Rohan Singh, a Full Stack Laravel Developer specializing in Bagisto, Vue.js, eCommerce, SaaS, marketplace, POS, payment gateway and shipping integrations.',
  githubUrl: 'https://github.com/devrohansisodia',
  newsTechUrl: 'https://github.com/devrohansisodia/newstech',
  linkedinUrl: 'https://www.linkedin.com/in/rohan-singh-bb3359218/',
  resumeUrl: '/resume/rohan-singh-resume.pdf',
  profileImageUrl: '/images/profile.png',
  email: 'rohan222210@gmail.com',
  emailHref: 'mailto:rohan222210@gmail.com',
  phone: '+91-9971457371',
  phoneHref: 'tel:+919971457371',
  location: 'Delhi, India',
};
```

- [ ] **Step 2: Model profile, specializations, and CTA content**

```js
export const hero = { /* name, role, tagline, proofChips, badges, ctas */ };
export const about = { /* short summary plus proof bullets */ };
export const specializations = [ /* 8 specialization cards */ ];
export const contact = { /* left-side contact items and form labels */ };
```

- [ ] **Step 3: Separate featured project and supporting projects**

```js
export const featuredProject = {
  name: 'NewsTech',
  status: 'Currently Building',
  architectureHighlights: [
    'Modular Architecture',
    'Admin Dashboard',
    'SEO Toolkit',
    'Media Library',
    'Comments & Readers',
    'Advertisement Manager',
  ],
  previewSupport: {
    enabled: false,
    note: 'Layout should accept future screenshots or product previews without structural changes.',
  },
};

export const professionalProjects = [
  {
    title: 'Bagisto Marketplace & Multi-Tenant SaaS Platform',
    categories: ['Marketplace', 'SaaS', 'Bagisto'],
  },
];
```

- [ ] **Step 4: Add experience, education, and stats arrays**

```js
export const stats = [{ value: '3+', label: 'Years Experience' }];
export const experience = [{ company: 'Webkul Software Pvt Ltd' }];
export const education = [{ degree: 'Master of Computer Applications' }];
```

- [ ] **Step 5: Run build to catch import or syntax mistakes**

Run: `npm run build`  
Expected: Build succeeds with data modules resolved.

### Task 3: Build Shared UI And Layout Primitives

**Files:**
- Create: `src/components/layout/Navbar.vue`
- Create: `src/components/layout/Footer.vue`
- Create: `src/components/layout/ThemeToggle.vue`
- Create: `src/components/ui/CtaButton.vue`
- Create: `src/components/ui/SectionHeading.vue`
- Create: `src/components/ui/ProofChip.vue`
- Create: `src/components/ui/SkillBadge.vue`
- Create: `src/components/ui/StatCard.vue`
- Create: `src/components/ui/ProjectCard.vue`
- Create: `src/components/ui/TagBadge.vue`
- Create: `src/components/ui/TimelineItem.vue`

- [ ] **Step 1: Implement button and badge primitives with reusable variants**

```vue
<script setup>
const props = defineProps({
  href: { type: String, default: '' },
  variant: { type: String, default: 'primary' },
  external: { type: Boolean, default: false },
});
</script>
```

- [ ] **Step 2: Implement sticky navbar with smooth-scroll anchors and mobile menu**

```vue
<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];
</script>
```

- [ ] **Step 3: Implement accessible theme toggle**

```vue
<button
  type="button"
  class="..."
  :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  @click="toggleTheme"
>
```

- [ ] **Step 4: Implement footer and reusable section heading/timeline/stat/project card shells**

```vue
<script setup>
defineProps({
  eyebrow: String,
  title: String,
  description: String,
});
</script>
```

- [ ] **Step 5: Run build after primitives are wired**

Run: `npm run build`  
Expected: Build succeeds with component imports resolved.

### Task 4: Assemble Hero, About, And Featured Project

**Files:**
- Create: `src/components/sections/HeroSection.vue`
- Create: `src/components/sections/AboutSection.vue`
- Create: `src/components/sections/FeaturedProjectSection.vue`

- [ ] **Step 1: Build hero with recruiter-first CTA stack and proof chips**

```vue
<HeroSection
  :hero="hero"
  :profile-image-url="portfolioConfig.profileImageUrl"
/>
```

- [ ] **Step 2: Add mandatory compact About section**

```vue
<AboutSection :about="about" />
```

- [ ] **Step 3: Build NewsTech flagship section with future preview support**

```vue
<FeaturedProjectSection
  :project="featuredProject"
  :github-url="portfolioConfig.newsTechUrl"
/>
```

- [ ] **Step 4: Ensure live-demo treatment is non-broken**

```vue
<span class="inline-flex ...">Live Demo Coming Soon</span>
```

- [ ] **Step 5: Run build and visual smoke-check**

Run: `npm run build`  
Expected: Build succeeds and section markup is complete.

### Task 5: Build Specializations, Stats, Skills, And Professional Projects

**Files:**
- Create: `src/components/sections/SpecializationsSection.vue`
- Create: `src/components/sections/StatsSection.vue`
- Create: `src/components/sections/SkillsSection.vue`
- Create: `src/components/sections/ProjectsSection.vue`

- [ ] **Step 1: Implement specialization cards**

```vue
<SpecializationsSection :items="specializations" />
```

- [ ] **Step 2: Implement achievement stat tiles**

```vue
<StatsSection :stats="stats" />
```

- [ ] **Step 3: Implement grouped skill cards before projects**

```vue
<SkillsSection :groups="skillGroups" />
```

- [ ] **Step 4: Implement project cards with tech and category badges**

```vue
<ProjectsSection :projects="professionalProjects" />
```

- [ ] **Step 5: Run build to catch mapping/rendering errors**

Run: `npm run build`  
Expected: Build succeeds and data-driven sections compile.

### Task 6: Build Experience, Education, Open Source, And Contact

**Files:**
- Create: `src/components/sections/ExperienceSection.vue`
- Create: `src/components/sections/EducationSection.vue`
- Create: `src/components/sections/OpenSourceSection.vue`
- Create: `src/components/sections/ContactSection.vue`

- [ ] **Step 1: Implement experience timeline**

```vue
<ExperienceSection :items="experience" />
```

- [ ] **Step 2: Implement compact education section**

```vue
<EducationSection :items="education" />
```

- [ ] **Step 3: Implement GitHub/Open Source with Latest Focus treatment**

```vue
<OpenSourceSection
  :github-url="portfolioConfig.githubUrl"
  :newstech-url="portfolioConfig.newsTechUrl"
  latest-focus="NewsTech"
/>
```

- [ ] **Step 4: Implement hybrid contact with mailto composition**

```js
const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
```

- [ ] **Step 5: Run build to verify interaction code compiles**

Run: `npm run build`  
Expected: Build succeeds and no browser-only APIs are referenced at build time.

### Task 7: Compose App Shell, Global Styling, And README

**Files:**
- Create: `src/App.vue`
- Create: `src/style.css`
- Create: `README.md`

- [ ] **Step 1: Compose the page in approved section order**

```vue
<Navbar />
<main>
  <HeroSection />
  <AboutSection />
  <FeaturedProjectSection />
  <SpecializationsSection />
  <StatsSection />
  <SkillsSection />
  <ProjectsSection />
  <ExperienceSection />
  <EducationSection />
  <OpenSourceSection />
  <ContactSection />
</main>
<Footer />
```

- [ ] **Step 2: Add global theme tokens, motion, spacing, and smooth-scrolling styles**

```css
:root { color-scheme: light; }
.dark { color-scheme: dark; }
html { scroll-behavior: smooth; }
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
}
```

- [ ] **Step 3: Write README with local dev, build, and GitHub Pages deployment instructions**

```md
## Development
npm install
npm run dev

## Build
npm run build

## GitHub Pages
VITE_BASE_PATH=/repository-name/ npm run build
```

- [ ] **Step 4: Verify assets are referenced from `public/` paths**

```txt
/images/profile.png
/resume/rohan-singh-resume.pdf
```

- [ ] **Step 5: Run final build before manual validation**

Run: `npm run build`  
Expected: Production build completes successfully.

### Task 8: Manual Validation And Cleanup

**Files:**
- Modify: `README.md`
- Modify: `src/**` as needed from validation feedback

- [ ] **Step 1: Install dependencies and run the final build**

Run: `npm install`  
Expected: Dependencies install successfully.

Run: `npm run build`  
Expected: Production build completes with no errors.

- [ ] **Step 2: Verify asset paths and key links**

Check:
- Resume link points to `/resume/rohan-singh-resume.pdf`
- Profile image points to `/images/profile.png`
- GitHub links target the approved URLs
- No live demo link is clickable for NewsTech

- [ ] **Step 3: Verify theme persistence and responsive behavior**

Check:
- Theme toggles in navbar
- Preference persists after reload
- Mobile navigation opens/closes correctly
- Hero, NewsTech, and contact layouts remain usable on small screens

- [ ] **Step 4: Verify GitHub Pages compatibility assumptions**

Check:
- App builds with `VITE_BASE_PATH` override
- No hardcoded absolute asset assumptions beyond `public/` handling
- README deployment instructions are accurate

- [ ] **Step 5: Summarize implementation and validation results**

```txt
Report completed work, verification commands, and any residual risks.
```
