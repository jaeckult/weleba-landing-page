import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import { 
  beHeroContent, 
  beBenefits, 
  bePowerhouse, 
  beMaximizeDirect, 
  beBoostRevenue, 
  beGroupBookings, 
  beOptimizeStrategy,
  beFaqs 
} from '../lib/bookingEngineData';

export const metadata = {
    title: 'Commission-Free Direct Hotel Booking Engine | weleba',
    description: 'Create guest-friendly booking pages with clear rate calendars. Customize to match your brand, add upsell options, and sync with your PMS.',
};

export default function BookingEnginePage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={beHeroContent} faqs={beFaqs}>
                <LogoSlideshow />
                <Testimonials />
                
                <FeatureCards
                    title={beBenefits.title}
                    subtitle={beBenefits.subtitle}
                    features={beBenefits.features}
                />

                <ContentBlock
                    title={bePowerhouse.title}
                    description={bePowerhouse.description}
                    image={bePowerhouse.image}
                    lists={bePowerhouse.lists}
                    imageLeft={bePowerhouse.imageLeft}
                />

                <FeatureCards
                    title={beMaximizeDirect.title}
                    subtitle={beMaximizeDirect.subtitle}
                    features={beMaximizeDirect.features}
                />

                <FeatureCards
                    title={beBoostRevenue.title}
                    subtitle={beBoostRevenue.subtitle}
                    features={beBoostRevenue.features}
                />

                <ContentBlock
                    title={beGroupBookings.title}
                    description={beGroupBookings.description}
                    image={beGroupBookings.image}
                    lists={beGroupBookings.lists}
                    imageLeft={beGroupBookings.imageLeft}
                />

                <FeatureCards
                    title={beOptimizeStrategy.title}
                    subtitle={beOptimizeStrategy.subtitle}
                    features={beOptimizeStrategy.features}
                />

                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}

