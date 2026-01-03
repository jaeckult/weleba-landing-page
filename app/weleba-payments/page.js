import BookingEngineHero from '../components/sections/BookingEngineHero';
import FeatureCards from '../components/sections/FeatureCards';
import PMSTransform from '../components/sections/PMSTransform';
import ContentBlock from '../components/sections/ContentBlock';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import Testimonials from '../components/sections/Testimonials';
import GetStarted from '../components/sections/GetStarted';
import {
    paymentsHeroContent,
    paymentsAdvantages,
    paymentsPainless,
    paymentsGroupBilling,
    paymentsReliability,
    paymentsFaqs
} from '../lib/paymentsData';

export const metadata = {
    title: 'Hotel Payment Processing & Gateway | weleba',
    description: 'Secure, integrated payment processing built specifically for hotels. Automate reconciliations and protect against chargebacks.',
};

export default function PaymentsPage() {
    return (
        <main className="bg-white">
            <BookingEngineHero heroContent={paymentsHeroContent} faqs={paymentsFaqs}>
                <LogoSlideshow />
                <Testimonials />

                <FeatureCards
                    title={paymentsAdvantages.title}
                    subtitle={paymentsAdvantages.subtitle}
                    features={paymentsAdvantages.features}
                />

                <PMSTransform content={paymentsPainless} />

                <ContentBlock
                    title={paymentsGroupBilling.title}
                    description={paymentsGroupBilling.description}
                    image={paymentsGroupBilling.image}
                    lists={paymentsGroupBilling.lists}
                    imageLeft={paymentsGroupBilling.imageLeft}
                />

                <FeatureCards
                    title={paymentsReliability.title}
                    subtitle={paymentsReliability.subtitle}
                    features={paymentsReliability.features}
                />
                <GetStarted />
            </BookingEngineHero>
        </main>
    );
}
