import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    bbHeroContent,
    bbAdvantages,
    bbPlatform,
    bbPersonalTouch,
    bbFaqs
} from '../lib/bbInnsData';

export const metadata = {
    title: 'Bed & Breakfast (B&B) Management Software | weleba',
    description: 'Simplify B&B management with easy-to-use software for reservations, channel distribution, and guest engagement. spend more time with your guests.',
};

export default function BedBreakfastPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={bbHeroContent} faqs={bbFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={bbAdvantages.title}
                    subtitle={bbAdvantages.subtitle}
                    features={bbAdvantages.features}
                />

                <PMSTransform content={bbPlatform} />

                <ContentBlock
                    title={bbPersonalTouch.title}
                    description={bbPersonalTouch.description}
                    image={bbPersonalTouch.image}
                    lists={bbPersonalTouch.lists}
                    imageLeft={bbPersonalTouch.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
