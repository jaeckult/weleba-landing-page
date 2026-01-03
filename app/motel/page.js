import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    motelHeroContent,
    motelAdvantages,
    motelPlatform,
    motelCommunication,
    motelFaqs
} from '../lib/motelsData';

export const metadata = {
    title: 'Motel Management Software & PMS | weleba',
    description: 'Simple, powerful property management software built for motels. Streamline operations, increase direct bookings, and maximize your motel profitability.',
};

export default function MotelPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={motelHeroContent} faqs={motelFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={motelAdvantages.title}
                    subtitle={motelAdvantages.subtitle}
                    features={motelAdvantages.features}
                />

                <PMSTransform content={motelPlatform} />

                <ContentBlock
                    title={motelCommunication.title}
                    description={motelCommunication.description}
                    image={motelCommunication.image}
                    lists={motelCommunication.lists}
                    imageLeft={motelCommunication.imageLeft}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
