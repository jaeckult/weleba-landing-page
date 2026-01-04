'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    cmHeroContent as enHero,
    cmAdvantages as enAdvantages,
    cmTakeControl as enTakeControl,
    cmRevenueManagement as enRevenue,
    cmReliability as enReliability,
    cmFaqs as enFaqs
} from '../lib/channelManagerData';
import {
    cmHeroContent as amHero,
    cmAdvantages as amAdvantages,
    cmTakeControl as amTakeControl,
    cmRevenueManagement as amRevenue,
    cmReliability as amReliability,
    cmFaqs as amFaqs
} from '../lib/channelManagerData.am';
import { useLanguage } from '../context/LanguageContext';

export default function ChannelManagerPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const takeControl = locale === 'am' ? amTakeControl : enTakeControl;
    const revenue = locale === 'am' ? amRevenue : enRevenue;
    const reliability = locale === 'am' ? amReliability : enReliability;
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

                <PMSTransform content={takeControl} />

                <ContentBlock
                    title={revenue.title}
                    description={revenue.description}
                    image={revenue.image}
                    lists={revenue.lists}
                    imageLeft={revenue.imageLeft}
                />

                <FeatureCards
                    title={reliability.title}
                    subtitle={reliability.subtitle}
                    features={reliability.features}
                />

                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
