'use client';

import Hero from "./components/sections/Hero";
import LogoSlideshow from "./components/sections/LogoSlideshow";
import Testimonials from "./components/sections/Testimonials";
import FeaturesGrid from "./components/sections/FeaturesGrid";
import WhyChoose from "./components/sections/WhyChoose";
import DailyOperations from "./components/sections/DailyOperations";
import RevenueIntelligence from "./components/sections/RevenueIntelligence";
import RevenueVisibility from "./components/sections/RevenueVisibility";
import PropertyTypes from "./components/sections/PropertyTypes";
import IntegrationsMarketplace from "./components/sections/IntegrationsMarketplace";
import GetStarted from "./components/sections/GetStarted";
import CTA from "./components/sections/CTA";
import FAQSection from "./components/sections/FAQSection";

import ScrollReveal from "./components/ui/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal delay={0.2}><LogoSlideshow /></ScrollReveal>
      <ScrollReveal delay={0.1}><Testimonials /></ScrollReveal>
      <ScrollReveal delay={0.1}><FeaturesGrid /></ScrollReveal>
      <ScrollReveal delay={0.1}><WhyChoose /></ScrollReveal>
      <ScrollReveal delay={0.1}><RevenueVisibility /></ScrollReveal>
      {/* <DailyOperations /> */}
      {/* <RevenueIntelligence /> */}
      <ScrollReveal delay={0.1}><PropertyTypes /></ScrollReveal>
      <ScrollReveal delay={0.1}><IntegrationsMarketplace /></ScrollReveal>
      <ScrollReveal delay={0.1}><GetStarted /></ScrollReveal>
      <ScrollReveal delay={0.1}><FAQSection /></ScrollReveal>
      <ScrollReveal delay={0.1}><CTA /></ScrollReveal>
    </main>
  );
}
