'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    wbHeroContent as enHero,
    wbWhyHelp as enWhyHelp,
    wbJourney as enJourney,
    wbAnalytics as enAnalytics,
    wbConversion as enConversion,
    wbFaqs as enFaqs
} from '../lib/websiteBuilderData';
import {
    wbHeroContent as amHero,
    wbWhyHelp as amWhyHelp,
    wbJourney as amJourney,
    wbAnalytics as amAnalytics,
    wbConversion as amConversion,
    wbFaqs as amFaqs
} from '../lib/websiteBuilderData.am';
import { useLanguage } from '../context/LanguageContext';

export default function WebsiteBuilderPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const whyHelp = locale === 'am' ? amWhyHelp : enWhyHelp;
    const journey = locale === 'am' ? amJourney : enJourney;
    const analytics = locale === 'am' ? amAnalytics : enAnalytics;
    const conversion = locale === 'am' ? amConversion : enConversion;
    const faqs = locale === 'am' ? amFaqs : enFaqs;

    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={heroContent} faqs={faqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={whyHelp.title}
                    subtitle={whyHelp.subtitle}
                    features={whyHelp.features}
                />

                <PMSTransform content={journey} />

                <ContentBlock
                    title={analytics.title}
                    description={analytics.description}
                    image={analytics.image}
                    lists={analytics.lists}
                    imageLeft={analytics.imageLeft}
                />

                <FeatureCards
                    title={conversion.title}
                    subtitle={conversion.subtitle}
                    features={conversion.features}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
