import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    rmHeroContent,
    rmWhyTrust,
    rmBoundaries,
    rmMachineLearning,
    rmHowItWorks,
    rmFaqs
} from '../lib/revenueManagementData';

export const metadata = {
    title: 'Hotel Revenue Management Software | weleba',
    description: 'Optimize hotel revenue with dynamic pricing, forecasting, and machine learning. seamlessly integrated with your PMS.',
};

export default function RevenueManagementPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={rmHeroContent} faqs={rmFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={rmWhyTrust.title}
                    subtitle={rmWhyTrust.subtitle}
                    features={rmWhyTrust.features}
                />

                <PMSTransform content={rmBoundaries} />

                <ContentBlock
                    title={rmMachineLearning.title}
                    description={rmMachineLearning.description}
                    image={rmMachineLearning.image}
                    lists={rmMachineLearning.lists}
                    imageLeft={rmMachineLearning.imageLeft}
                />

                <FeatureCards
                    title={rmHowItWorks.title}
                    subtitle={rmHowItWorks.subtitle}
                    features={rmHowItWorks.features}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
