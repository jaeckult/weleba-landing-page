'use client';

import PMSHero from '@/app/components/sections/PMSHero';
import TabbedFeatures from '@/app/components/sections/TabbedFeatures';
import PMSTransform from '@/app/components/sections/PMSTransform';
import ContentBlock from '@/app/components/sections/ContentBlock';
import Testimonials from '@/app/components/sections/Testimonials';
import LogoSlideshow from '@/app/components/sections/LogoSlideshow';
import { getGenericData } from '@/app/lib/pageData/genericData';

export default function GenericFeaturePage() {
    const data = getGenericData('Learner Success Stories', '⭐');
    return (
        <main className="bg-white">
            <PMSHero heroContent={data.heroContent}>
                <LogoSlideshow />
                <Testimonials />
                <PMSTransform content={data.transformContent} />
                <TabbedFeatures
                    title={data.tabbedContent.title}
                    subtitle={data.tabbedContent.subtitle}
                    tabs={data.tabbedContent.tabs}
                />
                {data.alternatingContent.map((feature, index) => (
                    <ContentBlock
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        image={feature.image}
                        lists={feature.lists}
                        imageLeft={feature.imageLeft}
                    />
                ))}
            </PMSHero>
        </main>
    );
}
