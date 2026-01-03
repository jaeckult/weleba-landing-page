import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    hgHeroContent,
    hgAdvantages,
    hgPlatform,
    hgIntegration,
    hgFaqs
} from '../lib/hotelGroupsData';

export const metadata = {
    title: 'Hotel Group Management Software | weleba',
    description: 'Centralized management and reporting for hotel portfolios. Gain portfolio-wide control and operational efficiency across all your properties.',
};

export default function HotelGroupsPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={hgHeroContent} faqs={hgFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={hgAdvantages.title}
                    subtitle={hgAdvantages.subtitle}
                    features={hgAdvantages.features}
                />

                <PMSTransform content={hgPlatform} />

                <ContentBlock
                    title={hgIntegration.title}
                    description={hgIntegration.description}
                    image={hgIntegration.image}
                    lists={hgIntegration.lists}
                    imageLeft={hgIntegration.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
