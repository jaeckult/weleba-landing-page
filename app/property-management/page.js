import PMSHero from '../components/sections/PMSHero';
import TabbedFeatures from '../components/sections/TabbedFeatures';
import PMSTransform from '../components/sections/PMSTransform';
import { pmFeatureGrid, pmTabbedFeatures, pmAlternatingFeatures, pmTransformContent } from '../lib/propertyManagementData';
import { pmTransformContent as pmTransformData } from '../lib/newPmData';

import ContentBlock from '../components/sections/ContentBlock';
import Testimonials from '../components/sections/Testimonials';
import LogoSlideshow from '../components/sections/LogoSlideshow';
import GetStarted from '../components/sections/GetStarted';

export const metadata = {
    title: 'Hotel Property Management System (PMS) | weleba',
    description: 'The complete cloud PMS for modern hotels.',
};

export default function PropertyManagementPage() {
    return (
        <main className="bg-white">
            <PMSHero>
                <LogoSlideshow />

                {/* Testimonial Section (Reusing existing component, might show random or specific) */}
                <Testimonials />

                <PMSTransform content={pmTransformData} />

                <TabbedFeatures
                    title={pmTabbedFeatures.title}
                    subtitle={pmTabbedFeatures.subtitle}
                    tabs={pmTabbedFeatures.tabs}
                />

                {/* Alternating Detail Sections */}
                {pmAlternatingFeatures.map((feature, index) => (
                    <ContentBlock
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                        lists={feature.lists}
                        imageLeft={feature.imageLeft}
                    />
                ))}
                <GetStarted />
            </PMSHero>
        </main>
    );
}
