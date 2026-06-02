<script setup>
import Navbar from './components/layout/Navbar.vue';
import Footer from './components/layout/Footer.vue';
import HeroSection from './components/sections/HeroSection.vue';
import AboutSection from './components/sections/AboutSection.vue';
import FeaturedProjectSection from './components/sections/FeaturedProjectSection.vue';
import SpecializationsSection from './components/sections/SpecializationsSection.vue';
import StatsSection from './components/sections/StatsSection.vue';
import SkillsSection from './components/sections/SkillsSection.vue';
import ProjectsSection from './components/sections/ProjectsSection.vue';
import ExperienceSection from './components/sections/ExperienceSection.vue';
import EducationSection from './components/sections/EducationSection.vue';
import OpenSourceSection from './components/sections/OpenSourceSection.vue';
import ContactSection from './components/sections/ContactSection.vue';
import { about, contact, hero, openSource, specializations } from './data/profile';
import { skillGroups } from './data/skills';
import { featuredProject, professionalProjects } from './data/projects';
import { experience } from './data/experience';
import { education } from './data/education';
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
    <Navbar />
    <main>
      <HeroSection :hero="hero" />
      <AboutSection :about="about" />
      <FeaturedProjectSection :project="featuredProject" />
      <SpecializationsSection :items="specializations" />
      <StatsSection />
      <SkillsSection :groups="skillGroups" />
      <ProjectsSection :projects="professionalProjects" />
      <ExperienceSection :items="experience" />
      <EducationSection :items="education" />
      <OpenSourceSection :source="openSource" />
      <ContactSection :contact="contact" />
    </main>
    <Footer />
  </div>
</template>
