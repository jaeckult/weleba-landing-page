import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    rmHeroContent,
    rmAdvantages,
    rmPlatform,
    rmAnalytics,
    rmFaqs
} from '../lib/revenueManagerData';

export const metadata = {
    title: 'Revenue Management Solutions for Revenue Managers | weleba',
    description: 'Unlock your hotel\'s true revenue potential with AI-driven pricing intelligence and dynamic rate optimization. Build for revenue professionals.',
};

export default function RevenueManagerPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={rmHeroContent} faqs={rmFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={rmAdvantages.title}
                    subtitle={rmAdvantages.subtitle}
                    features={rmAdvantages.features}
                />

                <PMSTransform content={rmPlatform} />

                <ContentBlock
                    title={rmAnalytics.title}
                    description={rmAnalytics.description}
                    image={rmAnalytics.image}
                    lists={rmAnalytics.lists}
                    imageLeft={rmAnalytics.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
