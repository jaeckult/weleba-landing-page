'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    aiAgentHeroContent as enHero,
    aiAgentAdvantages as enAdvantages,
    aiAgentControl as enControl,
    aiAgentStaffFreedom as enFreedom,
    aiAgentSteps as enSteps,
    aiAgentFaqs as enFaqs
} from '../lib/aiAgentData';
import {
    aiAgentHeroContent as amHero,
    aiAgentAdvantages as amAdvantages,
    aiAgentControl as amControl,
    aiAgentStaffFreedom as amFreedom,
    aiAgentSteps as amSteps,
    aiAgentFaqs as amFaqs
} from '../lib/aiAgentData.am';
import { useLanguage } from '../context/LanguageContext';

export default function AiAgentPage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const advantages = locale === 'am' ? amAdvantages : enAdvantages;
    const control = locale === 'am' ? amControl : enControl;
    const freedom = locale === 'am' ? amFreedom : enFreedom;
    const steps = locale === 'am' ? amSteps : enSteps;
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

                <PMSTransform content={control} />

                <ContentBlock
                    title={freedom.title}
                    description={freedom.description}
                    image={freedom.image}
                    lists={freedom.lists}
                    imageLeft={freedom.imageLeft}
                />

                <FeatureCards
                    title={steps.title}
                    subtitle={steps.subtitle}
                    features={steps.features}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
