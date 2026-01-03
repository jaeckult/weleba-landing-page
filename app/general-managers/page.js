import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    gmHeroContent,
    gmAdvantages,
    gmPlatform,
    gmPerformance,
    gmFaqs
} from '../lib/generalManagerData';

export const metadata = {
    title: 'Hotel Management Software for General Managers | weleba',
    description: 'Streamline hotel operations and gain real-time visibility with weleba. Our all-in-one platform empowers GMs to lead with confidence and drive revenue.',
};

export default function GeneralManagerPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={gmHeroContent} faqs={gmFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={gmAdvantages.title}
                    subtitle={gmAdvantages.subtitle}
                    features={gmAdvantages.features}
                />

                <PMSTransform content={gmPlatform} />

                <ContentBlock
                    title={gmPerformance.title}
                    description={gmPerformance.description}
                    image={gmPerformance.image}
                    lists={gmPerformance.lists}
                    imageLeft={gmPerformance.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
