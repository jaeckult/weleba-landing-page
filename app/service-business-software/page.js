'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    ihHeroContent as enHero,
    ihAdvantages as enAdvantages,
    ihPlatform as enPlatform,
    ihGuestExperience as enGuest,
    ihFaqs as enFaqs
} from '../lib/serviceBusinessData';
import {
    ihHeroContent as amHero,
    ihAdvantages as amAdvantages,
    ihPlatform as amPlatform,
    ihGuestExperience as amGuest,
    ihFaqs as amFaqs
} from '../lib/serviceBusinessData.am';
import { useLanguage } from '../context/LanguageContext';

export default function IndependentHotelsPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const platform = locale === 'am' ? amPlatform : enPlatform;
    const guestExperience = locale === 'am' ? amGuest : enGuest;
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
                    title={guestExperience.title}
                    description={guestExperience.description}
                    image={guestExperience.image}
                    lists={guestExperience.lists}
                    imageLeft={guestExperience.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
