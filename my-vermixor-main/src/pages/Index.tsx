import React from 'react';
import Hero from '../components/home/Hero';
import StatsSection from '../components/home/StatsSection';
import ServicesSection from '../components/home/ServicesSection';
import ProcessSection from '../components/home/ProcessSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ReviewsSection from '../components/home/ReviewsSection';
import PricingSection from '../components/home/PricingSection';
import ContactSection from '../components/home/ContactSection';

const Index = () => {
  return (
    <>
      <Hero />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <ReviewsSection />
      <PricingSection />
      <ContactSection />
    </>
  );
};

export default Index;
