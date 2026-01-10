'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    bbHeroContent as enHero,
    bbAdvantages as enAdvantages,
    bbPlatform as enPlatform,
    bbPersonalTouch as enCommunication,
    bbFaqs as enFaqs
} from '../lib/retailData';
import {
    bbHeroContent as amHero,
    bbAdvantages as amAdvantages,
    bbPlatform as amPlatform,
    bbPersonalTouch as amCommunication,
    bbFaqs as amFaqs
} from '../lib/retailData.am';
import { useLanguage } from '../context/LanguageContext';

export default function RetailPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const platform = locale === 'am' ? amPlatform : enPlatform;
    const communication = locale === 'am' ? amCommunication : enCommunication;
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
                    title={communication.title}
                    description={communication.description}
                    image={communication.image}
                    lists={communication.lists}
                    imageLeft={communication.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
