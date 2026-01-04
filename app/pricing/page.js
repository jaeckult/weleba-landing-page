'use client';

import PricingHero from '../components/sections/PricingHero';
import Testimonials from '../components/sections/Testimonials';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import CTA from '../components/sections/CTA';
import ScrollReveal from '../components/ui/ScrollReveal';
import { pricingPageContent as enPricingData } from '../lib/pricingData';
import { pricingPageContent as amPricingData } from '../lib/pricingData.am';
import { useLanguage } from '../context/LanguageContext';

export default function PricingPage() {
    const { locale } = useLanguage();
    const pricingData = locale === 'am' ? amPricingData : enPricingData;
    const { trustedBy, cta } = pricingData;

    return (
        <main>
            <ScrollReveal>
                <PricingHero />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <div className="bg-white py-12 border-y border-gray-100">
                    <div className="text-center mb-8">
                        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{trustedBy}</p>
                    </div>
                    <LogoSlideshow showHeader={false} />
                </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <Testimonials />
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
                <CTA
                    title={cta.title}
                    subtitle={cta.subtitle}
                    primaryCTA={{ text: cta.buttonText, href: "/book-a-demo" }}
                />
            </ScrollReveal>
        </main>
    );
}
