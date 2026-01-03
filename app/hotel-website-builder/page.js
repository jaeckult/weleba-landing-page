import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    wbHeroContent,
    wbWhyHelp,
    wbJourney,
    wbAnalytics,
    wbConversion,
    wbFaqs
} from '../lib/websiteBuilderData';

export const metadata = {
    title: 'Hotel Website Builder & Design Services | weleba',
    description: 'We help you build professional, mobile-friendly hotel websites that drive direct bookings and capture your brand identity.',
};

export default function WebsiteBuilderPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={wbHeroContent} faqs={wbFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={wbWhyHelp.title}
                    subtitle={wbWhyHelp.subtitle}
                    features={wbWhyHelp.features}
                />

                <PMSTransform content={wbJourney} />

                <ContentBlock
                    title={wbAnalytics.title}
                    description={wbAnalytics.description}
                    image={wbAnalytics.image}
                    lists={wbAnalytics.lists}
                    imageLeft={wbAnalytics.imageLeft}
                />

                <FeatureCards
                    title={wbConversion.title}
                    subtitle={wbConversion.subtitle}
                    features={wbConversion.features}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
