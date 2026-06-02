import { portfolioConfig } from '../config/portfolio';

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'NewsTech', href: '#featured-project' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  name: 'Rohan Singh',
  role: 'Laravel / Bagisto / Vue.js Developer',
  tagline: 'Building scalable eCommerce, SaaS, marketplace, POS, payment and shipping solutions.',
  summary:
    'Full Stack Laravel Developer building production-grade Bagisto modules, SaaS platforms, APIs, and Vue.js interfaces for commerce-heavy products.',
  badges: ['Open to Opportunities', 'Balanced Product + Developer Portfolio'],
  spotlight: 'Currently building NewsTech, a modular Laravel news CMS with a package-first architecture.',
  proofChips: [
    '15+ Bagisto Modules',
    '40+ Client Customizations',
    '6 Payment Integrations',
    '4+ Years Experience',
  ],
  ctas: [
    { label: 'View Projects', href: '#projects', variant: 'primary' },
    { label: 'Download Resume', href: portfolioConfig.resumeUrl, variant: 'secondary', external: true },
    { label: 'GitHub', href: portfolioConfig.githubUrl, variant: 'outline', external: true },
    { label: 'LinkedIn', href: portfolioConfig.linkedinUrl, variant: 'outline', external: true },
    { label: 'Contact Me', href: '#contact', variant: 'ghost' },
  ],
};

export const about = {
  title: 'Building production-ready commerce systems with modular Laravel architecture.',
  summary:
    'Full Stack Laravel Developer specializing in Bagisto, scalable eCommerce workflows, and practical Vue.js interfaces.',
  bullets: [
    'Delivered marketplace, SaaS, POS, payment, shipping, and business workflow modules.',
    'Worked across REST APIs, GraphQL, caching, performance tuning, and multi-tenant flows.',
    'Mentored junior developers and contributed to review-driven delivery teams.',
  ],
};

export const specializations = [
  {
    title: 'eCommerce Solutions',
    description: 'Storefronts, checkout flows, catalogs, business rules, and operational tooling.',
  },
  {
    title: 'Marketplace Development',
    description: 'Vendor onboarding, seller dashboards, commissions, and multivendor workflows.',
  },
  {
    title: 'SaaS Architecture',
    description: 'Tenant-aware modules, modular service boundaries, and maintainable product structure.',
  },
  {
    title: 'POS Systems',
    description: 'Order sync, inventory handling, offline-first flows, and retail operations support.',
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Secure transaction flows, webhooks, refunds, transaction logging, and module reuse.',
  },
  {
    title: 'Shipping API Integration',
    description: 'Rates, shipment creation, tracking, and carrier-specific module implementation.',
  },
  {
    title: 'Performance Optimization',
    description: 'API response tuning, database optimization, Redis caching, and bottleneck removal.',
  },
  {
    title: 'Modular Laravel Architecture',
    description: 'Package-oriented code organization shaped for maintainability and future extension.',
  },
];

export const openSource = {
  summary:
    'I actively publish practical engineering work on GitHub, with NewsTech serving as the latest public example of how I structure modular Laravel products.',
  latestFocus: 'Latest Focus: NewsTech — modular Laravel CMS architecture, admin workflows, reader features, and SEO foundations.',
  ctas: [
    { label: 'View GitHub Profile', href: portfolioConfig.githubUrl, variant: 'primary', external: true },
    { label: 'View NewsTech Repository', href: portfolioConfig.newsTechUrl, variant: 'secondary', external: true },
    { label: 'Download Resume', href: portfolioConfig.resumeUrl, variant: 'outline', external: true },
  ],
};

export const contact = {
  title: 'Open to Laravel, Bagisto, Vue.js, backend, and product engineering opportunities.',
  intro:
    'Reach out directly or use the message form to open a pre-filled email draft.',
  methods: [
    { label: 'Email', value: portfolioConfig.email, href: portfolioConfig.emailHref },
    { label: 'Phone', value: portfolioConfig.phone, href: portfolioConfig.phoneHref },
    { label: 'LinkedIn', value: 'linkedin.com/in/rohan-singh', href: portfolioConfig.linkedinUrl },
    { label: 'GitHub', value: 'github.com/devrohansisodia', href: portfolioConfig.githubUrl },
    { label: 'Location', value: portfolioConfig.location },
  ],
};
