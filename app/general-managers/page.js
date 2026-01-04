'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    gmHeroContent as enHero,
    gmAdvantages as enAdvantages,
    gmPlatform as enPlatform,
    gmPerformance as enPerformance,
    gmFaqs as enFaqs
} from '../lib/generalManagerData';
import {
    gmHeroContent as amHero,
    gmAdvantages as amAdvantages,
    gmPlatform as amPlatform,
    gmPerformance as amPerformance,
    gmFaqs as amFaqs
} from '../lib/generalManagerData.am';
import { useLanguage } from '../context/LanguageContext';

export default function GeneralManagerPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const platform = locale === 'am' ? amPlatform : enPlatform;
    const performance = locale === 'am' ? amPerformance : enPerformance;
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
                    title={performance.title}
                    description={performance.description}
                    image={performance.image}
                    lists={performance.lists}
                    imageLeft={performance.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
