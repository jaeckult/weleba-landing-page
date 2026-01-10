'use client';

import AboutHero from './components/AboutHero';
import ScrollStack from './components/ScrollStack';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import ScrollReveal from '../components/ui/ScrollReveal';
import ContentBlock from '../components/sections/ContentBlock';
import { careersHero as enHero, careersSections as enSections } from '../lib/careersData';
import { careersHero as amHero, careersSections as amSections } from '../lib/careersData.am';
import { useLanguage } from '../context/LanguageContext';

export default function CareersPage() {
    const { locale } = useLanguage();
    const heroContent = locale === 'am' ? amHero : enHero;
    const careersSections = locale === 'am' ? amSections : enSections;

    return (
        <main>
            <AboutHero content={heroContent} />
            {/* <ScrollStack images={aboutImages} /> */}
            {careersSections.map((section, index) => (
                <ScrollReveal key={index} delay={0.1}>
                    <ContentBlock
                        title={section.title}
                        description={section.description}
                        image={section.image}
                        lists={section.lists}
                        imageLeft={section.imageLeft}
                    />
                </ScrollReveal>
            ))}
            <ScrollReveal delay={0.1}>
                <Testimonials />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
                <GetStarted />
            </ScrollReveal>
        </main>
    );
}
