import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    parksHeroContent,
    parksAdvantages,
    parksPlatform,
    parksReporting,
    parksFaqs
} from '../lib/parksData';

export const metadata = {
    title: 'Park & Campground Management Software | weleba',
    description: 'Comprehensive PMS for state and national parks, RV parks, and campgrounds. Manage lodge rooms and tent sites with integrated booking solutions.',
};

export default function ParksPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={parksHeroContent} faqs={parksFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={parksAdvantages.title}
                    subtitle={parksAdvantages.subtitle}
                    features={parksAdvantages.features}
                />

                <PMSTransform content={parksPlatform} />

                <ContentBlock
                    title={parksReporting.title}
                    description={parksReporting.description}
                    image={parksReporting.image}
                    lists={parksReporting.lists}
                    imageLeft={parksReporting.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
