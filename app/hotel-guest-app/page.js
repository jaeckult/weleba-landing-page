import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    gaHeroContent,
    gaAdvantages,
    gaFeatures,
    gaOperations,
    gaFaqs
} from '../lib/guestAppData';

export const metadata = {
    title: 'Hotel Guest Mobile App | weleba',
    description: 'Put your front desk in your guests pockets. Offer mobile check-in, digital room keys, and on-demand concierge services with our branded hotel app.',
};

export default function GuestAppPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={gaHeroContent} faqs={gaFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={gaAdvantages.title}
                    subtitle={gaAdvantages.subtitle}
                    features={gaAdvantages.features}
                />

                <PMSTransform content={gaFeatures} />

                <ContentBlock
                    title={gaOperations.title}
                    description={gaOperations.description}
                    image={gaOperations.image}
                    lists={gaOperations.lists}
                    imageLeft={gaOperations.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
