import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    fdmHeroContent,
    fdmAdvantages,
    fdmPlatform,
    fdmCoordination,
    fdmFaqs
} from '../lib/frontDeskManagerData';

export const metadata = {
    title: 'Hotel Management Software for Front Desk Managers | weleba',
    description: 'Empower your front office team with intuitive tools that speed up check-ins and reduce training time. Manage your entire front desk from one platform.',
};

export default function FrontDeskManagerPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={fdmHeroContent} faqs={fdmFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={fdmAdvantages.title}
                    subtitle={fdmAdvantages.subtitle}
                    features={fdmAdvantages.features}
                />

                <PMSTransform content={fdmPlatform} />

                <ContentBlock
                    title={fdmCoordination.title}
                    description={fdmCoordination.description}
                    image={fdmCoordination.image}
                    lists={fdmCoordination.lists}
                    imageLeft={fdmCoordination.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
