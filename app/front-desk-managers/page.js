'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    fdmHeroContent as enHero,
    fdmAdvantages as enAdvantages,
    fdmPlatform as enPlatform,
    fdmCoordination as enCoordination,
    fdmFaqs as enFaqs
} from '../lib/frontDeskManagerData';
import {
    fdmHeroContent as amHero,
    fdmAdvantages as amAdvantages,
    fdmPlatform as amPlatform,
    fdmCoordination as amCoordination,
    fdmFaqs as amFaqs
} from '../lib/frontDeskManagerData.am';
import { useLanguage } from '../context/LanguageContext';

export default function FrontDeskManagerPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const platform = locale === 'am' ? amPlatform : enPlatform;
    const coordination = locale === 'am' ? amCoordination : enCoordination;
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
                    title={coordination.title}
                    description={coordination.description}
                    image={coordination.image}
                    lists={coordination.lists}
                    imageLeft={coordination.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
