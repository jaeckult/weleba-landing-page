'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    itHeroContent as enHero,
    itAdvantages as enAdvantages,
    itPlatform as enPlatform,
    itIntegrations as enIntegrations,
    itFaqs as enFaqs
} from '../lib/itManagerData';
import {
    itHeroContent as amHero,
    itAdvantages as amAdvantages,
    itPlatform as amPlatform,
    itIntegrations as amIntegrations,
    itFaqs as amFaqs
} from '../lib/itManagerData.am';
import { useLanguage } from '../context/LanguageContext';

export default function ITManagerPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const platform = locale === 'am' ? amPlatform : enPlatform;
    const integrations = locale === 'am' ? amIntegrations : enIntegrations;
    const faqs = locale === 'am' ? amFaqs : enFaqs;

    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={heroContent} faqs={faqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={advantages.title}
                    subtitle={advantages.subtitle}
                    features={advantages.features}
                />

                <PMSTransform content={platform} />

                <ContentBlock
                    title={integrations.title}
                    description={integrations.description}
                    image={integrations.image}
                    lists={integrations.lists}
                    imageLeft={integrations.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
