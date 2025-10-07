import React, { Suspense, lazy } from 'react';
import HeroSection from '../components/sections/HeroSection';

const AboutSection = lazy(() => import('../components/sections/AboutSection'));
const CoursesSection = lazy(() => import('../components/sections/CoursesSection'));
const PricingSection = lazy(() => import('../components/sections/PricingSection'));
const RulesSection = lazy(() => import('../components/sections/RulesSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection'));

const HomePage: React.FC = () => (
  <div>
    <HeroSection />
    <Suspense fallback={<div className="py-16 text-center text-sm">Loading...</div>}>
      <AboutSection />
      <CoursesSection />
      <PricingSection />
      <RulesSection />
      <ContactSection />
    </Suspense>
  </div>
);

export default HomePage;
