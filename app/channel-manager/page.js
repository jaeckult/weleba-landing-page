import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    cmHeroContent,
    cmAdvantages,
    cmTakeControl,
    cmRevenueManagement,
    cmReliability,
    cmFaqs
} from '../lib/channelManagerData';

export const metadata = {
    title: 'Hotel Channel Manager Software | weleba',
    description: 'Sync rates, prevent overbookings, and manage inventory across hundreds of OTAs and GDS platforms with no added commissions.',
};

export default function ChannelManagerPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={cmHeroContent} faqs={cmFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={cmAdvantages.title}
                    subtitle={cmAdvantages.subtitle}
                    features={cmAdvantages.features}
                />

                <PMSTransform content={cmTakeControl} />

                <ContentBlock
                    title={cmRevenueManagement.title}
                    description={cmRevenueManagement.description}
                    image={cmRevenueManagement.image}
                    lists={cmRevenueManagement.lists}
                    imageLeft={cmRevenueManagement.imageLeft}
                />

                <FeatureCards
                    title={cmReliability.title}
                    subtitle={cmReliability.subtitle}
                    features={cmReliability.features}
                />

                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
