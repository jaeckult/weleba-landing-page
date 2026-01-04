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
    rmWhyTrust as enWhyTrust,
    rmBoundaries as enBoundaries,
    rmMachineLearning as enMachineLearning,
    rmHowItWorks as enHowItWorks,
    rmFaqs as enFaqs
} from '../lib/revenueManagementData';
import {
    rmHeroContent as amHero,
    rmWhyTrust as amWhyTrust,
    rmBoundaries as amBoundaries,
    rmMachineLearning as amMachineLearning,
    rmHowItWorks as amHowItWorks,
    rmFaqs as amFaqs
} from '../lib/revenueManagementData.am';
import { useLanguage } from '../context/LanguageContext';

export default function RevenueManagementPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const whyTrust = locale === 'am' ? amWhyTrust : enWhyTrust;
    const boundaries = locale === 'am' ? amBoundaries : enBoundaries;
    const machineLearning = locale === 'am' ? amMachineLearning : enMachineLearning;
    const howItWorks = locale === 'am' ? amHowItWorks : enHowItWorks;
    const faqs = locale === 'am' ? amFaqs : enFaqs;

    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={heroContent} faqs={faqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={whyTrust.title}
                    subtitle={whyTrust.subtitle}
                    features={whyTrust.features}
                />

                <PMSTransform content={boundaries} />

                <ContentBlock
                    title={machineLearning.title}
                    description={machineLearning.description}
                    image={machineLearning.image}
                    lists={machineLearning.lists}
                    imageLeft={machineLearning.imageLeft}
                />

                <FeatureCards
                    title={howItWorks.title}
                    subtitle={howItWorks.subtitle}
                    features={howItWorks.features}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
