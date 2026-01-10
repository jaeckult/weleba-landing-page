import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    geHeroContent,
    geAdvantages,
    geTransform,
    gePersonalTouch,
    geFaqs
} from '../lib/guestEngagementData';

export const metadata = {
    title: 'Hotel Guest Engagement & CRM Software | weleba',
    description: 'Build lasting guest relationships with automated, personalized communication. weleba helps you turn every guest into a repeat customer.',
};

export default function GuestEngagementPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={geHeroContent} faqs={geFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={geAdvantages.title}
                    subtitle={geAdvantages.subtitle}
                    features={geAdvantages.features}
                />

                <PMSTransform content={geTransform} />

                <ContentBlock
                    title={gePersonalTouch.title}
                    description={gePersonalTouch.description}
                    image={gePersonalTouch.image}
                    lists={gePersonalTouch.lists}
                    imageLeft={gePersonalTouch.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
