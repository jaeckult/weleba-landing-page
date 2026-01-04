'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    gaHeroContent as enHero,
    gaAdvantages as enAdvantages,
    gaFeatures as enFeatures,
    gaOperations as enOperations,
    gaFaqs as enFaqs
} from '../lib/guestAppData';
import {
    gaHeroContent as amHero,
    gaAdvantages as amAdvantages,
    gaFeatures as amFeatures,
    gaOperations as amOperations,
    gaFaqs as amFaqs
} from '../lib/guestAppData.am';
import { useLanguage } from '../context/LanguageContext';

export default function GuestAppPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const features = locale === 'am' ? amFeatures : enFeatures;
    const operations = locale === 'am' ? amOperations : enOperations;
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

                <PMSTransform content={features} />

                <ContentBlock
                    title={operations.title}
                    description={operations.description}
                    image={operations.image}
                    lists={operations.lists}
                    imageLeft={operations.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
