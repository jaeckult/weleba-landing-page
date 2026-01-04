'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    msHeroContent as enHero,
    msAdvantages as enAdvantages,
    msPositioning as enPositioning,
    msMarketing as enMarketing,
    msFaqs as enFaqs
} from '../lib/metasearchData';
import {
    msHeroContent as amHero,
    msAdvantages as amAdvantages,
    msPositioning as amPositioning,
    msMarketing as amMarketing,
    msFaqs as amFaqs
} from '../lib/metasearchData.am';
import { useLanguage } from '../context/LanguageContext';

export default function MetasearchPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const positioning = locale === 'am' ? amPositioning : enPositioning;
    const marketing = locale === 'am' ? amMarketing : enMarketing;
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

                <PMSTransform content={positioning} />

                <ContentBlock
                    title={marketing.title}
                    description={marketing.description}
                    image={marketing.image}
                    lists={marketing.lists}
                    imageLeft={marketing.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
