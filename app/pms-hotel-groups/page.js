'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    hgHeroContent as enHero,
    hgAdvantages as enAdvantages,
    hgPlatform as enPlatform,
    hgIntegration as enIntegration,
    hgFaqs as enFaqs
} from '../lib/hotelGroupsData';
import {
    hgHeroContent as amHero,
    hgAdvantages as amAdvantages,
    hgPlatform as amPlatform,
    hgIntegration as amIntegration,
    hgFaqs as amFaqs
} from '../lib/hotelGroupsData.am';
import { useLanguage } from '../context/LanguageContext';

export default function HotelGroupsPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const platform = locale === 'am' ? amPlatform : enPlatform;
    const integration = locale === 'am' ? amIntegration : enIntegration;
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
                    title={integration.title}
                    description={integration.description}
                    image={integration.image}
                    lists={integration.lists}
                    imageLeft={integration.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
