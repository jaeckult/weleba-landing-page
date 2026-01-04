'use client';

import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    beHeroContent as enHero,
    beBenefits as enBenefits,
    bePowerhouse as enPowerhouse,
    beMaximizeDirect as enMaximize,
    beBoostRevenue as enBoost,
    beGroupBookings as enGroup,
    beOptimizeStrategy as enOptimize,
    beFaqs as enFaqs
} from '../lib/bookingEngineData';
import {
    beHeroContent as amHero,
    beBenefits as amBenefits,
    bePowerhouse as amPowerhouse,
    beMaximizeDirect as amMaximize,
    beBoostRevenue as amBoost,
    beGroupBookings as amGroup,
    beOptimizeStrategy as amOptimize,
    beFaqs as amFaqs
} from '../lib/bookingEngineData.am';
import { useLanguage } from '../context/LanguageContext';

export default function BookingEnginePage() {
    const { locale } = useLanguage();

    const heroContent = locale === 'am' ? amHero : enHero;
    const benefits = locale === 'am' ? amBenefits : enBenefits;
    const powerhouse = locale === 'am' ? amPowerhouse : enPowerhouse;
    const maximize = locale === 'am' ? amMaximize : enMaximize;
    const boost = locale === 'am' ? amBoost : enBoost;
    const group = locale === 'am' ? amGroup : enGroup;
    const optimize = locale === 'am' ? amOptimize : enOptimize;
    const faqs = locale === 'am' ? amFaqs : enFaqs;

    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={heroContent} faqs={faqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={benefits.title}
                    subtitle={benefits.subtitle}
                    features={benefits.features}
                />

                <ContentBlock
                    title={powerhouse.title}
                    description={powerhouse.description}
                    image={powerhouse.image}
                    lists={powerhouse.lists}
                    imageLeft={powerhouse.imageLeft}
                />

                <FeatureCards
                    title={maximize.title}
                    subtitle={maximize.subtitle}
                    features={maximize.features}
                />

                <FeatureCards
                    title={boost.title}
                    subtitle={boost.subtitle}
                    features={boost.features}
                />

                <ContentBlock
                    title={group.title}
                    description={group.description}
                    image={group.image}
                    lists={group.lists}
                    imageLeft={group.imageLeft}
                />

                <FeatureCards
                    title={optimize.title}
                    subtitle={optimize.subtitle}
                    features={optimize.features}
                />

                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
