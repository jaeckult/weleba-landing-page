import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    msHeroContent,
    msAdvantages,
    msPositioning,
    msMarketing,
    msFaqs
} from '../lib/metasearchData';

export const metadata = {
    title: 'Hotel Metasearch Management | weleba',
    description: 'Establish your hotel on Google Hotel Ads, TripAdvisor, and Trivago. Drive direct bookings with integrated metasearch management and smart bidding.',
};

export default function MetasearchPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={msHeroContent} faqs={msFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={msAdvantages.title}
                    subtitle={msAdvantages.subtitle}
                    features={msAdvantages.features}
                />

                <PMSTransform content={msPositioning} />

                <ContentBlock
                    title={msMarketing.title}
                    description={msMarketing.description}
                    image={msMarketing.image}
                    lists={msMarketing.lists}
                    imageLeft={msMarketing.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
