'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    paymentsHeroContent as enHero,
    paymentsAdvantages as enAdvantages,
    paymentsPainless as enPainless,
    paymentsGroupBilling as enGroup,
    paymentsReliability as enReliability,
    paymentsFaqs as enFaqs
} from '../lib/paymentsData';
import {
    paymentsHeroContent as amHero,
    paymentsAdvantages as amAdvantages,
    paymentsPainless as amPainless,
    paymentsGroupBilling as amGroup,
    paymentsReliability as amReliability,
    paymentsFaqs as amFaqs
} from '../lib/paymentsData.am';
import { useLanguage } from '../context/LanguageContext';

export default function PaymentsPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const painless = locale === 'am' ? amPainless : enPainless;
    const group = locale === 'am' ? amGroup : enGroup;
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

                <PMSTransform content={painless} />

                <ContentBlock
                    title={group.title}
                    description={group.description}
                    image={group.image}
                    lists={group.lists}
                    imageLeft={group.imageLeft}
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
