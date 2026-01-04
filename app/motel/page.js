'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    motelHeroContent as enHero,
    motelAdvantages as enAdvantages,
    motelPlatform as enPlatform,
    motelCommunication as enCommunication,
    motelFaqs as enFaqs
} from '../lib/motelsData';
import {
    motelHeroContent as amHero,
    motelAdvantages as amAdvantages,
    motelPlatform as amPlatform,
    motelCommunication as amCommunication,
    motelFaqs as amFaqs
} from '../lib/motelsData.am';
import { useLanguage } from '../context/LanguageContext';

export default function MotelPage() {
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
