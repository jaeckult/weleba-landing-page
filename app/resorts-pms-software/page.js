import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    resortsHeroContent,
    resortsAdvantages,
    resortsPlatform,
    resortsGuestApp,
    resortsFaqs
} from '../lib/resortsData';

export const metadata = {
    title: 'Resort Property Management Software (PMS) | weleba',
    description: 'All-in-one resort management software for lodging, activities, and spa. Streamline multi-department operations and enhance guest experiences.',
};

export default function ResortsPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={resortsHeroContent} faqs={resortsFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={resortsAdvantages.title}
                    subtitle={resortsAdvantages.subtitle}
                    features={resortsAdvantages.features}
                />

                <PMSTransform content={resortsPlatform} />

                <ContentBlock
                    title={resortsGuestApp.title}
                    description={resortsGuestApp.description}
                    image={resortsGuestApp.image}
                    lists={resortsGuestApp.lists}
                    imageLeft={resortsGuestApp.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
