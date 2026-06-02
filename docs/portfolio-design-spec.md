# Rohan Singh Portfolio Design Specification

## 1. Overview

This document defines the approved design for a one-page portfolio application for Rohan Singh. The portfolio will be built with Vue 3, Vite, and Tailwind CSS as a recruiter-focused, GitHub Pages-ready static application.

The page should present Rohan as a Laravel / Bagisto / Vue.js developer with strong experience in eCommerce, SaaS, marketplace, POS, payment gateways, shipping integrations, and modular Laravel architecture. The page must remain concise, highly scannable, visually premium, and conversion-oriented for recruiters and hiring managers.

## 2. Objectives

The portfolio must:

- Establish professional fit quickly.
- Lead with project proof before asking for contact.
- Make NewsTech the flagship proof point without letting it overwhelm the full page.
- Highlight specializations relevant to Laravel, Bagisto, eCommerce, and SaaS hiring.
- Convert recruiter interest into project review, resume download, GitHub review, LinkedIn outreach, or direct contact.
- Support both dark and light mode with persistent theme preference.
- Remain fully responsive and deployable as a static site.

## 3. Target Audience

Primary audience:

- Recruiters
- HR teams
- Engineering managers
- Technical hiring leads

Secondary audience:

- Bagisto and Laravel ecosystem companies
- eCommerce and SaaS product teams
- GitHub visitors reviewing public work

## 4. Architecture Decisions

- The site will be a single-page application with smooth-scroll section navigation.
- No Vue Router will be added in the initial version.
- The codebase will be structured so future route-based additions such as blog pages, project case studies, or detail pages can be introduced with minimal refactoring.
- The application will use a component-based structure with section components, layout components, and shared UI primitives.
- Content will be data-driven through `src/data` modules and a shared config/constants layer.
- Styling will rely on Tailwind CSS and a small amount of project-level CSS in `src/style.css`.
- No unnecessary runtime dependencies will be added.

## 5. Section Order

Approved page order:

1. Navbar
2. Hero
3. About
4. Featured Project: NewsTech
5. Specializations
6. Stats / Achievements
7. Skills
8. Professional Projects
9. Experience
10. Education
11. GitHub / Open Source
12. Contact
13. Footer

This order is intentionally recruiter-first. It moves from identity and fit, to flagship proof, to capability validation, to broader credibility, and finally to outreach.

## 6. Content Strategy

Content must remain concise and highly scannable. Long narrative paragraphs should be avoided. Each section should be readable in under 10 seconds by a recruiter skimming the page.

Content principles:

- Lead with short proof-oriented summaries instead of long introductions.
- Use badges, proof chips, bullet groups, feature strips, and compact cards.
- Favor business-value language over purely descriptive implementation language.
- Use small quantities of developer-style metadata to reinforce engineering credibility.
- Keep About extremely concise.

Hero proof chips:

- 15+ Bagisto Modules
- 40+ Client Customizations
- 6 Payment Integrations
- 3+ Years Experience

Primary CTA hierarchy:

- Primary: View Projects
- Secondary: Download Resume
- Secondary: GitHub
- Secondary: LinkedIn
- Secondary: Contact Me

## 7. NewsTech Positioning

NewsTech is the flagship featured project and strongest proof point after the hero section.

Positioning rules:

- It must be the largest and richest project section on the page.
- It must appear immediately after the hero section.
- It must include a `Currently Building` treatment to indicate it is active work.
- It must not include a broken live demo link.
- It must display `Live Demo Coming Soon` instead of a clickable demo URL.
- It must be stronger visually and structurally than all other projects, but it must not dominate the entire page or crowd out broader experience.

Approved NewsTech description:

NewsTech is a modular Laravel-based news platform built with a Bagisto-like package architecture. It includes a frontend news website, admin dashboard, article management, media library, SEO toolkit, comments, bookmarks, advertisement manager, sitemap, RSS feeds, and reader features.

Architecture highlight strip:

- Modular Architecture
- Admin Dashboard
- SEO Toolkit
- Media Library
- Comments & Readers
- Advertisement Manager

NewsTech CTAs:

- View GitHub Repository
- Live Demo Coming Soon

## 8. CTA Strategy

The portfolio uses a projects-first conversion model.

CTA rules:

- The strongest initial CTA is `View Projects`.
- Resume download and social/contact actions are supporting actions.
- The hero CTA stack must be recruiter-friendly and immediately visible.
- GitHub and LinkedIn links must be accessible in both hero and lower-page credibility/contact areas where appropriate.
- The contact section must support both direct contact actions and a form-style interaction.

Reusable button variants:

- `primary`
- `secondary`
- `outline`
- `ghost`

These variants should be implemented as reusable UI building blocks rather than ad hoc section-specific styles.

## 9. Visual Direction

The approved visual style is a balanced mix of modern SaaS product-marketing layout and developer-oriented visual motifs.

Visual rules:

- Recruiter-friendly and professional first
- Engineering credibility visible through details
- Premium dark mode
- Clean light mode
- Strong spacing rhythm
- Refined card surfaces
- Controlled use of gradients and glow
- Developer-style badges, labels, metadata rows, and technical framing

Hero and NewsTech should receive the richest visual treatment. Other sections should remain visually consistent but slightly quieter.

## 10. Component Architecture

Approved structure:

```txt
src/
├── assets/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── composables/
│   └── useTheme.js
├── data/
│   ├── profile.js
│   ├── skills.js
│   ├── projects.js
│   ├── experience.js
│   ├── education.js
│   └── stats.js
├── config/
│   └── portfolio.js
├── App.vue
├── main.js
└── style.css
```

Layout components:

- `Navbar.vue`
- `Footer.vue`
- `ThemeToggle.vue`

Section components:

- `HeroSection.vue`
- `AboutSection.vue`
- `FeaturedProjectSection.vue`
- `SpecializationsSection.vue`
- `StatsSection.vue`
- `SkillsSection.vue`
- `ProjectsSection.vue`
- `ExperienceSection.vue`
- `EducationSection.vue`
- `OpenSourceSection.vue`
- `ContactSection.vue`

Shared UI components:

- `SectionHeading.vue`
- `CtaButton.vue`
- `ProofChip.vue`
- `SkillBadge.vue`
- `StatCard.vue`
- `ProjectCard.vue`
- `TimelineItem.vue`
- `TagBadge.vue`

Component rules:

- `App.vue` should orchestrate section order and page flow.
- Section components should each have one clear responsibility.
- NewsTech may use a more specialized internal layout than standard project cards.
- Shared primitives should be reused across sections to keep styling consistent.

## 11. Data Architecture

Content must be maintained through data modules and shared config/constants.

Required data/config files:

- `src/config/portfolio.js`
- `src/data/profile.js`
- `src/data/skills.js`
- `src/data/projects.js`
- `src/data/experience.js`
- `src/data/education.js`
- `src/data/stats.js`

`src/config/portfolio.js` should centralize shared URLs and metadata, including:

- GitHub URL
- NewsTech GitHub URL
- LinkedIn URL
- Resume URL
- Email
- Phone
- Location
- Site title
- Site description

Data rules:

- `profile.js` should store hero content, about summary, social links, CTA labels, specializations, and contact details.
- `projects.js` should explicitly separate `featuredProject` from `professionalProjects`.
- `professionalProjects` should include category/domain badges such as marketplace, SaaS, POS, payments, shipping, analytics, and eCommerce.
- `experience.js`, `education.js`, `skills.js`, and `stats.js` should export structured arrays for clean mapping in Vue templates.

## 12. Section Behavior And Treatment

### Navbar

- Sticky top navigation
- Smooth-scroll anchor links
- Theme toggle
- Resume shortcut button
- Mobile hamburger menu
- Mobile navigation should remain keyboard accessible

### Hero

- Name: Rohan Singh
- Role: Laravel / Bagisto / Vue.js Developer
- Tagline: Building scalable eCommerce, SaaS, marketplace, POS, payment and shipping solutions.
- Open to Opportunities badge
- Short proof-oriented summary
- Proof chips
- CTA stack
- Profile image from `public/images/profile.png`

### About

- Extremely concise
- Should not become a long narrative block
- Must exist as a compact standalone section directly after the hero
- May visually feel like a continuation of the hero rather than a large independent content block
- Should use a short recruiter-friendly summary plus a few proof bullets rather than a full paragraph wall

### Featured Project: NewsTech

- Two-column flagship layout on desktop
- Single-column strong layout on mobile
- Richer treatment than all other projects
- Status badge for `Currently Building`
- Architecture highlight strip
- Feature grouping
- Future-ready screenshot/preview support should be accounted for in the section data shape and layout so screenshots, admin previews, or product mock images can be added later without redesigning the component
- Tech stack badges
- GitHub CTA
- Non-clickable or clearly non-broken `Live Demo Coming Soon` treatment

### Specializations

Required specialization items:

- eCommerce Solutions
- Marketplace Development
- SaaS Architecture
- POS Systems
- Payment Gateway Integration
- Shipping API Integration
- Performance Optimization
- Modular Laravel Architecture

### Stats

- Numeric proof tiles
- Short labels
- High scanability

### Skills

- Grouped by domain
- Visible before professional projects
- Supports fast stack validation by recruiters

### Professional Projects

- Card-based layout
- Concise summaries
- Tech badges
- Domain/category badges
- Hover states
- Supporting proof only, not competing with NewsTech

Required project set:

- Bagisto Marketplace & Multi-Tenant SaaS Platform
- POS System
- Payment Gateway Suite
- Shipping Integration Modules
- Bullion Store eCommerce Platform
- CRM & Business Analytics Dashboard

### Experience

- Vertical timeline treatment
- Achievement bullets
- Recruiter-readable delivery emphasis

### Education

- Compact and lower visual weight than projects and experience
- Positioned directly after Experience

### GitHub / Open Source

- Short public credibility summary
- Link back to NewsTech
- Add a small `Latest Focus` treatment that references NewsTech as the current public flagship effort

Required CTAs:

- View GitHub Profile
- View NewsTech Repository
- Download Resume

### Contact

- Hybrid layout
- Left side: direct contact methods
- Right side: form-style contact interface
- Form fields: Name, Email, Message
- Submission should route through a frontend-only mailto workflow or equivalent
- No backend integration

### Footer

- Compact identity/footer links
- Final reinforcement of contact and profile destinations

## 13. Theme Behavior

Theme behavior requirements:

- Support dark and light mode
- Use Tailwind `darkMode: 'class'`
- Persist preference in `localStorage`
- If no saved preference exists, fall back to system theme
- Apply theme as early as possible to reduce visible flash
- Use an accessible navbar toggle with clear labeling

Dark mode:

- Deep navy/slate surfaces
- Premium contrast
- Soft accent glow
- Careful card elevation

Light mode:

- Bright neutral surfaces
- Clean professional contrast
- Same accent family for brand consistency

## 14. Responsive Behavior

Responsive rules:

- Mobile-first layout decisions
- Hero must remain readable and tappable on small screens
- CTA groups must wrap cleanly without becoming cramped
- NewsTech must stack into a strong single-column card on mobile
- Skills and project cards should collapse from grids to single-column layouts as needed
- Contact section should shift from split layout to stacked layout on smaller screens
- Sticky navbar and mobile menu must remain usable on touch devices

## 15. Accessibility Requirements

Accessibility requirements:

- Use semantic section landmarks
- Ensure keyboard access for navigation and theme toggle
- Provide visible focus states
- Maintain sufficient contrast in both themes
- Provide descriptive alt text for the profile image
- Use descriptive labels for buttons and links
- Ensure the mobile menu is accessible
- Respect reduced-motion preferences where practical for smooth scrolling and animation

## 16. SEO Requirements

Required metadata:

- Title: `Rohan Singh | Laravel, Bagisto & Vue.js Developer`
- Meta description: `Portfolio of Rohan Singh, a Full Stack Laravel Developer specializing in Bagisto, Vue.js, eCommerce, SaaS, marketplace, POS, payment gateway and shipping integrations.`

Required SEO handling:

- Set title and meta description in `index.html`
- Add Open Graph basics:
  - `og:title`
  - `og:description`
  - `og:type`
  - `og:url`
  - `og:image`
- Use a safe placeholder strategy for social image metadata if a final preview image is not yet available
- Avoid misleading or broken outbound links

## 17. GitHub Pages Requirements

The project must be GitHub Pages-ready.

Requirements:

- Configure Vite base path in a safe, centralized way
- Avoid hardcoded assumptions that only work at domain root
- Document local development, build, and manual deployment commands in README
- Do not add automatic deployment unless already configured
- Ensure asset paths for the profile image and resume work correctly in production builds

README must document:

- Local development
- Production build
- GitHub Pages deployment steps
- Folder structure
- Tech stack

## 18. Content Sources And Assets

Required assets:

- Profile image: `public/images/profile.png`
- Resume PDF: `public/resume/rohan-singh-resume.pdf`

Required profile/project links:

- GitHub profile: `https://github.com/devrohansisodia`
- Featured project repository: `https://github.com/devrohansisodia/newstech`
- LinkedIn: `https://www.linkedin.com/in/rohan-singh`
- Email: `mailto:rohan222210@gmail.com`

No broken live demo link should appear anywhere on the site.

## 19. Future Extensibility Notes

The initial version will remain a single-page static application with no router, but the codebase should be shaped for future growth.

Extensibility goals:

- Future blog pages can be added without reworking the data layer
- Future case study or project detail pages can reuse project data models
- A router can be introduced later without rewriting section content modules
- Shared CTA, badge, and card primitives should be reusable in future pages
- Shared config metadata should remain the single source of truth for common URLs and site identity

## 20. Implementation Constraints

- Use Vue 3, Vite, and Tailwind CSS
- Avoid unnecessary dependencies
- No backend
- No multiple pages in the initial version
- No broken live demo links
- Keep code clean, reusable, and component-based
- Keep content data-driven

## 21. Risks And Guardrails

Primary implementation risks:

- Overdesigning the page so it feels too long or too dense
- Letting NewsTech visually overpower the rest of the portfolio
- Making dark mode look flashy instead of premium
- Creating too many one-off component styles instead of reusable primitives
- Breaking GitHub Pages asset paths through incorrect base-path handling
- Making the contact form look functional in a backend sense when it is mailto-driven only

Guardrails:

- Favor scanability over prose
- Keep section copy intentionally short
- Reserve the richest composition for hero and NewsTech only
- Centralize shared URLs and metadata
- Keep interactions lightweight and CSS-driven
- Verify all outbound links and asset paths before implementation completion

## 22. Approval Status

This specification reflects the approved design direction before implementation planning or application code changes.
