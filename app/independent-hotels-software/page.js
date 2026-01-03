import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    ihHeroContent,
    ihAdvantages,
    ihPlatform,
    ihGuestExperience,
    ihFaqs
} from '../lib/independentHotelsData';

export const metadata = {
    title: 'Independent Hotel Management Software | weleba',
    description: 'Empower your independent hotel with enterprise-level PMS, direct bookings, and channel distribution. Compete and thrive with our unified platform.',
};

export default function IndependentHotelsPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={ihHeroContent} faqs={ihFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={ihAdvantages.title}
                    subtitle={ihAdvantages.subtitle}
                    features={ihAdvantages.features}
                />

                <PMSTransform content={ihPlatform} />

                <ContentBlock
                    title={ihGuestExperience.title}
                    description={ihGuestExperience.description}
                    image={ihGuestExperience.image}
                    lists={ihGuestExperience.lists}
                    imageLeft={ihGuestExperience.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
