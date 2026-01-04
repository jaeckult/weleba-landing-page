'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    rmHeroContent as enHero,
    rmAdvantages as enAdvantages,
    rmPlatform as enPlatform,
    rmAnalytics as enAnalytics,
    rmFaqs as enFaqs
} from '../lib/revenueManagerData';
import {
    rmHeroContent as amHero,
    rmAdvantages as amAdvantages,
    rmPlatform as amPlatform,
    rmAnalytics as amAnalytics,
    rmFaqs as amFaqs
} from '../lib/revenueManagerData.am';
import { useLanguage } from '../context/LanguageContext';

export default function RevenueManagerPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const platform = locale === 'am' ? amPlatform : enPlatform;
    const analytics = locale === 'am' ? amAnalytics : enAnalytics;
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
                    title={analytics.title}
                    description={analytics.description}
                    image={analytics.image}
                    lists={analytics.lists}
                    imageLeft={analytics.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
