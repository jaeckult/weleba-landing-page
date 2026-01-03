import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    aiAgentHeroContent,
    aiAgentAdvantages,
    aiAgentControl,
    aiAgentStaffFreedom,
    aiAgentSteps,
    aiAgentFaqs
} from '../lib/aiAgentData';

export const metadata = {
    title: 'Hotel AI Agent & Virtual Concierge | weleba',
    description: 'Provide 24/7 guest support and handle bookings automatically with our AI voice agent. Communicates in any language and integrates with your PMS.',
};

export default function AiAgentPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={aiAgentHeroContent} faqs={aiAgentFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={aiAgentAdvantages.title}
                    subtitle={aiAgentAdvantages.subtitle}
                    features={aiAgentAdvantages.features}
                />

                <PMSTransform content={aiAgentControl} />

                <ContentBlock
                    title={aiAgentStaffFreedom.title}
                    description={aiAgentStaffFreedom.description}
                    image={aiAgentStaffFreedom.image}
                    lists={aiAgentStaffFreedom.lists}
                    imageLeft={aiAgentStaffFreedom.imageLeft}
                />

                <FeatureCards
                    title={aiAgentSteps.title}
                    subtitle={aiAgentSteps.subtitle}
                    features={aiAgentSteps.features}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
