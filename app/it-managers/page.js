import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    itHeroContent,
    itAdvantages,
    itPlatform,
    itIntegrations,
    itFaqs
} from '../lib/itManagerData';

export const metadata = {
    title: 'Hospitality Technology Platform for IT Managers | weleba',
    description: 'Enterprise-grade hotel IT infrastructure. Manage your entire property with a secure, scalable, and API-first platform built for modern hospitality.',
};

export default function ITManagerPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={itHeroContent} faqs={itFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={itAdvantages.title}
                    subtitle={itAdvantages.subtitle}
                    features={itAdvantages.features}
                />

                <PMSTransform content={itPlatform} />

                <ContentBlock
                    title={itIntegrations.title}
                    description={itIntegrations.description}
                    image={itIntegrations.image}
                    lists={itIntegrations.lists}
                    imageLeft={itIntegrations.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
