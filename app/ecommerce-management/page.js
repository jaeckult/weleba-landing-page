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
    bbPersonalTouch as enReporting,
    bbFaqs as enFaqs
} from '../lib/ecommerceData';
import {
    bbHeroContent as amHero,
    bbAdvantages as amAdvantages,
    bbPlatform as amPlatform,
    bbPersonalTouch as amReporting,
    bbFaqs as amFaqs
} from '../lib/ecommerceData.am';
import { useLanguage } from '../context/LanguageContext';

export default function EcommercePage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const platform = locale === 'am' ? amPlatform : enPlatform;
    const reporting = locale === 'am' ? amReporting : enReporting;
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
                    title={reporting.title}
                    description={reporting.description}
                    image={reporting.image}
                    lists={reporting.lists}
                    imageLeft={reporting.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
