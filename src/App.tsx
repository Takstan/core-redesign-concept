/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { TrustStrip } from './components/TrustStrip.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ServiceModal } from './components/ServiceModal.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { AboutModal } from './components/AboutModal.tsx';
import { FeaturedProjects } from './components/FeaturedProjects.tsx';
import { ProjectModal } from './components/ProjectModal.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { ServiceAreaSection } from './components/ServiceAreaSection.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { QuoteSection } from './components/QuoteSection.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileQuickBar } from './components/MobileQuickBar.tsx';
import { SERVICES } from './data/content.ts';
import { ServiceItem, ProjectItem } from './types/index.ts';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [preselectedServiceCode, setPreselectedServiceCode] = useState<string>('roll_off_dumpsters');
  const [preselectedZip, setPreselectedZip] = useState<string>('');

  const handleOpenQuote = (serviceCode?: string, defaultZip?: string) => {
    if (serviceCode) {
      setPreselectedServiceCode(serviceCode);
    }
    if (defaultZip) {
      setPreselectedZip(defaultZip);
    }
    // Also scroll smoothly to the in-page quote form or open the modal
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  const handleOpenQuoteModal = (serviceCode?: string) => {
    if (serviceCode) {
      setPreselectedServiceCode(serviceCode);
    }
    setQuoteModalOpen(true);
  };

  const handleSelectServiceById = (serviceId: string) => {
    const found = SERVICES.find((s) => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  return (
    <div className="min-h-screen bg-[#121518] text-slate-100 flex flex-col font-sans selection:bg-[#ea580c] selection:text-white">
      {/* Top sticky navigation */}
      <Navbar
        onOpenQuote={() => handleOpenQuoteModal()}
        onSelectService={handleSelectServiceById}
      />

      {/* Main Page Landmark */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuoteModal()} />

        {/* Immediate Credibility Trust Strip */}
        <TrustStrip />

        {/* Services Section with 7 Core Offerings */}
        <ServicesSection
          onSelectService={handleSelectServiceById}
          onOpenQuote={(code) => handleOpenQuote(code)}
        />

        {/* Why Choose Us Split View */}
        <WhyChooseUs
          onOpenAbout={() => setAboutModalOpen(true)}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Featured Projects with Category Filters & Before/After Lightbox */}
        <FeaturedProjects
          onSelectProject={(proj) => setSelectedProject(proj)}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 3-Step Execution Pipeline */}
        <HowItWorks onOpenQuote={() => handleOpenQuote()} />

        {/* Testimonials & Verified Google Rating Proof */}
        <Testimonials />

        {/* Twin Ports Service Area & Interactive ZIP Checker */}
        <ServiceAreaSection
          onOpenQuote={(serviceCode, zip) => handleOpenQuote(serviceCode, zip)}
        />

        {/* Frequently Asked Questions Accordion */}
        <FAQSection />

        {/* Final Conversion Section & Service-Aware Quote Form */}
        <QuoteSection
          preselectedService={preselectedServiceCode}
          preselectedZip={preselectedZip}
        />
      </main>

      {/* Four-Column Comprehensive Footer */}
      <Footer
        onOpenQuote={() => handleOpenQuoteModal()}
        onSelectService={handleSelectServiceById}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar onOpenQuote={() => handleOpenQuoteModal()} />

      {/* Modals & Dialogs */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceCode) => {
          setSelectedService(null);
          handleOpenQuote(serviceCode);
        }}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenQuote={() => {
          setAboutModalOpen(false);
          handleOpenQuote();
        }}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={() => {
          setSelectedProject(null);
          handleOpenQuote();
        }}
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={preselectedServiceCode}
        initialZip={preselectedZip}
      />
    </div>
  );
}
