import { portfolioConfig } from '../config/portfolio';

export const featuredProject = {
  name: 'NewsTech',
  subtitle: 'Modular Laravel News CMS',
  status: 'Currently Building',
  description:
    'NewsTech is a modular Laravel-based news platform. It includes a frontend news website, admin dashboard, article management, media library, SEO toolkit, comments, bookmarks, advertisement manager, sitemap, RSS feeds, and reader features.',
  stack: ['Laravel', 'PHP', 'Vue.js', 'Blade', 'Tailwind CSS', 'MySQL', 'Vite', 'PHPUnit', 'Modular Package Architecture'],
  architectureHighlights: [
    'Modular Architecture',
    'Admin Dashboard',
    'SEO Toolkit',
    'Media Library',
    'Comments & Readers',
    'Advertisement Manager',
  ],
  features: [
    'Frontend news website and reader features',
    'Structured content admin for articles, categories, tags, and authors',
    'Reusable media library and rich editor workflows',
    'SEO toolkit, sitemap, RSS, and production-facing publishing utilities',
  ],
  previewSupport: {
    enabled: false,
    note: 'Section layout is designed to accept future screenshots, admin previews, or visual product mockups without structural changes.',
  },
  githubUrl: portfolioConfig.newsTechUrl,
};

export const professionalProjects = [
  {
    title: 'Bagisto Marketplace & Multi-Tenant SaaS Platform',
    description:
      'Built marketplace and SaaS modules with seller dashboards, commission management, tenant isolation, storefront management, and admin controls.',
    tech: ['Laravel', 'Bagisto', 'Vue.js', 'MySQL', 'Redis'],
    categories: ['Marketplace', 'SaaS', 'Bagisto'],
  },
  {
    title: 'POS System',
    description:
      'Developed a POS module with real-time order sync, inventory handling, barcode support, invoice generation, and offline-capable transaction flow.',
    tech: ['Laravel', 'Vue.js', 'MySQL', 'IndexedDB'],
    categories: ['POS', 'Retail Operations', 'Offline Flow'],
  },
  {
    title: 'Payment Gateway Suite',
    description:
      'Integrated multiple payment gateways as standalone Bagisto modules with secure transaction flows, webhook handling, refunds, and transaction logs.',
    tech: ['Laravel', 'PHP', 'REST APIs'],
    categories: ['Payments', 'Integrations', 'Bagisto'],
  },
  {
    title: 'Shipping Integration Modules',
    description:
      'Built shipping modules for rate calculation, shipment creation, tracking, and carrier-specific API integrations across multiple logistics flows.',
    tech: ['Laravel', 'Bagisto', 'REST APIs'],
    categories: ['Shipping', 'Carrier APIs', 'Commerce Ops'],
  },
  {
    title: 'Bullion Store eCommerce Platform',
    description:
      'Developed a bullion and precious metals eCommerce platform with 800+ products, dynamic pricing, category management, and MongoDB optimization.',
    tech: ['Laravel', 'Bagisto', 'Vue.js', 'MongoDB'],
    categories: ['eCommerce', 'Catalog Scale', 'Performance'],
  },
  {
    title: 'CRM & Business Analytics Dashboard',
    description:
      'Built CRM and analytics features including lead tracking, pipeline visibility, KPI dashboards, follow-up automation, and business reporting.',
    tech: ['Laravel', 'JavaScript', 'MySQL'],
    categories: ['CRM', 'Analytics', 'Business Tools'],
  },
];
